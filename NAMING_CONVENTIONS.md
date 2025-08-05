# Asante Platform - Naming Conventions

## 📋 Overview
This document establishes consistent naming conventions for the Asante platform to maintain code quality, readability, and team collaboration.

## 🏗️ Page Naming Convention

### Authentication Pages (`src/app/(auth)/`)
| File Path | Component Name | Description |
|-----------|----------------|-------------|
| `login/page.tsx` | `LoginPage` | User authentication page |
| `signup/page.tsx` | `SignupPage` | User registration page |
| `onboarding/page.tsx` | `OnboardingPage` | User onboarding flow |

### Dashboard Pages (`src/app/(dashboard)/`)
| File Path | Component Name | Description |
|-----------|----------------|-------------|
| `ubuntu/page.tsx` | `UbuntuDashboardPage` | Main dashboard |
| `heritage/page.tsx` | `HeritageDiscoveryPage` | Heritage exploration |
| `wisdom-paths/page.tsx` | `WisdomPathsPage` | Learning journeys |
| `circles/page.tsx` | `UbuntuCirclesPage` | Community circles |
| `courses/page.tsx` | `CoursesPage` | Course catalog |
| `donate/page.tsx` | `DonatePage` | Donation platform |
| `impact/page.tsx` | `ImpactTrackingPage` | Impact metrics |


| File Path | Component Name | Description |
|-----------|----------------|-------------|
| `page.tsx` | `LandingPage` | Main landing page |
| `about/page.tsx` | `AboutPage` | About Asante |
| `pricing/page.tsx` | `PricingPage` | Pricing plans |
| `download/page.tsx` | `DownloadPage` | App download |

## 🧩 Component Naming Convention

### Layout Components (`src/components/layout/`)
| File Name | Component Name | Description |
|-----------|----------------|-------------|
| `AuthenticatedLayout.tsx` | `AuthenticatedLayout` | Main authenticated layout |
| `Header.tsx` | `Header` | Application header |
| `Navigation.tsx` | `Navigation` | Main navigation |
| `Footer.tsx` | `Footer` | Application footer |
| `Sidebar.tsx` | `Sidebar` | Sidebar navigation |

### UI Components (`src/components/ui/`)
| File Name | Component Name | Description |
|-----------|----------------|-------------|
| `button.tsx` | `Button` | Base button component |
| `card.tsx` | `Card` | Card container |
| `input.tsx` | `Input` | Form input |
| `logo.tsx` | `Logo` | Asante logo |
| `loading.tsx` | `LoadingButton`, `LoadingSpinner` | Loading states |
| `theme-toggle.tsx` | `ThemeToggle` | Theme switcher |
| `avatar.tsx` | `Avatar` | User avatar |
| `badge.tsx` | `Badge` | Status badges |
| `progress.tsx` | `Progress` | Progress indicators |
| `dropdown-menu.tsx` | `DropdownMenu` | Dropdown menus |

### Community Components (`src/components/community/`)
| File Name | Component Name | Description |
|-----------|----------------|-------------|
| `CircleGatherings.tsx` | `CircleGatherings` | Community gatherings |
| `CulturalCalendar.tsx` | `CulturalCalendar` | Cultural events calendar |
| `ElderGuidance.tsx` | `ElderGuidance` | Elder mentorship |
| `UbuntuImpact.tsx` | `UbuntuImpact` | Community impact tracking |

### Heritage Components (`src/components/heritage/`)
| File Name | Component Name | Description |
|-----------|----------------|-------------|
| `FamilyTree.tsx` | `FamilyTree` | Family tree visualization |
| `HeritageMap.tsx` | `HeritageMap` | Ancestral map |
| `AncestralTimeline.tsx` | `AncestralTimeline` | Historical timeline |
| `DNAResults.tsx` | `DNAResults` | DNA analysis results |

### Ubuntu Components (`src/components/ubuntu/`)
| File Name | Component Name | Description |
|-----------|----------------|-------------|
| `WisdomCard.tsx` | `WisdomCard` | Wisdom path cards |
| `UbuntuProgress.tsx` | `UbuntuProgress` | Ubuntu values progress |
| `CommunityCircle.tsx` | `CommunityCircle` | Community circle display |

## 🎨 CSS Class Naming Convention

### Layout Classes
```css
.asante-layout-main        /* Main layout container */
.asante-layout-header      /* Header container */
.asante-layout-sidebar     /* Sidebar container */
.asante-layout-content     /* Main content area */
.asante-layout-footer      /* Footer container */
.asante-layout-auth        /* Authentication layout */
```

### Page-Specific Classes
```css
.asante-page-ubuntu        /* Ubuntu dashboard page */
.asante-page-heritage      /* Heritage discovery page */
.asante-page-circles       /* Ubuntu circles page */
.asante-page-wisdom        /* Wisdom paths page */
.asante-page-auth          /* Authentication pages */

```

### Component Classes
```css
.asante-component-card      /* Card components */
.asante-component-button    /* Button components */
.asante-component-form      /* Form components */
.asante-component-modal     /* Modal components */
.asante-component-nav       /* Navigation components */
```

### Feature Classes
```css
.asante-feature-calendar    /* Calendar features */
.asante-feature-tree        /* Family tree features */
.asante-feature-impact      /* Impact tracking features */
.asante-feature-community   /* Community features */
.asante-feature-learning    /* Learning features */
```

### State Classes
```css
.asante-state-loading       /* Loading states */
.asante-state-error         /* Error states */
.asante-state-success       /* Success states */
.asante-state-disabled      /* Disabled states */
.asante-state-active        /* Active states */
```

## 🔧 Implementation Rules

### 1. Component Naming
- Use PascalCase for component names
- Include descriptive suffixes (Page, Component, etc.)
- Be specific about the component's purpose

### 2. File Naming
- Use kebab-case for file names
- Include the component type in the name
- Group related components in appropriate directories

### 3. CSS Class Naming
- Use BEM methodology with `.asante-` prefix
- Be descriptive and specific
- Use consistent naming patterns

### 4. Variable Naming
- Use camelCase for variables and functions
- Use descriptive names that explain purpose
- Include type information in complex variables

### 5. Import/Export Naming
- Use consistent import naming
- Export components with their full names
- Use barrel exports for related components

## 📝 Examples

### Component Example
```tsx
// File: src/app/(dashboard)/ubuntu/page.tsx
export default function UbuntuDashboardPage() {
  // Component implementation
}
```

### CSS Class Example
```css
/* Ubuntu Dashboard specific styles */
.asante-page-ubuntu {
  /* Page styles */
}

.asante-page-ubuntu__header {
  /* Header styles */
}

.asante-page-ubuntu__content {
  /* Content styles */
}
```

### Import Example
```tsx
import { UbuntuDashboardPage } from '@/app/(dashboard)/ubuntu/page';
import { AuthenticatedLayout } from '@/components/layout/AuthenticatedLayout';
import { WisdomCard } from '@/components/ubuntu/WisdomCard';
```

## 🚀 Best Practices

1. **Consistency**: Always follow the established patterns
2. **Descriptive**: Names should clearly indicate purpose
3. **Scalable**: Naming should work as the project grows
4. **Maintainable**: Easy for team members to understand
5. **Searchable**: Names should be easy to find in codebase

## 📋 Checklist

- [ ] All page components follow naming convention
- [ ] All UI components follow naming convention
- [ ] CSS classes use `.asante-` prefix
- [ ] File names use kebab-case
- [ ] Component names use PascalCase
- [ ] Variables use camelCase
- [ ] Imports are consistent
- [ ] Documentation is updated 