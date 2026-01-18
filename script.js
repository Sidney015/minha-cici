const words = [
  "minha cici",
  "amor...",
  "meu amor",
  "fica cmg",
  "💗",
  "me desculpa",
  "eu te amo",
  "minha esposa"
];

function createWord() {
  const span = document.createElement("span");
  span.className = "love-word";
  span.innerText = words[Math.floor(Math.random() * words.length)];

  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 6 + Math.random() * 6 + "s";

  document.body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 12000);
}

setInterval(createWord, 300);
