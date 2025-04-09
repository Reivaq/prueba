// Alerta inicial
alert("¡Sorpresa Sonia! 🎁 ¡Feliz Cumpleaños!");

// Confetti animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
const colors = ["#fbe8d3", "#d6a77a", "#a97458", "#fff1e0", "#c49e85"];

for (let i = 0; i < 150; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 8 + 2,
    speedY: Math.random() * 3 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 2 * Math.PI,
  });
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    p.y += p.speedY;
    p.rotation += 0.02;
    if (p.y > canvas.height) p.y = -10;
    ctx.fillStyle = p.color;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();
  });
  requestAnimationFrame(updateConfetti);
}

updateConfetti();

// Globos
const balloonColors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3', '#48dbfb', '#a97458'];
for (let i = 0; i < 12; i++) {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.bottom = -100 + 'px';
  balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  balloon.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(balloon);
}

// Música de cumpleaños
const audio = document.getElementById('birthdayAudio');
let audioStarted = false;

// Mensajes secretos
const secretMessages = [
  "Eres increíble 💖",
  "¡Que todos tus sueños se hagan realidad!",
  "Te mereces lo mejor 🎁",
  "¡Brillas como el sol! ☀️",
  "Eres única y especial ✨",
  "¡El mundo es mejor contigo en él! 🌎",
  "Eres la razón de muchas sonrisas 😊",
  "Tu alegría es contagiosa 🌟",
  "¡Eres simplemente maravillosa! 💫",
  "Tu corazón es tan grande como tu sonrisa 💕"
];

document.body.addEventListener('click', () => {
  // Iniciar música solo la primera vez
  if (!audioStarted) {
    audio.play().catch(e => console.log("El audio no pudo iniciarse automáticamente:", e));
    audioStarted = true;
  }
  
  // Mostrar mensaje secreto centrado
  const msg = document.createElement('div');
  msg.className = 'secret-message';
  msg.textContent = secretMessages[Math.floor(Math.random() * secretMessages.length)];
  document.body.appendChild(msg);
  
  // Eliminar mensaje después de la animación
  setTimeout(() => msg.remove(), 3000);
});

// Ajustar tamaño al redimensionar ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});