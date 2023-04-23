const palette = document.getElementById("color-palette");

const paletteHead = document.getElementsByClassName("color");
for(let index = 0; index < paletteHead.length; index +=1){
    const paletteTitle = [];
    paletteTitle.push(paletteHead[index]);
};

let btns = document.querySelectorAll('button')
for(button of btns) {
    let r = Math.floor(Math.random() * 255),
        g = Math.floor(Math.random() * 255),
        b = Math.floor(Math.random() * 255);

  button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}