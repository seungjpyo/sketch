
const gridSizeInput = document.querySelector('#gridSizeInput')
const gridSizeDisplay = document.querySelector('#gridSizeDisplay')
const gridBoard = document.querySelector('#gridBoard')
const colorInput = document.querySelector('#colorInput')
const oneColorMode = document.querySelector('#oneColorMode')
const multiColorMode = document.querySelector('#multiColorMode')
const eraserMode = document.querySelector('#eraserMode')
const clear = document.querySelector('#clear')



gridSizeInput.addEventListener('input', () => gridSizeDisplay.textContent = `${gridSizeInput.value}` + ' x ' + `${gridSizeInput.value}`);
gridSizeInput.addEventListener('mouseup', changeGridSize);
gridSizeInput.addEventListener('keyup', changeGridSize);


changeGridSize();



function changeGridSize() {
    gridBoard.style.gridTemplateColumns = `repeat(${gridSizeInput.value}, 1fr)`;
    gridBoard.style.gridTemplateRows = `repeat(${gridSizeInput.value}, 1fr)`;
    gridBoard.innerHTML = '';
    for (i = 0; i < Math.pow(gridSizeInput.value, 2); i++) {
        const gridUnit = document.createElement('div');
        gridBoard.appendChild(gridUnit);
        gridUnit.addEventListener('mouseenter', changeColor);
    }
}



clear.addEventListener('click', clearTheBoard);
function clearTheBoard() {
    gridBoard.querySelectorAll('div').forEach(i => i.style.background = '#ffffff');
}



//Below are the codes for 'drawing' on the board ------------------------------------------------------
let mode = 0;
oneColorMode.addEventListener('click', () => mode = 0);
multiColorMode.addEventListener('click', () => mode = 1);
eraserMode.addEventListener('click', () => mode = 2);

let mouseDownCheck = false;
gridBoard.addEventListener('mousedown', () => mouseDownCheck = true);
gridBoard.addEventListener('mouseup', () => mouseDownCheck = false);

function changeColor(e) {
    if (mouseDownCheck === true) {
        if (mode === 0) e.target.style.background = `${colorInput.value}`;
        if (mode === 1) e.target.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        if (mode === 2) e.target.style.background = '#ffffff';
    }
}

