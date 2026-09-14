# Color Inverter Chrome Extension

> [!WARNING]
> This extension was generated using Claude AI. While functional, please review the code thoroughly before use and test extensively in your environment.

A simple Chrome extension that inverts webpage colors to make dark mode websites easier on the eyes, while preserving the natural appearance of images and SVGs.

## Features

- 🎯 **One-click toggle** - Toolbar icon or `Alt+I` (rebind at `chrome://extensions/shortcuts`)
- 🖼️ **Image preservation** - Images, SVGs, and videos remain unaffected
- 🔄 **Instant toggle** - Click once to invert, click again to revert
- 🌐 **Universal compatibility** - Works on all accessible web pages, including iframes
- 🔘 **Badge indicator** - Toolbar icon shows `ON` while a site is inverted
- 💾 **Remembers per site** - Inversion stays on for a host across reloads and tabs; only the hostname list is stored locally
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
5. **It sticks** - the site stays inverted after reload and in new tabs until you toggle it off

### Keyboard Shortcut

Press **`Alt+I`** (`Option+I` on macOS) to toggle inversion on the current site without touching the toolbar.

To change the shortcut:

1. Open `chrome://extensions/shortcuts`
2. Find **Color Inverter** → "Toggle color inversion"
3. Click the input field and press your preferred key combination

The shortcut can also be set to work globally (outside Chrome) from the same page via the dropdown next to it.

## How It Works

The extension uses CSS filters to invert colors across the entire webpage:

- **Main inversion**: Applies `filter: invert(1) hue-rotate(180deg)` to the HTML element
- **Media preservation**: Counter-inverts `img`, `svg`, `video`, `canvas`, `embed`, `object`, `iframe`
- **Persistence**: Toggling adds/removes the hostname in `chrome.storage.local`; the content script applies the style on load and reacts to storage changes

## License

MIT License - see LICENSE file for details.

## Disclaimer

This extension modifies webpage appearance using CSS filters. While generally safe, use at your own discretion. The AI-generated code has been designed following best practices but should be reviewed before production use.

---

**Made for people who need light mode but are stuck with dark-only websites** 🌅