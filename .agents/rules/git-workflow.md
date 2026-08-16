# Automatic Git Push Policy

When completing code changes, visual updates, or file modifications in any project with a configured remote Git repository:
1. **Verify**: Ensure code builds cleanly (`npm run build` or equivalent).
2. **Stage & Commit**: Stage changed files (`git add .`) and create a concise, meaningful commit message.
3. **Push to Remote**: Automatically push changes to GitHub (`git push origin main` or current tracking branch) before finalizing the user turn.
4. **Confirm**: Provide a brief confirmation message containing the commit summary and push status.
