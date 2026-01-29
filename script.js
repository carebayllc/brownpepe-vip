// Put your real contract address here:
const CONTRACT_ADDRESS = "0xYOUR_CONTRACT_ADDRESS_HERE";

const copyBtn = document.getElementById("copyContract");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy CA"), 1200);
    } catch {
      alert("Copy failed. Contract: " + CONTRACT_ADDRESS);
    }
  });
}
