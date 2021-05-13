const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('name');

const image = new Image();
image.src = 'assets/card.png';
image.onload = function () {
    drawImage();
}

function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;
    
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 13px Tajawal';
    ctx.fillStyle = '#cc9f66';
    ctx.textAlign = 'center';

    ctx.fillText(nameInput.value.trim(), 178, 390);
}

nameInput.addEventListener('input', function () {
    drawImage();
})

function download() {
    const link = document.getElementById('link');
    link.setAttribute('download', `@AxendaTeam - ${nameInput.value}.png`);
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
}
