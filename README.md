# Nitin's portfolio

A static portfolio with a code-editor layout, adapted from the supplied visual reference. Built with HTML, CSS and JavaScript. No package installation, build step, backend or account is required.

## Preview

Unzip the package, then open `index.html` in a current browser. All scripts use relative paths and can run directly from a folder.

For a local web server, run from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

The résumé, photograph and social image are local assets. Syne and JetBrains Mono load from Google Fonts when available; system fallbacks are provided. The site still works offline with fallback fonts.

## Publish on GitHub Pages

1. Create a public repository named `nitin19011.github.io` in your GitHub account, if it does not already exist.
2. Upload `index.html`, `styles.css`, `app.js`, `.nojekyll`, and the entire `assets` folder to the repository root. Do not upload the ZIP instead of its contents.
3. In repository **Settings → Pages**, select **Deploy from a branch**, then **main** and **/(root)**. Save.
4. Wait for GitHub's deployment to finish and use the published URL shown in Pages settings.
5. Check all pages, the résumé download and project links on your phone and desktop before using the URL in applications.

Website source: https://github.com/nitin19011/nitin19011.github.io . GitHub Pages publishes from main at the repository root. Check the latest Pages deployment for current live status.

Social metadata uses the expected GitHub Pages URL, https://nitin19011.github.io/ , including an absolute preview-image URL and canonical link.

Official references checked 27 October 2026: [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart) and [creating a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## GitHub profile

`github-profile/README.md` is a profile README draft. Create a public repository named `nitin19011` under your account and put that file at its root as `README.md`. GitHub uses the matching account/repository name for profile READMEs.

Reference: [GitHub profile README documentation](https://docs.github.com/github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme).

Recommended pins: FitChasers, Milo, and Socks. Preserve team and course attribution. Keep starter exercises and resource collections out of the selected-project list. Do not delete repositories to achieve this.

## Files to edit

- `app.js`: biography, projects, experience, skills, file navigation and interaction logic.
- `styles.css`: colours, proportions, typography, motion and responsive layout.
- `index.html`: metadata, editor shell, résumé path and contact/navigation tools.
- `assets/Nitin_Resume.pdf`: replace this with the latest approved résumé, preserving the filename or updating every link.
- `assets/nitin.webp`: supplied real portrait, resized to 600 × 800 with transparency preserved.

The editor-style filenames are navigation labels. The implementation itself is vanilla JavaScript, not a React application. The status bar describes those labels, not a claim about this site's technology stack.

## Before using in applications

The draft is functional, but two project contribution details are deliberately marked in the case studies:

- **Milo:** personal contributions were confirmed by Nitin across collection/validation tools, protocols/capture coordination, model-training/export tooling and firmware integration. The team context remains explicit.
- **Socks:** confirm your additions beyond the provided Duke template.

FitChasers claims are grounded in the contribution document and the merged exercise-management PR. No project adoption, performance or employment achievements have been invented.

Your salary target, PR status, student number, government identifier, date of birth and home address are absent from website copy. Your email and supplied résumé are intentionally included for recruiting. The original résumé still contains your phone number; review the PDF before public deployment if you prefer email-only contact. Transcripts are not included.

## Keyboard and interaction guide

- Follow document tabs or explorer links to switch pages. Hash links support browser back/forward and direct page URLs.
- `Ctrl/Cmd+P`: open the filename navigator. This searches local page filenames only.
- Use Up/Down and Enter in that navigator, or Tab through links. Escape closes it.
- `Ctrl/Cmd+B`: toggle the explorer. On small screens, the hamburger opens the drawer.
- File menu: home, résumé and email. View menu: explorer and themes. Go menu: project and résumé sections.
- Project details expand using native keyboard-accessible disclosures.
- Reduced-motion preferences disable animations and blinking.

## Verification

JavaScript syntax, generated route markup, internal route targets and local asset existence were checked. The image dimensions and alpha channel were verified. See `DESIGN_REVIEW.md` for evidence, observed design values and intentional departures.

Interactive browser and pixel comparison testing could not be completed in the current environment: the live reference URL was blocked, local file URLs were rejected, and the local preview URL did not reach the project server. Do not mistake structural checks for completed browser QA. Before publication, verify mobile drawer behaviour, keyboard focus, tabs, themes, disclosure controls, mail links and downloads at desktop and mobile widths.

## Local Windows editing

Clone this repository using GitHub Desktop into `C:\Users\nitin\OneDrive\NUS\Jobs\Portfolio` (an empty folder). Edit the files there, then commit and Push origin. GitHub Pages deploys the pushed main branch. OneDrive sync alone does not publish website changes. Keep the folder available offline.

## Current positioning

Software engineering, practical problem solving, ownership, rapid learning and team collaboration. Earlier engineering roles remain factual work history rather than the target career identity. Public availability: early 2027, as requested by Nitin. Expected degree completion remains April 2027.
