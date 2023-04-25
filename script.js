const palette = document.getElementById('color-palette');

const paletteHead = document.getElementsByClassName('color');

const paletteList = [];

for (let index = 0; index < 4; index += 1) {
  paletteList.push(paletteHead[index]);
};

document.getElementById('color1').style.backgroundColor = 'black';
document.getElementById('color2').style.backgroundColor = 'red';
document.getElementById('color3').style.backgroundColor = 'green';
document.getElementById('color4').style.backgroundColor = 'blue';

const changeColor = () => {
  const savedColor = ['black'];
  for (let index = 1; index < paletteList.length; index += 1) {
    const colors = document.getElementsByClassName('color');
    const r = Math.floor(Math.random() * 255);
    const let g = Math.floor(Math.random() * 255);
    const let b = Math.floor(Math.random() * 255);

    colors[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    savedColor.push(`rgb(${r}, ${g}, ${b})`);
  }

    localStorage.setItem('colorPalette', JSON.stringify(savedColor));
};

const btnChangeColor = document.getElementById('button-random-color');

btnChangeColor.addEventListener('click', changeColor);

const colorPalette = JSON.parse(localStorage.getItem('colorPalette'));
if (colorPalette !== null) {
  for (let index = 1; index < colorPalette.length; index += 1) {
    palette.children[index].style.backgroundColor = colorPalette[index];
  }
}

const board = document.getElementById('pixel-board');
for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = 'white';
  board.appendChild(pixel);
}

const choosedColor = () => {
  let color = document.querySelector('.selected').style.backgroundColor;
  return color;
}

const mudeACor = (event) => {
  event.target.style.backgroundColor = choosedColor();
}

const setSelected = (event) => {
  const caminho = event.target;
  for (let index = 0; index < paletteHead.length; index += 1) {
    if(paletteHead[index].classList.contains('selected')) {
    paletteHead[index].classList.remove('selected');
    } 
  }
  caminho.classList.add('selected');
}

const beSelected = () => {
  const selected = document.querySelectorAll('.color');
  for(let index = 0; index < selected.length; index += 1) {
    selected[index].addEventListener('click', setSelected);
  }   
}
beSelected()

const printColor = () => {
  const pixelColor = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelColor.length; index += 1) {
    pixelColor[index].addEventListener ('click', mudeACor);
  }
}
printColor()

const btnClear = document.getElementById('clear-board');