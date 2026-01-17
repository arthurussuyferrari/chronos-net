interface DomainStats {
  totalTime: number;
  lastAccess: number;
}

let currentDomain: string | null = null;
let startTime: number | null = null;

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const tab = await chrome.tabs.get(tabId);
  if (!tab.url) return;

  const domain = new URL(tab.url).hostname;
  handleDomainChange(domain);
});

chrome.tabs.onUpdated.addListener((_, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.active && tab.url) {
    const domain = new URL(tab.url).hostname;
    handleDomainChange(domain);
  }
});

chrome.runtime.onSuspend.addListener(() => {
  if (currentDomain && startTime) {
    const elapsed = Date.now() - startTime;
    saveTime(currentDomain, elapsed);
    startTime = Date.now();
  }
});

function handleDomainChange(newDomain: string) {
  const now = Date.now();

  if (currentDomain && startTime) {
    const elapsed = now - startTime;
    saveTime(currentDomain, elapsed);
  }

  currentDomain = newDomain;
  startTime = now;
}

function saveTime(domain: string, time: number) {
  chrome.storage.local.get([domain], (result) => {
    const stats = result[domain] as DomainStats | undefined;

    const previous = stats?.totalTime ?? 0;

    const newStats: DomainStats = {
      totalTime: previous + time,
      lastAccess: Date.now()
    };

    chrome.storage.local.set({
      [domain]: newStats
    });
  });
}

