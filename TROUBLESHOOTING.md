# 🚀 Asante Platform Troubleshooting Guide

## Server Issues

### Port 3000 Already in Use
If you see `Port 3000 is in use` error:

**Quick Fix:**
```bash
# Use the clean development script
npm run dev:clean
```

**Manual Fix:**
```bash
# Find and kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or kill all Next.js processes
pkill -f "next dev"

# Then start the server
npm run dev
```

### 404 Errors
If you get 404 errors for pages that should exist:

1. **Check file structure** - Make sure the page file exists in the correct location
2. **Check for syntax errors** - Run `npm run build` to see compilation errors
3. **Restart the server** - Sometimes the dev server needs a restart

### ESLint Errors
If you see ESLint errors preventing the build:

**Common Issues:**
- Unescaped quotes: Replace `"` with `&quot;` or `&ldquo;`/`&rdquo;`
- Unescaped apostrophes: Replace `'` with `&apos;`
- Unused variables: Remove unused imports or variables

**Quick Fix:**
```bash
# Temporarily disable ESLint for development
# Add this to next.config.js:
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}
```

## Development Commands

### Start Development Server
```bash
# Standard start
npm run dev

# Clean start (kills existing processes first)
npm run dev:clean
```

### Build and Check for Errors
```bash
# Build the project
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## Common URLs

- **Homepage**: http://localhost:3000
- **About Page**: http://localhost:3000/about
- **Login**: http://localhost:3000/login
- **Signup**: http://localhost:3000/signup
- **Dashboard**: http://localhost:3000/ubuntu (requires login)

## Performance Tips

1. **Use the clean dev script** - Prevents port conflicts
2. **Clear browser cache** - If you see stale content
3. **Restart server after major changes** - Especially after CSS updates
4. **Check browser console** - For JavaScript errors

## Getting Help

If you're still having issues:

1. Check the browser console for errors
2. Check the terminal for build errors
3. Try the clean development script: `npm run dev:clean`
4. Restart your terminal/IDE
5. Clear node_modules and reinstall: `rm -rf node_modules && npm install` 