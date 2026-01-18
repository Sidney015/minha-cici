// palavras flutuando no fundo
const words = [
  "MINHA Cici",
  "MEU Amor",
  "Eu te amo ate o infinito",
  "Eu te Amo",
  "me desculpa",
  "Eu amo você"
];

function createWord() {
  const span = document.createElement("span");
  span.className = "love-word";
  span.innerText = words[Math.floor(Math.random() * words.length)];

  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 6 + Math.random() * 6 + "s";

  document.body.appendChild(span);

  setTimeout(() => span.remove(), 12000);
}

setInterval(createWord, 350);

// ===== CORAÇÃO NO CENTRO =====
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let t = 0;

function drawHeart(scale) {
  ctx.beginPath();
  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const x =
      16 * Math.pow(Math.sin(i), 3);
    const y =
      -(13 * Math.cos(i) -
        5 * Math.cos(2 * i) -
        2 * Math.cos(3 * i) -
        Math.cos(4 * i));

    ctx.lineTo(
      canvas.width / 2 + x * scale,
      canvas.height / 2 + y * scale
    );
  }
  ctx.closePath();
}

function animateHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const pulse = 14 + Math.sin(t) * 0.8;

  drawHeart(pulse);
  ctx.strokeStyle = "rgba(255,92,138,0.9)";
  ctx.lineWidth = 2;
  ctx.shadowColor = "#ff5c8a";
  ctx.shadowBlur = 20;
  ctx.stroke();

  t += 0.05;
  requestAnimationFrame(animateHeart);
}

animateHeart();
