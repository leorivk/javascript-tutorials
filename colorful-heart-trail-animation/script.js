const body = document.querySelector("body");

const heartAnimation = (e) => {
    const heart = document.createElement("span");
    const x = e.offsetX;
    const y = e.offsetY;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    const size = Math.random()*100;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    }, 2000);
}

body.addEventListener("mousemove", heartAnimation);