const CONFIG = {
  contract: "0xYOUR_CONTRACT_ADDRESS",
  basescan: "https://basescan.org/address/0xYOUR_CONTRACT_ADDRESS",
  buyUrl: "https://app.uniswap.org/swap?chain=base&outputCurrency=0xYOUR_CONTRACT_ADDRESS",
  bridgeUrl: "https://bridge.base.org/deposit", // or your own bridge page
  x: "https://x.com/YOUR_HANDLE",
  dex: "https://dexscreener.com/base/PAIR_OR_TOKEN",
  cmc: "https://coinmarketcap.com/", // update if/when listed
};

function setText(id, v){ const el=document.getElementById(id); if(el) el.textContent=v; }
function setHref(id, v){ const el=document.getElementById(id); if(el) el.href=v; }

function apply(){
  setText("contractText", CONFIG.contract);
  setHref("basescanLink", CONFIG.basescan);
  setHref("basescanBtn", CONFIG.basescan);

  setHref("dexLink", CONFIG.dex);
  setHref("cmcLink", CONFIG.cmc);

  setHref("buyBtnTop", CONFIG.buyUrl);
  setHref("buyBtnM", CONFIG.buyUrl);
  setHref("buyBtn", CONFIG.buyUrl);

  setHref("bridgeLink", CONFIG.bridgeUrl);
  setHref("bridgeLinkM", CONFIG.bridgeUrl);

  setHref("xLink", CONFIG.x);

  document.getElementById("year").textContent = new Date().getFullYear();
}

async function copyText(text){
  try { await navigator.clipboard.writeText(text); return true; } catch { return false; }
}

document.getElementById("copyBtn")?.addEventListener("click", async () => {
  const btn = document.getElementById("copyBtn");
  const ok = await copyText(CONFIG.contract);
  btn.textContent = ok ? "Copied!" : "Copy failed";
  setTimeout(() => (btn.textContent = "Copy"), 1200);
});

document.getElementById("hamburger")?.addEventListener("click", () => {
  const m = document.getElementById("mobileMenu");
  m.style.display = (m.style.display === "block") ? "none" : "block";
});

apply();
