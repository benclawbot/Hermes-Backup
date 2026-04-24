# ENTITIES.md — Structured Entity Memory

> Version: 4.0
> Single source of truth for named entities, service facts, and secret references.
> Raw secret values are forbidden in this file.
> Canonical human profile lives in `USER.md`.

Required fields:
- `type`
- `service` or `name`
- `kind`
- `usage`
- `source`
- `confidence`
- `verified_at`
- `last_tested_by`
- `scope`
- `rotation_policy` or `expires_after`
- one or more of `secret_ref`, `path_ref`, `retrieval_method`, `profile_ref`

## CREDENTIALS

### mailjet-api
type: credential
service: Mailjet
kind: api-key-pair
secret_ref_api_key: /home/thomas/.config/mailjet_api_key
secret_ref_secret_key: /home/thomas/.config/mailjet_secret_key
usage: SMTP auth and Mailjet REST API calls
scope: compliance-checker email delivery
source: human-provided
confidence: HIGH
verified_at: 2026-03-31
last_tested_by: main
expires_after: 180d
rotation_policy: rotate at 180d or on suspected exposure
notes: Raw values removed from repo during v4 migration.

### google-sheets
type: credential
service: Google Sheets API
kind: oauth2-client
secret_ref_client_id: /home/thomas/.config/google_sheets_client_id
secret_ref_client_secret: /home/thomas/.config/google_sheets_client_secret
path_ref_tokens: /home/thomas/Dropbox/google_tokens.json
path_ref_sheet_info: /home/thomas/Dropbox/google_sheet_info.json
usage: Create and populate Google Sheets for financial data
scope: sheets + drive.file
source: human-provided (client_secret.json)
confidence: HIGH
verified_at: 2026-04-03
last_tested_by: main
expires_after: never (refresh token, rotate if compromised)
notes: OAuth2 flow done manually via developers.google.com/oauthplayground redirect.
expires_after: 365d
rotation_policy: rotate on password change
notes: Website login is not valid for programmatic API access.

### github-pat
type: credential
service: GitHub
kind: personal-access-token
secret_ref: /home/thomas/.config/github_token
usage: git push and GitHub API calls
scope: development operations
source: human-provided
confidence: HIGH
verified_at: 2026-03-30
last_tested_by: main
expires_after: 90d
rotation_policy: rotate at 90d or on revocation

### vercel-token
type: credential
service: Vercel
kind: api-token
secret_ref: /home/thomas/.config/vercel_token
usage: Vercel CLI deploys and REST API
scope: deployment operations
source: human-provided
confidence: HIGH
verified_at: 2026-03-30
last_tested_by: main
expires_after: 90d
rotation_policy: rotate at 90d or on revocation

### compliance-checker-env
type: credential
service: compliance-checker
kind: env-file
path_ref: /home/thomas/Dropbox/Projects/compliance-checker/.env.local
usage: project-scoped environment variables
scope: compliance-checker runtime configuration
source: human-provided
confidence: HIGH
verified_at: 2026-03-30
last_tested_by: main
expires_after: never
rotation_policy: rotate contained keys per provider policy
notes: Treat the file as secret material. Do not copy values into repo files.

## SERVICES

### dropbox-sync
type: service
name: Dropbox
kind: sync-root
path_ref: /home/thomas/Dropbox
usage: shared project state and artifact sync
scope: approved external path
source: human-provided
confidence: HIGH
verified_at: 2026-03-30
last_tested_by: main
rotation_policy: n/a

### sqlite-db
type: service
name: SQLite
kind: local-state-store
retrieval_method: inspect project-local database files when required
usage: local application state and agent coordination state
scope: project runtime and Orbit coordination
source: agent-inferred
confidence: MEDIUM
verified_at: 2026-03-30
last_tested_by: main
rotation_policy: n/a

## PEOPLE

### thomas
type: person
name: Thomas
kind: project-owner
profile_ref: USER.md
usage: canonical human context lookup
scope: all projects in this workspace
source: human-provided
confidence: HIGH
verified_at: 2026-03-31
last_tested_by: main
rotation_policy: n/a

## WRITE PROTOCOL

When new entity information arrives:
1. Update or add the entity block immediately.
2. Store references, not secret values.
3. Log `EVENT=ENTITY_WRITE` in `LOG.md`.
4. If the entity points to an external path, verify the path is allowlisted in `TOOLS.md`.
5. If a credential is invalid, set `confidence: LOW`, add `invalidated_at:`, and stop for human intervention.

### cloudflare-workers
type: credential
service: Cloudflare
kind: api-token
secret_ref: /home/thomas/.config/cloudflare_workers_token
usage: Workers script deployment, Workers AI, account management
scope: account 8e234c2f51dafa5dc0c52ad99d110908 (Benclawbot@gmail.com)
source: human-provided
confidence: HIGH
verified_at: 2026-04-02
last_tested_by: main
expires_after: unknown
rotation_policy: rotate on suspected exposure
notes: Full Workers edit + AI access. Used for free-image-gen worker deployment.

### cloudflare-account
type: credential
service: Cloudflare
kind: account
usage: Workers & Pages deployment target
account_id: 8e234c2f51dafa5dc0c52ad99d110908
account_name: "Benclawbot@gmail.com's Account"
scope: Workers AI, Workers Scripts
source: verified-from-token
confidence: HIGH
verified_at: 2026-04-02
rotation_policy: n/a

### free-image-gen-worker
type: credential
service: Cloudflare Workers
kind: worker
usage: AI image generation via Stable Diffusion XL
worker_url: https://free-image-gen.benclawbot.workers.dev
api_key_secret: API_KEY (stored in Cloudflare Workers secrets)
secret_value_ref: free-image-gen-secret-2026 (change this to a secure value)
account_id: 8e234c2f51dafa5dc0c52ad99d110908
source: deployed-by-agent
confidence: HIGH
verified_at: 2026-04-02
rotation_policy: rotate secret via wrangler or API
notes: Uses Workers AI binding (env.AI.run with @cf/stabilityai/stable-diffusion-xl-base-1.0). 100k calls/day free tier. 1010 blocking from this server's ASN is a known limitation - worker accessible from other networks.

### groq-api
type: credential
service: Groq
kind: api-key
secret_ref: /home/thomas/.config/groq_api_key
usage: LLM inference (chat completions, transcription). NOT for image generation — Groq has no image gen models.
scope: text inference, voice transcription, development
source: human-provided
confidence: HIGH
verified_at: 2026-04-02
last_tested_by: main
expires_after: unknown
rotation_policy: rotate on suspected exposure
notes: Base URL is https://api.groq.com/openai/v1/chat/completions

### openrouter-api
type: credential
service: OpenRouter
kind: api-key
secret_ref: /home/thomas/.config/openrouter_api_key
usage: LLM inference via OpenRouter (access to many providers including free models). Also enables image analysis with openrouter/free model.
scope: text and image inference, development
source: human-provided
confidence: HIGH
verified_at: 2026-04-03
last_tested_by: main
expires_after: unknown
rotation_policy: rotate on suspected exposure
notes: Base URL is https://openrouter.ai/api/v1. Use model "openrouter/free" for free-tier image analysis. Access to Claude, GPT, Llama, Mistral, and other models via unified API.
