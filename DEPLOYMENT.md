# Deploying to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** → **Pages**
3. Under **Build and deployment**, select:
   - **Source**: GitHub Actions

### 2. Update the Base Path (if needed)

If your repository name is different from `heretics-guide-dying-lands`, update the base path in `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

### 3. Push to Deploy

Once configured, simply push to the main branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

### 4. Access Your Site

After the first deployment completes (usually 1-2 minutes), your site will be available at:

```
https://YOUR-USERNAME.github.io/heretics-guide-dying-lands/
```

## Manual Deployment

If you prefer to build and deploy manually:

```bash
# Build the project
npm run build

# The built files will be in the 'dist' folder
# You can then manually deploy this folder to any static hosting service
```

## Troubleshooting

### Blank page after deployment

- Check that the `base` path in `vite.config.ts` matches your repository name
- Make sure GitHub Pages is enabled and set to use GitHub Actions
- Check the Actions tab in your repo for build errors

### 404 errors on refresh

GitHub Pages doesn't support client-side routing by default. If you need routing support, consider:
- Using hash-based routing instead of browser history
- Adding a custom 404.html that redirects to index.html
- Using a different hosting service (Netlify, Vercel, etc.)

### Build fails in Actions

- Check the Actions tab for error details
- Ensure all dependencies are listed in package.json
- Test the build locally with `npm run build`

## Other Hosting Options

This project can be deployed to other services:

- **Netlify**: Connect your repo and deploy automatically
- **Vercel**: Similar to Netlify, great for React apps
- **Cloudflare Pages**: Fast CDN-based hosting
- **Render**: Free static site hosting

For these services, no configuration changes are needed - just connect your GitHub repo!


