-- D1 Migration Schema for Cloudflare Workers
-- Run with: wrangler d1 migrations apply compliance-checker-db --local

-- Users table (agency admins)
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  last_used_at TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Scans table (core entity)
CREATE TABLE IF NOT EXISTS scans (
  id TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  result_json TEXT,
  email TEXT,
  stripe_session_id TEXT,
  subscriber_id TEXT,
  user_id TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  completed_at TEXT
);

-- Subscribers (Stripe recurring)
CREATE TABLE IF NOT EXISTS subscribers (
  id TEXT PRIMARY KEY,
  stripe_customer_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  plan TEXT NOT NULL DEFAULT 'monthly',
  status TEXT NOT NULL DEFAULT 'active',
  current_period_end TEXT,
  cancel_at_period_end INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);

-- Subscriber tokens (magic link / session tokens)
CREATE TABLE IF NOT EXISTS subscriber_tokens (
  token TEXT PRIMARY KEY,
  subscriber_id TEXT NOT NULL,
  expires_at TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  last_used_at TEXT,
  FOREIGN KEY (subscriber_id) REFERENCES subscribers(id)
);

-- Agency clients (for agency plan subscribers)
CREATE TABLE IF NOT EXISTS agency_clients (
  id TEXT PRIMARY KEY,
  agency_subscriber_id TEXT NOT NULL,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  FOREIGN KEY (agency_subscriber_id) REFERENCES subscribers(id)
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_scans_status ON scans(status);
CREATE INDEX IF NOT EXISTS idx_scans_email ON scans(email);
CREATE INDEX IF NOT EXISTS idx_scans_created_at ON scans(created_at);
CREATE INDEX IF NOT EXISTS idx_subscribers_stripe_customer ON subscribers(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_agency_clients_subscriber ON agency_clients(agency_subscriber_id);