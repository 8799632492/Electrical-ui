// Typewriter animation
const text = "Welcome to ElectroGenius!";
let index = 0;
const typewriter = document.getElementById("typewriter");

function type() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// Background string animation
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lines = [];
for (let i = 0; i < 100; i++) {
  lines.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: 20 + Math.random() * 30,
    speed: 1 + Math.random() * 2
  });
}

function animateLines() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 2;
  lines.forEach(line => {
    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x + line.length, line.y);
    ctx.stroke();
    line.x += line.speed;
    if (line.x > canvas.width) line.x = 0;
  });
  requestAnimationFrame(animateLines);
}

animateLines();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

canvas.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    lines.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: 30,
      speed: 2 + Math.random() * 2
    });
  }
});
