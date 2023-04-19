
const palette = document.getElementById('color-palette');

const chooseColor = () => {
    for(let i=0; i < 4; i +=1){
        const button = document.getElementsByClassName('.color');
        button.appendChild(palette);
    }
};
chooseColor();
const button = document.querySelectorAll('.color');

button[0].style.backgroundColor = 'black';
button[1].style.backgroundColor = 'red';
button[2].style.backgroundColor = 'blue';
button[3].style.backgroundColor = 'green';










    //const table = document.createElement('table');
    //const thead = document.createElement('thead');
    //const tbody = document.createElement('tbody');

    

    //const thd = (i) => {
   //     for(let i = 0; i<content.length; i+=1);{
    //        let tr = document.createElement('tr');
   

// referencia https://pt.stackoverflow.com/questions/49581/criar-tabela-din%C3%A2mica-em-js-para-utilizar-em-html
// https://www.delftstack.com/pt/howto/javascript/create-table-javascript/


//const black = document.getElementsByClassName('color')[0];
//const red = document.getElementsByClassName('color')[1];
//const blue = document.getElementsByClassName('color')[2];
//const green = document.getElementsByClassName('color')[3];