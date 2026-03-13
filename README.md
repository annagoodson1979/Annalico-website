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

## Deployment — why changes may not appear live

### How it works

The site is deployed via **GitHub Pages** (`.github/workflows/deploy-pages.yml`).
Every push to the `main` branch automatically triggers a new deployment.

### Checklist when a deploy seems stuck

1. **Check the Actions tab** → `Deploy to GitHub Pages` workflow — confirm the run
   shows a green ✓. If it failed, read the error and fix it.

2. **DNS must point to GitHub Pages**, not to Netlify or any other host.  
   Verify the domain's DNS A records include GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   Or add a `CNAME` record for `www` pointing to `annagoodson1979.github.io`.

3. **The main page content lives in `assets/index.js`** (a pre-built bundle).  
   Editing `about.html`, `contacts.html`, or `index.css` does **not** change what
   the home page displays — those pages are for direct URL access only.  
   To update home-page content, the `assets/index.js` bundle must be replaced
   with a newly built version.

4. **Hard-refresh your browser** (`Ctrl+Shift+R` / `Cmd+Shift+R`) or open an
   incognito window to rule out browser caching.

5. **If Netlify is also connected** to this repository, make sure it is set to
   deploy from the **`main`** branch (not another branch). The `netlify.toml`
   file in this repo configures Netlify correctly; just verify the branch
   setting in the Netlify dashboard matches `main`.
