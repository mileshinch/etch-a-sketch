const container = document.querySelector(".container");

// container.innerText = "Hello"

container.style.outline = "1px dashed"

// get 16 squares on a row

for (let i = 0; i < 7; i++) {
    // add a square div to the container div
    const square = document.createElement("div")

    square.style.outline = "1px solid"

    square.style.height = "100px"
    square.style.width = "100px"

    container.appendChild(square)
}

// make them always be squares





