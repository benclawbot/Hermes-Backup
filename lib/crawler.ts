import puppeteer, { Browser } from 'puppeteer-core';

const CHROME_PATH = process.env.CHROME_PATH || '/usr/bin/chromium-browser';

export interface CrawlResult {
  url: string;
  title: string;
  description: string;
  h1s: string[];
  hasPrivacyPolicy: boolean;
  privacyPolicyUrl: string | null;
  hasCookieBanner: boolean;
  cookieBannerText: string | null;
  trackingScripts: string[];
  formsCount: number;
  formInputsLabeled: number;
  totalFormInputs: number;
  hasSSL: boolean;
  screenshots: string[];
  html: string;
  statusCode: number;
}

export async function crawlPage(url: string): Promise<CrawlResult> {
  let browser: Browser | null = null;

  try {
    browser = await puppeteer.launch({
      executablePath: CHROME_PATH,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    const statusCode = response?.status() || 0;

    const title = await page.title();
    const description = await page.$eval('meta[name="description"]', el => el.getAttribute('content') || '').catch(() => '');

    const h1s = await page.$$eval('h1', els => els.map(el => el.textContent?.trim() || ''));

    const privacyLink = await page.$('a[href*="privacy"], a[href*="datenschutz"], a[href*="rgpd"]');
    const privacyPolicyUrl = privacyLink ? await privacyLink.evaluate(el => (el as HTMLAnchorElement).href) : null;
    const hasPrivacyPolicy = !!privacyPolicyUrl || !!(await page.$('meta[name="robots"]'));

    const cookieBanner = await page.$('[class*="cookie"], [id*="cookie"], [class*="consent"], [id*="consent"], [class*="gdpr"], [id*="gdpr"]');
    const cookieBannerText = cookieBanner ? await cookieBanner.evaluate(el => el.textContent?.trim() || '') : null;
    const hasCookieBanner = !!cookieBanner;

    const scripts = await page.$$eval('script[src]', els =>
      els.map(el => el.getAttribute('src') || '')
    );
    const trackingPatterns = ['google-analytics', 'googletagmanager', 'facebook', 'fbpixel', 'hotjar', 'mixpanel', 'segment', 'intercom', 'drift', 'zendesk'];
    const trackingScripts = scripts.filter(src =>
      trackingPatterns.some(p => src.toLowerCase().includes(p))
    );

    const forms = await page.$$('form');
    const formsCount = forms.length;
    const allInputs = await page.$$('input, textarea, select');
    const totalFormInputs = allInputs.length;
    const labeledInputs = await page.$$eval('input, textarea, select', els =>
      els.filter(el => {
        const id = el.getAttribute('id');
        const ariaLabel = el.getAttribute('aria-label');
        const ariaLabelledby = el.getAttribute('aria-labelledby');
        const hasLabel = !!id && !!document.querySelector(`label[for="${id}"]`);
        return !!(id && (ariaLabel || ariaLabelledby || hasLabel));
      }).length
    );

    const hasSSL = url.startsWith('https://');

    const screenshot = await page.screenshot({ encoding: 'base64', fullPage: false });

    const html = await page.content();
    const trimmedHtml = html.slice(0, 50000);

    await browser.close();

    return {
      url,
      title,
      description,
      h1s,
      hasPrivacyPolicy,
      privacyPolicyUrl,
      hasCookieBanner,
      cookieBannerText,
      trackingScripts,
      formsCount,
      formInputsLabeled: labeledInputs,
      totalFormInputs,
      hasSSL,
      screenshots: [screenshot],
      html: trimmedHtml,
      statusCode,
    };
  } catch (error: any) {
    if (browser) await browser.close().catch(() => {});
    throw new Error(`Crawl failed: ${error.message}`);
  }
}
