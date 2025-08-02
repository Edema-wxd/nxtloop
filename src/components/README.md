# Nestloop Components

This directory contains reusable React components for the Nestloop application.

## Components

### Header

- **File**: `Header.tsx`
- **Description**: Navigation header with logo, menu items, and mobile responsiveness
- **Features**:
  - Sticky positioning with backdrop blur
  - Smooth scroll navigation
  - Mobile hamburger menu
  - Interactive hover effects
  - Pulse animation on CTA button

### Footer

- **File**: `Footer.tsx`
- **Description**: Site footer with branding, links, and legal information
- **Features**:
  - Responsive grid layout
  - Hover effects on links
  - Staggered animation on load
  - Brand consistency with header

## Usage

### Importing Components

```tsx
// Individual imports
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Or using the index
import { Header, Footer } from "@/components";
```

### Layout Integration

The Header and Footer are automatically included in the root layout (`src/app/layout.tsx`) and will appear on all pages.

### Styling

All components use the custom CSS classes defined in `src/app/globals.css`:

- `btn-primary`, `btn-secondary`, `btn-outline` for buttons
- `nav-link` for navigation links
- `animate-*` classes for animations
- `card` for card layouts
- `feature-icon` for icon containers

## Customization

### Header Customization

- Update navigation links in the `scrollToSection` function
- Modify the logo and branding
- Add/remove menu items
- Customize mobile menu behavior

### Footer Customization

- Update links in the footer sections
- Modify branding and company information
- Add social media links
- Customize legal links

## Animation Classes Available

- `animate-fade-in-up`: Fade in from bottom
- `animate-fade-in-left`: Fade in from left
- `animate-fade-in-right`: Fade in from right
- `animate-scale-in`: Scale in animation
- `animate-float`: Floating animation
- `animate-pulse-slow`: Slow pulse effect
- `stagger-animation`: Staggered children animations
- `section-reveal`: Scroll-triggered reveal

## Color Variables

The components use CSS custom properties for consistent theming:

- `--accent`: Primary accent color (#f39c12)
- `--accent-2`: Secondary accent (#95a5a6)
- `--accent-3`: Tertiary accent (#8e44ad)
- `--accent-4`: Quaternary accent (#e74c3c)
- `--foreground`: Text color (#2c3e50)
- `--background`: Background color (#fafafa)
