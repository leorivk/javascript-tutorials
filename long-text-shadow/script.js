const h1 = document.querySelector("h1");
const body = document.querySelector("body");

let shadow = "";
const colors = ["#9abc9c", "#9ecc71", "#9498db", "#9b59b6", "#967e22", "#974c3c", "#91c40f"];

const randomNumber = Math.floor(Math.random() * colors.length);
const backgroundColor = colors[randomNumber];

body.style.background = backgroundColor;

//const shadowColors = colors.map((color) => `#1${color.split('').slice(2).join('')}`);
const shadowColors = colors.map((color) => color.replace(/\d/, '1'));

const shadowColor = shadowColors[randomNumber];

for (i=0; i<100; i++) {
    shadow += (shadow ? "," : "") + `${i}px ${i}px ${shadowColor}`;
}

h1.style.textShadow = shadow;








