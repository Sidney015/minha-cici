document.addEventListener("DOMContentLoaded", () => {
  const words = [
    "MINHA Cici",
    "MEU Amor",
    "Eu te amo até o infinito",
    "Eu te Amo",
    "me desculpa",
    "Eu amo você"
  ];

  const ui = document.getElementById("ui");

  function createWord() {
    const span = document.createElement("span");
    span.className = "love-word";
    span.innerText = words[Math.floor(Math.random() * words.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 6 + Math.random() * 6 + "s";

    ui.appendChild(span);

    setTimeout(() => span.remove(), 12000);
  }

  setInterval(createWord, 350);
});
