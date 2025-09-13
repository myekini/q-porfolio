# Public Assets

This directory contains all static assets for the portfolio website.

## Directory Structure

```
public/
├── images/
│   ├── mockups/          # Project mockup images
│   ├── projects/         # Project screenshots and design files
│   └── social/           # Social media icons
└── README.md            # This file
```

## Asset Guidelines

### Mockups (`images/mockups/`)
- High-quality mockup images showcasing projects
- Recommended formats: JPEG, PNG
- Recommended dimensions: 800x600px or higher
- Use descriptive filenames

### Project Images (`images/projects/`)
- Screenshots, wireframes, and design process images
- Recommended formats: PNG, JPEG
- Organize by project when possible
- Use descriptive filenames

### Social Icons (`images/social/`)
- Social media platform icons
- Recommended format: PNG with transparency
- Recommended size: 40x40px or 64x64px
- Use consistent styling

## Usage in Components

```tsx
import Image from "next/image";

// Mockup images
<Image src="/images/mockups/project-mockup.jpg" alt="Project Mockup" />

// Project images
<Image src="/images/projects/wireframe.png" alt="Wireframe" />

// Social icons
<Image src="/images/social/linkedin.png" alt="LinkedIn" />
```

## Optimization

- Use Next.js Image component for automatic optimization
- Compress images before adding to the repository
- Use appropriate formats (JPEG for photos, PNG for graphics)
- Consider using WebP format for better compression
