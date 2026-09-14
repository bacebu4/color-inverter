const getHosts = async () => (await chrome.storage.local.get('hosts')).hosts ?? [];

function hostOf(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:' ? u.hostname : null;
  } catch {
    return null;
  }
}

function setBadge(tabId, url, hosts) {
  const host = hostOf(url);
  chrome.action.setBadgeText({ tabId, text: host && hosts.includes(host) ? 'ON' : '' });
}

chrome.action.onClicked.addListener(async (tab) => {
  const host = hostOf(tab.url);
  if (!host) return;
  let hosts = await getHosts();
  hosts = hosts.includes(host) ? hosts.filter((h) => h !== host) : [...hosts, host];
  await chrome.storage.local.set({ hosts });
  for (const t of await chrome.tabs.query({})) setBadge(t.id, t.url, hosts);
});

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (info.status === 'loading') setBadge(tabId, tab.url, await getHosts());
});
