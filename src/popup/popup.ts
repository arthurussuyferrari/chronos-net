interface SiteUsage {
  totalTime: number;
  lastAccess: number;
}

type StorageData = Record<string, SiteUsage>;

const list = document.getElementById("stats") as HTMLUListElement;

chrome.storage.local.get(null, (data) => {
  const storage = data as StorageData;

  const entries = Object.entries(storage)
    .filter(([domain]) => isValidDomain(domain))
    .sort((a, b) => b[1].totalTime - a[1].totalTime);

  for (const [domain, info] of entries) {
    const li = document.createElement("li");

    const site = document.createElement("span");
    site.className = "site";
    site.textContent = formatDomain(domain);

    const time = document.createElement("span");
    time.className = "time";
    time.textContent = formatTime(info.totalTime);

    li.appendChild(site);
    li.appendChild(time);
    list.appendChild(li);
  }

  if (!entries.length) {
    list.innerHTML = "<li>Nenhum dado ainda</li>";
  }
});


function isValidDomain(domain: string): boolean {
  return (
    !domain.startsWith("chrome") &&
    !domain.includes("newtab") &&
    domain.includes(".")
  );
}

function formatDomain(domain: string): string {
  const main = domain.replace(/^www\./, "").split(".")[0];
  return main.charAt(0).toUpperCase() + main.slice(1);
}

function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}h ${minutes % 60}m`;
  }

  return `${minutes} min`;
}
