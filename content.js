(() => {
  'use strict';

  const STYLE_ID = 'color-inverter-extension-style';
  const host = location.hostname;

  const CSS = `
    html {
      filter: invert(1) hue-rotate(180deg) !important;
    }
    /* Counter-invert leaf media so it keeps its original colors.
       Only leaf elements: a wrapper here would triple-invert the media inside it. */
    img, svg, video, canvas, embed, object, iframe {
      filter: invert(1) hue-rotate(180deg) !important;
    }
  `;

  function sync(hosts = []) {
    const on = hosts.includes(host);
    let style = document.getElementById(STYLE_ID);
    if (on && !style) {
      style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = CSS;
      document.documentElement.appendChild(style);
    } else if (!on && style) {
      style.remove();
    }
  }

  chrome.storage.local.get('hosts').then(({ hosts }) => sync(hosts));
  chrome.storage.onChanged.addListener((changes) => changes.hosts && sync(changes.hosts.newValue));
})();
