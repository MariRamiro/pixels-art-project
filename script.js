const palette = document.getElementById("color-palette");

const paletteHead = document.getElementsByClassName("color");

const paletteList = [];

for(let index = 0; index < 4; index +=1){
    paletteList.push(paletteHead[index]);
};

document.getElementById('color1').style.backgroundColor = 'black';
document.getElementById('color2').style.backgroundColor = 'red';
document.getElementById('color3').style.backgroundColor = 'green';
document.getElementById('color4').style.backgroundColor = 'blue';

const changeColor = () => {
for(let index = 1; index < paletteList.length; index +=1) {
    const colors = document.getElementsByClassName('color');
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

  colors[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
};

const btnChangeColor = document.getElementById("button-random-color");

btnChangeColor.addEventListener('click', changeColor);