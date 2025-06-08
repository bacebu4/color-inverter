(function() {
  'use strict';
  
  const STYLE_ID = 'color-inverter-extension-style';
  
  // Check if inversion is currently active
  function isInversionActive() {
    return document.getElementById(STYLE_ID) !== null;
  }
  
  // Apply color inversion
  function applyInversion() {
    // Don't apply if already active
    if (isInversionActive()) {
      return;
    }
    
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /* Invert all colors on the page */
      html {
        filter: invert(1) hue-rotate(180deg) !important;
      }
      
      /* Counter-invert images, SVGs, videos and background images to preserve original colors */
      img,
      svg,
      video,
      [style*="background-image"],
      [style*="background: url"],
      [style*="background:url"] {
        filter: invert(1) hue-rotate(180deg) !important;
      }
      
      /* Handle CSS background images */
      *[class*="bg-"],
      *[class*="background"],
      .hero,
      .banner,
      .cover,
      .thumbnail {
        filter: invert(1) hue-rotate(180deg) !important;
      }
    `;
    
    document.head.appendChild(style);
  }
  
  // Remove color inversion
  function removeInversion() {
    const existingStyle = document.getElementById(STYLE_ID);
    if (existingStyle) {
      existingStyle.remove();
    }
  }
  
  // Toggle inversion state
  function toggleInversion() {
    if (isInversionActive()) {
      removeInversion();
    } else {
      applyInversion();
    }
  }
  
  // Execute toggle
  toggleInversion();
})();