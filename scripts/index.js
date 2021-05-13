const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('name');

canvas.style.width = '356px';     // show at 50% on screen
canvas.style.height = '538px';

const image = new Image();
image.src = 'assets/card.svg';
image.onload = function () {
    drawImage(canvas.width, canvas.height);
}


function drawImage(width, height) {
    ctx.clearRect(0, 0, width, height);
    
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(image, 0, 0, width, height);

    ctx.font = 'bold 70px Tajawal';
    ctx.fillStyle = '#cc9f66';
    ctx.textAlign = 'center';
    ctx.fillText(nameInput.value.trim(), (width / 2 - 19), height - 700);
}

nameInput.addEventListener('input', function () {
    drawImage(canvas.width, canvas.height);
})

function download() {
    const link = document.getElementById('link');
    link.setAttribute('download', `@AxendaTeam - ${nameInput.value}.png`);
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
}
