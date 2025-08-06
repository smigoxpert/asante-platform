# Quick Fixes for Asante MVP Build Errors

## 🚨 Immediate Actions Required

### 1. Fix Unescaped HTML Entities (Critical)

**Files to fix:**
- `src/app/(auth)/login/page.tsx`
- `src/app/(auth)/signup/page.tsx`
- `src/app/(auth)/onboarding/page.tsx`
- `src/app/(dashboard)/courses/page.tsx`
- `src/app/(dashboard)/donate/page.tsx`
- `src/app/(dashboard)/heritage/page.tsx`
- `src/app/(dashboard)/ubuntu/page.tsx`
- `src/app/page.tsx`
- `src/components/community/CulturalCalendar.tsx`
- `src/components/community/ElderGuidance.tsx`
- `src/components/ubuntu/WisdomCard.tsx`

**Replace all instances of:**
```jsx
// WRONG
<p>"I am because we are" - Ubuntu Philosophy</p>

// CORRECT
<p>&quot;I am because we are&quot; - Ubuntu Philosophy</p>
```

### 2. Remove Unused Imports and Variables

**In `src/app/page.tsx`:**
```typescript
// Remove these unused imports
import { useTransform } from 'framer-motion';
import { CardDescription } from "@/components/ui/card";
import { Calendar, Video, MessageCircle, Award, Zap } from 'lucide-react';

// Remove unused variables
const wisdomPaths = [...]; // Remove if not used
const subscriptionTiers = [...]; // Remove if not used
const elders = [...]; // Remove if not used
const stats = {...}; // Remove if not used
const scrollY = useScroll(); // Remove if not used
```

### 3. Fix TypeScript `any` Types

**Replace `any` with proper types:**
```typescript
// Instead of
function handleData(data: any) { ... }

// Use
function handleData(data: unknown) { ... }
// or
interface DataType {
  // define proper interface
}
function handleData(data: DataType) { ... }
```

### 4. Fix Empty Interface

**In `src/components/ui/input.tsx`:**
```typescript
// Instead of
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// Use
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add at least one property or remove the interface
  className?: string;
}
```

## 🔧 Quick Fix Commands

### Option 1: Disable ESLint for Build (Temporary)
Add to `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // TEMPORARY - remove after fixes
  },
}

module.exports = nextConfig
```

### Option 2: Fix ESLint Rules (Recommended)
Add to `.eslintrc.json`:
```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

## 📋 Priority Fix Checklist

### High Priority (Fix Today)
- [ ] Fix unescaped HTML entities in all files
- [ ] Remove unused imports in `src/app/page.tsx`
- [ ] Fix empty interface in `src/components/ui/input.tsx`

### Medium Priority (Fix This Week)
- [ ] Replace `any` types with proper TypeScript types
- [ ] Remove unused variables throughout codebase
- [ ] Add proper error handling

### Low Priority (Fix Next Week)
- [ ] Optimize performance
- [ ] Add proper TypeScript interfaces
- [ ] Implement proper error boundaries

## 🚀 Quick Start Commands

```bash
# Option 1: Build with ESLint disabled (temporary)
npm run build

# Option 2: Fix ESLint issues first
npm run lint -- --fix

# Option 3: Type check
npm run type-check
```

## 📝 Notes

1. **Temporary Solution**: Use ESLint ignore during builds to get the MVP launched quickly
2. **Long-term Solution**: Fix all ESLint issues for better code quality
3. **Priority**: Focus on unescaped entities first as they're the most critical
4. **Testing**: Test the build after each fix to ensure nothing breaks

## 🎯 Next Steps After Fixes

1. **Launch MVP** with basic functionality
2. **Collect user feedback** and validate product-market fit
3. **Iterate** based on real user data
4. **Refactor** code quality issues in parallel

The goal is to get the MVP launched quickly while maintaining code quality standards. Focus on the critical fixes first, then address the warnings and improvements over time. 