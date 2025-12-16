# Open Graph Metadata Implementation

This document describes the Open Graph and social media metadata implementation for the home page.

## Overview

Open Graph metadata has been added to improve SEO and social media sharing. The implementation uses Next.js 13+ App Router's metadata API in `src/app/layout.js`.

## Implemented Meta Tags

### Basic Meta Tags
- `title` - Page title
- `description` - Page description for SEO
- `keywords` - Search keywords
- `authors` - Page author information
- `creator` - Content creator
- `metadataBase` - Base URL for resolving relative URLs to absolute URLs

### Open Graph Tags
- `og:title` - Title for social sharing
- `og:description` - Description for social sharing
- `og:type` - Content type (website)
- `og:url` - Canonical URL of the page
- `og:site_name` - Site name
- `og:image` - Preview image URL (absolute)
- `og:image:width` - Image width
- `og:image:height` - Image height
- `og:image:alt` - Image alt text
- `og:locale` - Content locale

### Twitter Card Tags
- `twitter:card` - Card type (summary_large_image)
- `twitter:title` - Title for Twitter
- `twitter:description` - Description for Twitter
- `twitter:image` - Image for Twitter cards
- `twitter:creator` - Twitter username

### Additional Meta Tags
- `viewport` - Viewport configuration for responsive design
- `theme-color` - Theme color for mobile browsers
- `icons` - Favicon and Apple touch icon

## Image URLs

All image URLs are automatically resolved to absolute URLs using the `metadataBase` configuration:
- Base URL: `https://aeilot.github.io`
- Avatar image: `/avatar.png` → `https://aeilot.github.io/avatar.png`

## Customization

To customize the metadata for production:

1. Update the `metadataBase` URL if deploying to a custom domain
   - For environment-based configuration, you can use: `metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aeilot.github.io')`
2. Modify title, description, and other text fields as needed
3. Replace `/avatar.png` with a custom Open Graph image (recommended size: 1200x630 for optimal social sharing)

## Validation

You can validate the Open Graph tags using:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Next.js Metadata API

This implementation follows Next.js 13+ best practices by using the metadata export pattern. Next.js automatically generates the appropriate HTML meta tags from this object.

Learn more: [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
