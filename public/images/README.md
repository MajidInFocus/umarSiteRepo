# Images Directory

This directory contains all the images used on Umar Sadique's website.

## Current Image Files:
1. **umarLogo.png** - Site logo used in header and favicon
2. **profileImage.png** - Profile photo used on Home and About pages  
3. **background.png** - Primary hero background image
4. **background2.0.png** - Fallback background image

## Image Features:
- **Responsive Design**: All images scale properly across devices
- **Lazy Loading**: Non-critical images load only when needed
- **Error Handling**: Fallback images for failed loads
- **Performance Optimized**: Proper compression and loading strategies

## Implementation Details:
- Hero background: Uses `background.png` with `background2.0.png` fallback
- Profile photos: Uses `profileImage.png` for both Home and About pages
- Logo: `umarLogo.png` used in header and as favicon
- All images are fully responsive and mobile-optimized

## Usage:
Images are referenced with `/images/` prefix from React components.
Example: `<img src="/images/profileImage.png" alt="Umar Sadique" />`
