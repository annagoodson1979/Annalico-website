# Annalico Website

The official website for [Annalico](https://annalico.com), built with React, TypeScript, and Vite.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- npm (included with Node.js)

### Getting started

```bash
# Install dependencies
npm install

# Start the local dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

The site is deployed to **GitHub Pages** automatically via GitHub Actions every time a commit is pushed to `main`.

You can view the live deployment at <https://annalico.com>.

### How the workflow works

The [deploy workflow](.github/workflows/deploy.yml):

1. Checks out the specified commit (or the latest commit on `main` for automatic deploys).
2. Installs dependencies with `npm ci`.
3. Builds the site with `npm run build`.
4. Publishes the `dist/` folder to GitHub Pages.

---

## How to redeploy an older version

You can redeploy any previous commit through the GitHub Actions **manual trigger** (`workflow_dispatch`).

### Step-by-step

1. **Find the commit you want to redeploy.**

   Open the [commit history](https://github.com/annagoodson1979/Annalico-website/commits/main) on GitHub and copy the full 40-character SHA of the commit you want to roll back to (e.g. `93aeef3b…`).

   Alternatively, find it locally:

   ```bash
   git log --oneline
   ```

2. **Trigger the deploy workflow manually.**

   - Go to **Actions** → **Deploy to GitHub Pages** in this repository.
   - Click **Run workflow** (top-right of the workflow table).
   - Paste the commit SHA (or a branch/tag name) into the **"Git ref to deploy"** field.
   - Click **Run workflow**.

   ![Run workflow dialog](https://docs.github.com/assets/cb-72138/mw-1440/images/help/actions/workflow-dispatch-input.webp)

3. **Wait for the workflow to finish.**

   The workflow will build and deploy that exact version of the site. Once the `deploy` job turns green the old version is live.

### Reverting permanently via Git

If you want the older version to become the new permanent state of `main` (so that automatic deploys also use it), revert the unwanted commit(s) and push:

```bash
# Revert the most recent commit
git revert HEAD

# Or revert a specific commit by its SHA
git revert <commit-sha>

# Push to main — this triggers an automatic deployment
git push origin main
```

> **Tip:** `git revert` creates a *new* commit that undoes the changes, keeping the full history intact. This is safer than `git reset` + force-push on a shared branch.
