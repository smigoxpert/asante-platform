/**
 * Asante Platform CSS Class Utilities
 * Provides consistent class names following the Asante naming convention
 */

// Layout Classes
export const layoutClasses = {
  main: 'asante-layout-main',
  header: 'asante-layout-header',
  sidebar: 'asante-layout-sidebar',
  content: 'asante-layout-content',
  footer: 'asante-layout-footer',
  auth: 'asante-layout-auth',
} as const;

// Page Classes
export const pageClasses = {
  ubuntu: 'asante-page-ubuntu',
  heritage: 'asante-page-heritage',
  circles: 'asante-page-circles',
  wisdom: 'asante-page-wisdom',
  courses: 'asante-page-courses',
  donate: 'asante-page-donate',
  impact: 'asante-page-impact',
  auth: 'asante-page-auth',

} as const;

// Component Classes
export const componentClasses = {
  card: 'asante-component-card',
  button: 'asante-component-button',
  form: 'asante-component-form',
  modal: 'asante-component-modal',
  nav: 'asante-component-nav',
  input: 'asante-component-input',
  badge: 'asante-component-badge',
  progress: 'asante-component-progress',
  avatar: 'asante-component-avatar',
  logo: 'asante-component-logo',
} as const;

// Feature Classes
export const featureClasses = {
  calendar: 'asante-feature-calendar',
  tree: 'asante-feature-tree',
  impact: 'asante-feature-impact',
  community: 'asante-feature-community',
  learning: 'asante-feature-learning',
  heritage: 'asante-feature-heritage',
  wisdom: 'asante-feature-wisdom',
  ubuntu: 'asante-feature-ubuntu',
} as const;

// State Classes
export const stateClasses = {
  loading: 'asante-state-loading',
  error: 'asante-state-error',
  success: 'asante-state-success',
  disabled: 'asante-state-disabled',
  active: 'asante-state-active',
  hover: 'asante-state-hover',
  focus: 'asante-state-focus',
} as const;

// Cultural Theme Classes
export const culturalClasses = {
  sunset: 'asante-cultural-sunset',
  pattern: 'asante-cultural-pattern',
  float: 'asante-cultural-float',
  glow: 'asante-cultural-glow',
  pulse: 'asante-cultural-pulse',
  heritage: 'asante-cultural-heritage',
} as const;

// Utility function to combine classes
export function asanteClass(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Page-specific class generators
export const pageClassGenerators = {
  ubuntu: (element?: string) => element ? `asante-page-ubuntu__${element}` : 'asante-page-ubuntu',
  heritage: (element?: string) => element ? `asante-page-heritage__${element}` : 'asante-page-heritage',
  circles: (element?: string) => element ? `asante-page-circles__${element}` : 'asante-page-circles',
  wisdom: (element?: string) => element ? `asante-page-wisdom__${element}` : 'asante-page-wisdom',
  courses: (element?: string) => element ? `asante-page-courses__${element}` : 'asante-page-courses',
  donate: (element?: string) => element ? `asante-page-donate__${element}` : 'asante-page-donate',
  impact: (element?: string) => element ? `asante-page-impact__${element}` : 'asante-page-impact',
  auth: (element?: string) => element ? `asante-page-auth__${element}` : 'asante-page-auth',
} as const;

// Component-specific class generators
export const componentClassGenerators = {
  card: (variant?: string) => variant ? `asante-component-card--${variant}` : 'asante-component-card',
  button: (variant?: string) => variant ? `asante-component-button--${variant}` : 'asante-component-button',
  form: (variant?: string) => variant ? `asante-component-form--${variant}` : 'asante-component-form',
  modal: (variant?: string) => variant ? `asante-component-modal--${variant}` : 'asante-component-modal',
} as const;

// Type definitions for better TypeScript support
export type LayoutClass = typeof layoutClasses[keyof typeof layoutClasses];
export type PageClass = typeof pageClasses[keyof typeof pageClasses];
export type ComponentClass = typeof componentClasses[keyof typeof componentClasses];
export type FeatureClass = typeof featureClasses[keyof typeof featureClasses];
export type StateClass = typeof stateClasses[keyof typeof stateClasses];
export type CulturalClass = typeof culturalClasses[keyof typeof culturalClasses];

// Hook for using Asante classes
export function useAsanteClasses() {
  return {
    layout: layoutClasses,
    page: pageClasses,
    component: componentClasses,
    feature: featureClasses,
    state: stateClasses,
    cultural: culturalClasses,
    combine: asanteClass,
    pageClass: pageClassGenerators,
    componentClass: componentClassGenerators,
  };
} 