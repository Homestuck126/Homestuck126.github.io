const contentArea = document.getElementById("content");
const buttons = document.querySelectorAll(".tab-button");

function loadTab(tab) {
  fetch(`sections/${tab}.html`)
    .then(res => res.text())
    .then(html => {
      contentArea.innerHTML = html;
    });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loadTab(btn.dataset.tab);
  });
});

// Load default tab
loadTab("resume");
