
const main = document.querySelector('.grid-wrapper')

document.getElementById("demo").onclick = function() {start()};

function start() {
    main.innerHTML = " ";
    let gridSize = prompt('Grid Size: ');
    main.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    main.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    let gridArea = gridSize * gridSize;
    for (let i = 0; i < gridArea; i++) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('box');
        createDiv.addEventListener('mouseover', changeColor);
        main.appendChild(createDiv);
    }
}
function changeColor(e) {
    e.target.style.backgroundColor = "black";
}
