window.onload = (ev) => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const id = ctx.createImageData(canvas.width, canvas.height);

    for (let i = 0; i < canvas.width * canvas.height; i += 4) {
        id.data[i] = 0;
    }

    ctx.putImageData(id, 0, 0);
};