const container = document.querySelector("#container");

//Create <div class="title"> inside #container
const title = document.createElement("div");
title.classList.add("title");

//Create <h1> inside .title
const heading = document.createElement("h1");
heading.textContent = "Etch a Sketch";

title.appendChild(heading);
container.appendChild(title);

//Create grid
const grid = document.createElement("div");
grid.classList.add("grid");

title.appendChild(grid);

for (let col = 0; col < 16; col++) {
    const column = document.createElement("div");
    column.classList.add("col");
    grid.appendChild(column);
    for (let r = 0; r < 16; r++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.addEventListener("mouseenter", ()=> {row.style.backgroundColor = "aqua"})
        column.appendChild(row);
    }
}
