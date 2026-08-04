# AI Assistance Notes

## How AI assisted throughout implementation

Claude scaffolded the entire Next.js App Router project from a single
instruction — generating the route structure, root layout, a client-side
navigation component, five placeholder pages tied to the content map from
the previous assignment, and a server-rendered health-check page with a
real `fetch` call. It also wrote the Tailwind design tokens (colors, font
variables) directly from the identity-kit hex codes rather than generic
defaults, and ran the production build itself to confirm there were zero
build errors before treating any step as complete.

## Manual improvements, corrections, and refactoring after review

1. **Font loading strategy — corrected after a real build failure.**
   The first version used `next/font/google` (the standard, AI-suggested
   approach). Running `npm run build` failed because the build environment
   couldn't reach `fonts.googleapis.com` at compile time. Rather than
   accepting a broken build, this was manually diagnosed and switched to a
   plain `<link>` tag import in `<head>`, which fetches fonts at runtime in
   the browser instead of at build time — same visual result, but the build
   no longer depends on network access during compilation. This is the kind
   of fix that only shows up by actually running the build, not by reading
   the code.

2. **Dropped automatic dark mode.**
   The generated `globals.css` included a `prefers-color-scheme: dark`
   media query by default. This was manually removed — the identity kit
   defines a fixed light palette (white background, near-black text), and
   letting the OS silently repaint it in dark mode would break the
   consistent-branding requirement from the identity kit assignment.

3. **Verified the health-check page's failure path, not just its success
   path.** During testing, the GitHub API used for the health check hit its
   unauthenticated rate limit (60 requests/hour) from repeated local
   testing. Instead of leaving this unnoticed, the `try/catch` around the
   fetch was checked deliberately to confirm it degrades to a clear "Fetch
   failed" message rather than crashing the page — the kind of edge case
   worth checking by hand rather than assuming the happy path always holds.

4. **Route-to-content-map alignment.**
   The AI's first pass at the Projects page didn't distinguish CropAI (the
   lead case) from the other two placeholder projects. This was manually
   reordered and given its own "View case study" link so the strongest work
   leads, matching the content-map assignment's requirement.
