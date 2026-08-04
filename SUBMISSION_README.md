# Sanjina Talib — Portfolio Scaffold

## What's here
- Next.js App Router, TypeScript, Tailwind
- Routes: `/`, `/about`, `/projects`, `/projects/cropai`, `/contact`, `/health`
- Server Components by default; `Nav` and `Contact` are Client Components
  (the only two that need interactivity)
- Design tokens in `src/app/globals.css` matching the identity kit
  (`#3B82F6` primary, `#111111` text, white background)
- `npm run build` passes with zero errors (verified locally)

## Deploy this yourself (I can't push to your GitHub or Vercel account)

1. **Push to GitHub**
   ```bash
   cd portfolio-app
   git init
   git add .
   git commit -m "scaffold: routes, layout, tailwind tokens, health check"
   git remote add origin <your-empty-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to vercel.com → New Project → Import your GitHub repo
   - Framework preset: Next.js (auto-detected)
   - Click Deploy — no environment variables are required for this scaffold
   - Every future `git push` will automatically generate a new preview URL

3. **Confirm before submitting**
   - Preview URL loads with no build errors ✅ (build already verified locally)
   - Every screen from the spec exists as a routed placeholder ✅
   - Test responsiveness at 375px and 1280px using your browser's device
     toolbar (F12 → toggle device toolbar)
   - No secrets in the repo — this scaffold has none by default; if you add
     an API key later, put it in `.env.local` (already gitignored) and add
     the same variable in Vercel's Project Settings → Environment Variables

## Submission checklist
- [ ] Live preview URL
- [ ] GitHub repo link
- [ ] `AI_PROMPTS.md`
- [ ] `AI_ASSISTANCE_NOTES.md`
