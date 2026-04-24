#!/usr/bin/env python3
"""Manual Google OAuth2 + Sheets creation"""
import requests, json, time, webbrowser, sys, os
from urllib.parse import urlencode, quote

CLIENT_ID = "57246632087-6t39gd8ek3bpdgtoglc7re5vd21m0dt6.apps.googleusercontent.com"
CLIENT_SECRET = "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"
REDIRECT_URI = "https://developers.google.com/oauthplayground"

SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
    "email",
    "openid",
]

def build_auth_url():
    params = {
        "client_id": CLIENT_ID,
        "redirect_uri": REDIRECT_URI,
        "response_type": "code",
        "scope": " ".join(SCOPES),
        "access_type": "offline",
        "include_granted_scopes": "true",
        "prompt": "consent",
    }
    return "https://accounts.google.com/o/oauth2/auth?" + urlencode(params)

def exchange_code(code):
    data = {
        "code": code,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "redirect_uri": REDIRECT_URI,
        "grant_type": "authorization_code",
    }
    r = requests.post("https://oauth2.googleapis.com/token", data=data)
    return r.json()

def create_spreadsheet(access_token, title):
    headers = {"Authorization": f"Bearer {access_token}", "Content-Type": "application/json"}
    body = {"properties": {"title": title}, "sheets": [{"properties": {"title": "Summary"}}, {"properties": {"title": "Monthly Data"}}, {"properties": {"title": "Categories"}}]}
    r = requests.post("https://sheets.googleapis.com/v4/spreadsheets", headers=headers, json=body)
    return r.json()

def update_cells(access_token, spreadsheet_id, range_name, values):
    headers = {"Authorization": f"Bearer {access_token}", "Content-Type": "application/json"}
    body = {"values": values}
    r = requests.put(
        f"https://sheets.googleapis.com/v4/spreadsheets/{spreadsheet_id}/values/{quote(range_name)}",
        headers=headers, json=body, params={"valueInputOption": "USER_ENTERED"}
    )
    return r.json()

if __name__ == "__main__":
    auth_url = build_auth_url()
    print("=" * 60)
    print("OPEN THIS URL IN YOUR BROWSER:")
    print("=" * 60)
    print(auth_url)
    print("=" * 60)
    print("\n1. Visit the URL above")
    print("2. Log in to your Google account")
    print("3. Click 'Allow'")
    print("4. You will be redirected to the OAuth Playground")
    print("5. Copy the AUTHORIZATION CODE from the page (the whole string after 'code=')")
    print("6. Paste it below and press Enter")
    print()
    code = input("Paste authorization code here: ").strip()
    
    print("\nExchanging code for tokens...")
    tokens = exchange_code(code)
    if "access_token" not in tokens:
        print("ERROR:", tokens)
        sys.exit(1)
    
    print("Got access token!")
    access_token = tokens["access_token"]
    
    # Save tokens
    with open("/home/thomas/Dropbox/google_tokens.json", "w") as f:
        json.dump(tokens, f, indent=2)
    print("Tokens saved!")
    
    # Create spreadsheet
    print("\nCreating spreadsheet...")
    ss = create_spreadsheet(access_token, "Thomas Chaffanjon — Financial Dashboard 2025-26")
    if "spreadsheetId" not in ss:
        print("ERROR creating sheet:", ss)
        sys.exit(1)
    
    ss_id = ss["spreadsheetId"]
    ss_url = ss["spreadsheetUrl"]
    print(f"Spreadsheet created: {ss_url}")
    print(f"ID: {ss_id}")
    
    # ===== POPULATE DATA =====
    MONTHS = ["Apr 2025","May 2025","Jun 2025","Jul 2025","Aug 2025","Sep 2025",
              "Oct 2025","Nov 2025","Dec 2025","Jan 2026","Feb 2026","Mar 2026"]
    TOTALS = {
        "Apr 2025":  (21357.05, 14032.24, 8964.02),
        "May 2025":  (20733.40, 26331.26, 3366.16),
        "Jun 2025":  (15365.29, 7555.75,  11176.01),
        "Jul 2025":  (17896.67, 21759.67, 7312.70),
        "Aug 2025":  (11690.99, 11346.88, 7656.81),
        "Sep 2025":  (31399.50, 27917.76, 11138.55),
        "Oct 2025":  (21447.45, 29140.08, 3445.92),
        "Nov 2025":  (14016.53, 8972.20,  8490.25),
        "Dec 2025":  (17143.00, 23255.17, 2378.08),
        "Jan 2026":  (13890.68, 6027.91,  10240.85),
        "Feb 2026":  (12896.45, 13716.83, 9420.47),
        "Mar 2026":  (15746.97, 16078.65, 9088.79),
    }

    # Sheet 1: Summary
    update_cells(access_token, ss_id, "Summary!A1", [
        ["THOMAS CHAFFANJON — FINANCIAL DASHBOARD 2025/26"],
        [""],
        ["KEY ANNUAL FIGURES"],
        ["Annual Income", "CHF", "213,584"],
        ["Annual Expenses", "CHF", "206,134"],
        ["Net Savings", "CHF", "7,450"],
        ["Savings Rate", "%", "3.5%"],
        ["Avg Monthly Expenses", "CHF", "17,178"],
        ["Tobacco (annual)", "CHF", "7,800"],
        ["Buffer (Mar 2026)", "CHF", "9,089"],
        ["Months in Deficit", "#", "6 of 12"],
        [""],
        ["CATEGORY ANNUAL TOTALS (CHF)"],
        ["Housing (Rent)", "CHF", "31,320"],
        ["Health Insurance", "CHF", "22,056"],
        ["Cantonal Tax", "CHF", "17,232"],
        ["Groceries", "CHF", "14,583"],
        ["Tobacco", "CHF", "7,800"],
        ["Restaurants", "CHF", "5,250"],
        ["Transport", "CHF", "4,800"],
        ["Kids Activities", "CHF", "4,330"],
        ["Entertainment", "CHF", "3,900"],
        ["Phone/Internet", "CHF", "1,800"],
    ])
    
    # Sheet 2: Monthly Data
    header = ["Month", "Income (CHF)", "Expenses (CHF)", "Net (CHF)", "Balance (CHF)", "Status"]
    rows = [header]
    for m in MONTHS:
        inc, exp, bal = TOTALS[m]
        net = inc - exp
        status = "SURPLUS" if net >= 0 else "DEFICIT"
        rows.append([m, round(inc,2), round(exp,2), round(net,2), round(bal,2), status])
    rows.append(["", "", "", "", "", ""])
    rows.append(["ANNUAL", sum(TOTALS[m][0] for m in MONTHS), sum(TOTALS[m][1] for m in MONTHS), sum(TOTALS[m][0]-TOTALS[m][1] for m in MONTHS), "", ""])
    update_cells(access_token, ss_id, "Monthly Data!A1", rows)
    
    # Sheet 3: Categories
    cat_header = ["Category", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Annual Total"]
    cats = [
        ("Housing", [2610,2610,2610,2610,2610,2610,2610,2610,2610,2610,2610,2610]),
        ("Health Insurance", [1838]*12),
        ("Cantonal Tax", [1436,1436,0,1436,0,1436,1436,0,1436,1436,1436,1436]),
        ("Groceries", [1800,3183,700,1200,900,1000,700,1000,1200,800,800,2800]),
        ("Restaurants", [400,700,300,800,500,350,400,450,800,350,450,550]),
        ("Transport", [450,350,300,400,450,400,450,350,350,400,400,500]),
        ("Entertainment", [180,420,200,250,500,200,600,250,600,200,250,350]),
        ("Kids", [600,450,165,465,100,1400,350,100,300,150,150,250]),
        ("Phone/Internet", [150]*12),
        ("Clothing", [200,150,0,150,0,0,0,0,250,0,0,0]),
        ("Savings Transfers", [2000,500,0,4346,0,9000,0,0,0,0,2000,0]),
        ("Tobacco", [650]*12),
    ]
    cat_rows = [cat_header]
    for cat_name, vals in cats:
        annual = sum(vals)
        cat_rows.append([cat_name] + vals + [annual])
    update_cells(access_token, ss_id, "Categories!A1", cat_rows)
    
    print(f"\n✅ All data written to Google Sheets!")
    print(f"   Spreadsheet: {ss_url}")
    
    # Save info
    info = {"spreadsheet_id": ss_id, "spreadsheet_url": ss_url}
    with open("/home/thomas/Dropbox/google_sheet_info.json", "w") as f:
        json.dump(info, f, indent=2)
