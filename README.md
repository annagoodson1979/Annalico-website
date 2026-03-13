# Annalico Website

Live site: [annalico.com](https://annalico.com)

## Run locally on port 7153

Make sure you have [Node.js](https://nodejs.org) installed, then:

```bash
npm start
```

Then open **http://localhost:7153** in your browser.

> No build step is required — this is a static HTML/CSS/JS site.

---

## Hosting on GitHub Pages

`annalico.com` is hosted via **GitHub Pages** using the Actions workflow at
`.github/workflows/deploy-pages.yml`. Every push to `main` triggers a fresh
deployment automatically.

### One-time setup (do this once in your GitHub settings)

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, select **"GitHub Actions"**
   (not the legacy "Deploy from a branch" option).
3. Click **Save**.

That's it — the workflow handles everything else from there.

### DNS setup (do this once in your domain registrar)

For `annalico.com` to resolve to GitHub Pages, add these four **A records**
in your domain's DNS dashboard (e.g. GoDaddy, Namecheap, Google Domains):

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Also add a **CNAME record** so `www.annalico.com` resolves correctly
(GitHub Pages accepts both the apex and `www` when this record is in place):

| Type | Name | Value |
|------|------|-------|
| CNAME | www | annagoodson1979.github.io |

> The `www` CNAME points to the GitHub Pages subdomain — this is the correct
> value per GitHub's documentation. GitHub will serve both `annalico.com` and
> `www.annalico.com` once the A records and this CNAME are in place.

DNS changes can take up to 48 hours to propagate. GitHub will automatically
provision and renew an HTTPS certificate once the DNS is pointing correctly.

---

## Troubleshooting deploys

1. **Check the Actions tab** → `Deploy to GitHub Pages` workflow.  
   A green ✓ means the latest code is live. A red ✗ means something failed —
   click the run to read the error.

2. **Hard-refresh your browser** (`Ctrl+Shift+R` / `Cmd+Shift+R`) or open an
   incognito window to rule out browser caching.

3. **The home-page content lives in `assets/index.js`** (a pre-built bundle).  
   Editing `about.html`, `contacts.html`, or `index.css` does **not** change
   what the home page displays. To update home-page content, replace
   `assets/index.js` (and `assets/index.css`) with a newly built version.

4. **If Netlify is also connected** to this repository, make sure it is set to
   deploy from the **`main`** branch. The `netlify.toml` file configures
   Netlify correctly; just verify the branch setting in the Netlify dashboard.
