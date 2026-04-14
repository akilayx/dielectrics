const canvas = document.getElementById("atomCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    const size = Math.min(window.innerWidth * 0.9, 600);

    canvas.width = size;
    canvas.height = size;

    drawAtom(); // твоя функция рисования атома
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// пример функции (если у тебя её нет)
function drawAtom() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // центр
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    // ядро
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fillStyle = "orange";
    ctx.fill();
}