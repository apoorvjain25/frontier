# Craft: Security (auth, multi-tenancy, privacy, secrets, dependencies, security audits)

What excellent security work IS, checkable. Defensive craft for building and auditing your own
products.

## 1. Authentication and authorization

- Every route, endpoint, and server action states its required identity and role. Deny by
  default; an unprotected new route is an incident, not an oversight.
- Authorization is enforced server-side at the handler or data layer. Client-side checks are
  UX, never security; middleware-only checks fail on path-matching gaps.
- Object-level checks on every fetch, update, and delete by id (the IDOR classic): touching
  /api/things/123 must verify the caller owns or may see 123, not just that the caller is
  logged in. Read-side checks alone leave writes and deletes open.
- Multi-tenant rule (absolute): EVERY query in tenant-scoped code carries the tenant filter
  (tenantId in the where clause, or row-level security enforced in the database). The tenant
  id comes from the session or the verified resource, never from the request body; relation
  writes (connect, nested create) and sessionless jobs and webhooks are scoped the same way.
  One missing scope leaks a customer's data to another customer. Audit for it explicitly;
  never assume it.
- Database clients that bypass row-level security (admin or service keys) never run in request
  paths that carry user input; request paths use the tenant-scoped client.
- Tokens presented as identity (JWT, OAuth, SCIM bearer) are verified: signature, issuer,
  audience, expiry, constant-time comparison. Decoding without verifying is not authentication.
- Auth flows: rate-limit login, signup, and reset endpoints; identical response and timing for
  "no such user" and "wrong password" (enumeration guard); password reset tokens single-use
  and expiring; rotate the session id on login and privilege change; sessions in httpOnly
  secure cookies; CSRF protection wherever cookies authenticate state-changing requests;
  re-verify (fresh password or MFA) on password change, email change, key creation, deletion.
- Endpoints that spend money or send messages (LLM calls, email, SMS, exports) get per-user
  and per-tenant caps; admin and destructive actions write an audit entry (who, what, when).

## 2. Input, output, and integrations

- Validate at the boundary with schemas that reject unknown fields and use closed enums (body,
  params, headers, webhooks); trust nothing from the client, including hidden fields and
  enums. An optional-everything schema validates nothing.
- Never spread a request body into a create or update (mass assignment: a smuggled role field
  escalates privileges); allowlist writable fields explicitly.
- Parameterized queries only; string-built SQL is banned even for internal tools.
- Encode output for its context (HTML, attribute, URL) or use a framework that does; any place
  user content renders is an XSS candidate.
- File uploads: allowlist types, cap size, randomize stored names, never serve from the upload
  path with execution enabled.
- User-supplied URLs the server fetches (webhooks, imports, link previews) are SSRF vectors:
  allowlist schemes and hosts, block internal ranges. Redirect targets from params (next=,
  redirect_uri) are allowlisted too; open redirects feed phishing and OAuth token theft.
- Verify signatures on EVERY inbound webhook (Slack, Stripe, SCIM, connectors): constant-time
  comparison, reject stale timestamps (replay window), verify BEFORE any side effect. An
  unsigned webhook endpoint is a free API into your system.
- LLM boundaries: user content in a prompt is data, not instructions; model output is
  untrusted input: encode before rendering, allowlist before it drives tools, queries, URLs.

## 3. Secrets and keys

- Secrets live in env or a vault, never in code, git history, logs, error messages, or client
  bundles. In Next.js, audit every NEXT_PUBLIC_ variable: that prefix means published.
- Least privilege per key (read-only where read is enough); separate keys per environment;
  rotate on any suspected exposure, immediately, then investigate.
- LLM and API keys: server-side only, metered, with spend alerts (a leaked AI key burns money
  in hours).

## 4. Privacy and data care

- Collect the minimum; know exactly where PII lives (tables, logs, backups, third parties) and
  write it down. A deletion request must be executable, which means knowing every copy.
- Retention stated per data class; logs scrub PII and secrets.
- Health-adjacent and sensitive-category data gets stricter defaults: encrypt at rest, narrow
  access, no PII in analytics events, and check the applicable regime (GDPR, DPDP, HIPAA-like
  expectations) before building, not after.
- Third parties (analytics, error tracking, AI APIs): know what data leaves your system and
  whether the terms permit it. Do not send user content to a model API the privacy policy does
  not cover.

## 5. Dependencies and supply chain

- Lockfiles committed; installs reproducible.
- Adding a dependency is a decision: who maintains it, when was the last release, how many
  dependents, could 30 lines replace it? Typosquat check on the exact name.
- Pin CI actions and build tooling by version or hash; run audits at least monthly and on
  every lockfile change.

## 6. The audit procedure (security review of any codebase or feature)

1. Enumerate entry points: routes, server actions, webhooks, cron jobs, file uploads, admin
   surfaces. Coverage is measured against this written list.
2. Per entry point, walk the checklist: authn? role check? object-level or tenant check?
   input validated? output encoded? secrets touched, and are they logged? rate-limited?
3. The abuse pass: for each surface, ask how would I read another tenant's data, escalate my
   role, make the system spend money, or make it fetch something internal.
4. Grep passes: hardcoded secrets, NEXT_PUBLIC_ misuse, raw SQL string building, unscoped
   queries in tenant code (find-by-id without tenant filter), request bodies spread into
   writes, empty catches around auth.
5. Report coverage-first (every finding, any confidence, per code.md section 5), each with a
   concrete exploit scenario and the fix.

## 7. Ban list

- Roll-your-own crypto, sessions, or password hashing (use the platform's proven primitives).
- Security by obscurity ("nobody knows this URL").
- "It is internal so it is safe" (internal tools get breached through the front door).
- Tokens or secrets in URLs (they land in logs and history).
- Comparing secrets or signatures with plain string equality (timing leak); use a
  constant-time compare.
- Catch-all try blocks around auth logic (failures must fail closed, loudly).
- Verbose production errors leaking stack traces, queries, or paths.
- Disabling TLS verification, wildcard CORS with credentials, permissive CSP "temporarily".

## 8. Verification checklist (every pass)

1. For each new or changed route: one unauthorized attempt actually made (no cookie, wrong
   role, other tenant's id) and observed to fail correctly.
2. Grep pass results attached (secrets, unscoped queries, raw SQL, body-spread writes).
3. Built client bundle grepped for secret prefixes (sk-, whsec_, service_role, BEGIN PRIVATE).
4. Webhook endpoints verified to reject unsigned, tampered, and replayed payloads.
5. Dependency audit run; new dependencies justified in one line each.
6. PII map updated if data shapes changed; deletion path still works.
