# DevWorks AI — devworksai.io

Business website for DevWorks AI LLC. Built with Vite + React + TypeScript, deployed to GitHub Pages with custom domain.

## Stack

- **Vite 8** — fast builds, static output
- **React 19** — component-driven UI
- **TypeScript** — strict mode
- **react-router-dom** — client-side routing with GitHub Pages SPA redirect
- **GitHub Pages** — static hosting via Actions

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Sticky nav with mobile menu
│   ├── Footer.tsx        # Footer with CTA banner
│   ├── Layout.tsx        # Shared layout (header/main/footer)
│   └── ScrollToTop.tsx   # Reset scroll on route change
├── pages/
│   ├── Home.tsx          # Hero, value props, previews
│   ├── Services.tsx      # Full service offerings
│   ├── About.tsx         # Company positioning
│   ├── Capabilities.tsx  # Capability/case-study cards
│   └── Contact.tsx       # Email CTA, engagement types
├── constants.ts          # Shared site config
├── index.css             # Global styles + design system
├── main.tsx              # Entry point
└── App.tsx               # Router config
public/
├── CNAME                 # Custom domain for GitHub Pages
├── 404.html              # SPA redirect for GitHub Pages
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Deployment

### GitHub Actions (Recommended)

The repo includes `.github/workflows/deploy.yml`. On every push to `main`, it:

1. Installs dependencies
2. Builds the static site
3. Deploys to GitHub Pages

**Setup steps:**

1. Push this repo to GitHub (e.g., `devworksai/devworksai-site` or your personal account).
2. Go to **Settings → Pages → Source** → select **GitHub Actions**.
3. Push to `main` to trigger the first deploy.

### Manual Deploy (Alternative)

```bash
npm run build
# The `dist/` folder contains the static site.
# Deploy it to any static host.
```

---

## DNS Configuration — Custom Domain (devworksai.io)

Your domain is registered through Squarespace Domains with Google Cloud nameservers. Email forwarding (Mailgun) is already configured and **must be preserved**.

### What to Change

In your **Squarespace Domains → DNS Settings**, you need to **replace the Squarespace Defaults** section with GitHub Pages records. Do NOT touch the email forwarding records.

#### Step 1: Remove Squarespace Default Records

Delete these records from the **"Squarespace Defaults"** section:

| Type  | Name | Data                          |
|-------|------|-------------------------------|
| A     | @    | 198.185.159.144               |
| A     | @    | 198.49.23.145                 |
| A     | @    | 198.185.159.145               |
| A     | @    | 198.49.23.144                 |
| CNAME | www  | ext-sq.squarespace.com        |
| HTTPS | @    | *(the Squarespace HTTPS record)* |

> **Note:** Squarespace Defaults may need to be removed as a preset before you can delete individual records. If so, remove the preset, then add the custom records below.

#### Step 2: Add GitHub Pages Records

Add these as **Custom Records**:

| Type  | Name | TTL   | Data                   |
|-------|------|-------|------------------------|
| A     | @    | 1 hr  | 185.199.108.153        |
| A     | @    | 1 hr  | 185.199.109.153        |
| A     | @    | 1 hr  | 185.199.110.153        |
| A     | @    | 1 hr  | 185.199.111.153        |
| CNAME | www  | 1 hr  | devworksai.github.io   |

> **Adjust the CNAME** if your GitHub repo is under a personal account:
> - Org repo (e.g., `devworksai/devworksai-site`) → `devworksai.github.io`
> - Personal repo (e.g., `yourusername/devworksai-site`) → `yourusername.github.io`

#### Step 3: Keep These Records (DO NOT DELETE)

All email forwarding records stay as-is:

| Type | Name             | Data                        |
|------|------------------|-----------------------------|
| MX   | @                | mxa.mailgun.org (pri 10)    |
| MX   | @                | mxb.mailgun.org (pri 10)    |
| TXT  | @                | v=spf1 include:mailgun.org ~all |
| TXT  | pic._domainkey   | *(your DKIM key)*           |
| TXT  | _dmarc           | *(your DMARC policy)*       |

#### Step 4: Enable HTTPS in GitHub

1. Go to your repo **Settings → Pages**.
2. Enter `devworksai.io` as the Custom domain.
3. Wait for DNS check to pass (may take a few minutes with new records).
4. Check **Enforce HTTPS**.

#### Step 5: Verify

After DNS propagation (up to 1 hour):

- `https://devworksai.io` → serves the site
- `https://www.devworksai.io` → redirects to apex
- Email forwarding continues working

### Troubleshooting

```bash
# Verify A records
dig devworksai.io +short
# Should return: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

# Verify CNAME
dig www.devworksai.io +short
# Should return: devworksai.github.io (or yourusername.github.io)

# Verify MX records still work
dig devworksai.io MX +short
# Should return: 10 mxa.mailgun.org, 10 mxb.mailgun.org
```

---

## Notes

- The `public/CNAME` file is included in every build — GitHub Pages needs it to serve the custom domain.
- The `public/404.html` handles SPA routing — GitHub Pages returns it for unknown paths, and the script redirects back to the React router.
- All contact is via `mailto:` links — no backend or form service required.
- Social links (LinkedIn, GitHub) are placeholder URLs in `src/constants.ts` — update when ready.

## License

Proprietary. © DevWorks AI LLC.
