"use client";

// Minimalist SVG Icons for NIGHTFALL DS

export function IconMining() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="20" width="32" height="2" fill="currentColor"/>
      <path d="M12 20L8 28L12 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 20L40 28L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function IconFintech() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="12" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="10" y1="18" x2="38" y2="18" stroke="currentColor" strokeWidth="2"/>
      <circle cx="16" cy="28" r="3" fill="currentColor"/>
      <circle cx="24" cy="28" r="3" fill="currentColor"/>
      <circle cx="32" cy="28" r="3" fill="currentColor"/>
    </svg>
  );
}

export function IconLogistics() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="36" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="14" cy="34" r="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="34" cy="34" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M28 14V8H20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconEducation() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20L24 10L40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 22V34H38V22" stroke="currentColor" strokeWidth="2"/>
      <line x1="14" y1="26" x2="34" y2="26" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="14" y1="30" x2="34" y2="30" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function IconAutomation() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="32" r="3" fill="currentColor"/>
      <line x1="32" y1="14" x2="32" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="32" y1="56" x2="32" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconAI() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="16" width="40" height="40" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 28L28 20L36 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="32" cy="42" r="4" fill="currentColor"/>
      <path d="M44 28L36 20L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconSecurity() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 12L16 20V32C16 46 32 54 32 54C32 54 48 46 48 32V20L32 12Z" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="35" r="6" fill="currentColor" opacity="0.3"/>
      <path d="M28 33L31 36L36 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconEducationPlatform() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="20" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="16" y="24" width="32" height="16" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="40" x2="48" y2="40" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="20" cy="44" r="2" fill="currentColor"/>
      <circle cx="32" cy="44" r="2" fill="currentColor"/>
      <circle cx="44" cy="44" r="2" fill="currentColor"/>
    </svg>
  );
}

// Decorative elements
export function DecorativeGrid() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(212, 175, 55, 0.05)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="1000" height="1000" fill="url(#grid)" />
    </svg>
  );
}

export function AnimatedArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H10M17 7V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CodeBlock() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="12" width="44" height="40" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="10" y1="20" x2="54" y2="20" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="14" y1="28" x2="24" y2="28" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="14" y1="34" x2="50" y2="34" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="14" y1="40" x2="46" y2="40" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
