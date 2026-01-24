// Copy contract address
const copyBtn = document.getElementById("copyBtn");
const contractText = document.getElementById("contractText");
if (copyBtn && contractText) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(contractText.textContent.trim());
      const old = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = old), 1200);
    } catch (e) {
      alert("Copy failed. Please copy manually.");
    }
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
