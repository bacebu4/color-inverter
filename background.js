chrome.action.onClicked.addListener(async (tab) => {
  try {
    // Check if we can access this tab (excludes chrome:// pages, etc.)
    if (tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://') || tab.url.startsWith('edge://') || tab.url.startsWith('about:')) {
      return;
    }
    
    // Inject and execute the content script
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  } catch (error) {
    // Silently handle errors (e.g., permission denied, restricted pages)
    console.log('Cannot access this page:', error);
  }
});