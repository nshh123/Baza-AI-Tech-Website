# Automatic Git Push Policy

When completing code changes or updates in a project with a configured remote Git repository:
1. Verify that all tests/builds pass cleanly.
2. Stage and commit the modified files with a descriptive commit message.
3. Automatically push the commit to the active remote branch (e.g., `git push origin main`) to ensure remote CI/CD pipelines (e.g., Vercel) deploy the changes.
