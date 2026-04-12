# Wix Deployment Guide

This Base44 export has been converted into a public React portfolio that can be deployed in two ways.

## Option A: Wix custom element

Use this when you want the site to live inside a Wix page.

1. Install Node.js 20 or newer from https://nodejs.org.
2. From this project folder, install dependencies:

   ```bash
   npm install
   ```

3. Build the Wix custom element bundle:

   ```bash
   npm run build:wix
   ```

4. Upload `dist-wix/bhargav-portfolio.js` to a public HTTPS URL.
5. In Wix, add a custom element to the page.
6. Set the tag name to:

   ```text
   bhargav-portfolio
   ```

7. Set the script URL to the public HTTPS URL for `bhargav-portfolio.js`.
8. Stretch the custom element to the full page width and set a large enough height for the portfolio content.
9. Publish the Wix site.

The `build:wix` script emits a single JavaScript file with the processed Tailwind CSS embedded, which matches Wix custom element requirements.

## Option B: Static site with Wix domain

Use this when you want the portfolio to behave like a normal standalone React website.

1. Install Node.js 20 or newer from https://nodejs.org.
2. From this project folder, install dependencies:

   ```bash
   npm install
   ```

3. Build the static website:

   ```bash
   npm run build
   ```

4. Deploy the `dist/` folder to a static host such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages.
5. In Wix domain settings, point the domain DNS records to that static host.

This usually gives the cleanest result for a full portfolio site. The app uses hash routing, so deep links work without server rewrite rules.

## Local preview

After installing dependencies, run:

```bash
npm run dev
```

Then open the local URL printed by Vite.
