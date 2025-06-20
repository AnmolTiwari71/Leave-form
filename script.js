// Set default application date to today
document.getElementById("applicationDate").valueAsDate = new Date();

function toggleOtherReason(select) {
  const otherBox = document.getElementById("otherReasonBox");
  if (select.value === "other") {
    otherBox.style.display = "block";
  } else {
    otherBox.style.display = "none";
  }
}

function calculateDays() {
  const fromDate = new Date(document.getElementById("fromDate").value);
  const toDate = new Date(document.getElementById("toDate").value);

  if (!isNaN(fromDate.getTime()) && !isNaN(toDate.getTime())) {
    const diffTime = Math.abs(toDate - fromDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    document.getElementById("totalDays").value = diffDays;
  } else {
    document.getElementById("totalDays").value = "";
  }
}

// Auto-expand textareas when content exceeds initial height
document.querySelectorAll(".expandable-textarea").forEach((textarea) => {
  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
});

// Completely remove print headers and footers
window.addEventListener("beforeprint", function () {
  document.title = " ";
  // Additional print style adjustments
  const style = document.createElement("style");
  style.innerHTML = `
    @page { margin: 0; size: auto; }
    body { margin: 1.6cm; }
  `;
  document.head.appendChild(style);
});
