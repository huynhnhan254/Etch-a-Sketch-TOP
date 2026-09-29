const container = document.querySelector("#container");

//Create <div class="title"> inside #container
const title = document.createElement("div");
title.classList.add("title");

//Create <h1> inside .title
const heading = document.createElement("h1");
heading.textContent = "Etch a Sketch";

title.appendChild(heading);
container.appendChild(title);

//Create button
const btn = document.createElement("button");
btn.textContent = "size";
container.appendChild(btn);

btn.addEventListener("click", ()=> {
    resetGrid();
});

//Create grid
const grid = document.createElement("div");
grid.classList.add("grid");

container.appendChild(grid);

createGrid(16);

function createGrid(size) {
    for (let col = 0; col < size; col++) {
        const column = document.createElement("div");
        column.classList.add("col");
        grid.appendChild(column);
        for (let r = 0; r < size; r++) {
            const row = document.createElement("div");
            row.classList.add("row");
            row.addEventListener("mouseenter", ()=> {
                if (row.style.backgroundColor === "") {
                    const randomColor = randomRGB();
                    row.style.backgroundColor = randomColor;
                    row.style.borderColor = randomColor;
                }

                let opacity = Number(row.style.opacity) || 0;
                row.style.opacity = opacity + 0.1;
            });
            column.appendChild(row);
        }
    }
}

//Reset Grid
function resetGrid() {
    let size = prompt("Enter number of squares per side (1-100): ");

    if (size === null) {
        return;
    }

    size = Number(size);
    if (Number.isNaN(size) || size <= 0 || size > 100) {
        resetGrid();
    } else {
        grid.innerHTML = "";
        createGrid(size);
    }
}

function randomRGB() {
    const r = Math.floor(Math.random() * (255 - 180 + 1)) + 180;
    const g = Math.floor(Math.random() * (255 - 180 + 1)) + 180;
    const b = Math.floor(Math.random() * (255 - 180 + 1)) + 180;
    return `rgb(${r}, ${g}, ${b})`;
}