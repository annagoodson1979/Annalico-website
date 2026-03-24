# Last Known Working Commit

This file records the last commit that was confirmed to build and deploy successfully.

| Field   | Value |
|---------|-------|
| **SHA** | `7312214bb8b309ee7d21fcb8882e01a910818b3d` |
| **Date** | 2026-03-24 |
| **Message** | Deploy final build |
| **Author** | annagoodson1979 |

> **Note:** Going forward, the `last-known-good` git tag always points to the most recent commit that
> successfully completed the [deploy workflow](.github/workflows/deploy.yml).
> You can find it on GitHub under [Tags](https://github.com/annagoodson1979/Annalico-website/tags)
> or by running:
>
> ```bash
> git fetch --tags
> git show last-known-good
> ```

## How to redeploy this version

1. Copy the SHA above.
2. Go to **Actions → Deploy to GitHub Pages → Run workflow**.
3. Paste the SHA into the **"Git ref to deploy"** field and click **Run workflow**.

See the [README](README.md#how-to-redeploy-an-older-version) for the full rollback guide.
