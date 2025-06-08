# Color Inverter Chrome Extension

> [!WARNING]
> This extension was generated using Claude AI. While functional, please review the code thoroughly before use and test extensively in your environment.

A simple Chrome extension that inverts webpage colors to make dark mode websites easier on the eyes, while preserving the natural appearance of images and SVGs.

## Features

- 🎯 **One-click toggle** - No popup or configuration needed
- 🖼️ **Image preservation** - Images, SVGs, and videos remain unaffected
- 🔄 **Instant toggle** - Click once to invert, click again to revert
- 🌐 **Universal compatibility** - Works on all accessible web pages
- 💾 **No storage required** - Stateless operation, no data collection
- ⚡ **Lightweight** - Minimal resource usage

## Installation

### From Source (Recommended)

1. **Download the extension files**
   ```bash
   git clone https://github.com/bacebu4/color-inverter.git
   ```

2. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked" button
   - Select the extension folder

3. **Pin the extension** (optional)
   - Click the puzzle piece icon in Chrome toolbar
   - Pin "Color Inverter" for easy access

## Usage

1. **Navigate to any website** with dark mode that strains your eyes
2. **Click the Color Inverter icon** in your Chrome toolbar
3. **Colors will invert instantly** - dark backgrounds become light
4. **Click again to revert** to original colors
5. **No configuration needed** - it just works!

## How It Works

The extension uses CSS filters to invert colors across the entire webpage:

- **Main inversion**: Applies `filter: invert(1) hue-rotate(180deg)` to the HTML element
- **Image preservation**: Counter-inverts images, SVGs, and videos to maintain original appearance
- **Background image handling**: Detects and preserves CSS background images
- **Toggle mechanism**: Dynamically adds/removes CSS styles

## License

MIT License - see LICENSE file for details.

## Disclaimer

This extension modifies webpage appearance using CSS filters. While generally safe, use at your own discretion. The AI-generated code has been designed following best practices but should be reviewed before production use.

---

**Made for people who need light mode but are stuck with dark-only websites** 🌅