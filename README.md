# Personal Portfolio Site

A modern, Material Design-inspired personal portfolio site built with HTML, CSS, and JavaScript. The site features a dark theme, responsive design, and smooth animations.

## Features

- Material Design components and styling
- Dark theme with high contrast and accessibility
- Fully responsive layout
- Smooth scroll and fade-in animations
- Mobile-friendly design
- Static site (no backend required)

## Structure

```
.
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet with Material Design theme
└── js/
    └── main.js        # JavaScript for MDC initialization and interactions
```

## Usage

1. Clone this repository to your local machine
2. Customize the content in `index.html` with your information
3. Modify styles in `css/style.css` if needed
4. Deploy to GitHub Pages:
   - Go to repository settings
   - Navigate to "Pages"
   - Select "main" branch as source
   - Save changes

## Customization

### Colors

The color scheme can be modified in `css/style.css`. Look for the `:root` section at the top:

```css
:root {
    --mdc-theme-primary: #bb86fc;
    --mdc-theme-secondary: #03dac6;
    /* ... other color variables ... */
}
```

### Content

Edit `index.html` to update:
- Personal information
- Skills and technologies
- Work experience
- Education details
- Contact information

## Dependencies

- Material Components Web (loaded via CDN)
- Material Icons (loaded via CDN)
- Google Fonts - Roboto (loaded via CDN)

## License

MIT License - feel free to modify and use this template for your personal portfolio.

## Credits

Created by Andrei Rudenov (@anrukitakaze)
