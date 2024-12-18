// set margins, padding and borders to 0

// create a square container for the grid

// set the width and height equal to the viewport width

// get container as javascript obj
const container = document.querySelector(".container")

// fill the container with 16 rows

for (let i = 1; i <= 16; i++) {
    // add a row div as js obj
    const row = document.createElement("div")
    // give it a class
    row.className = "row"
    // give it an outline
    row.style.outline = "1px dashed"

    // for each row fill it with 16 squares
    for (let j = 1; j <= 16; j++) {
        // add a square as js obj
        const square = document.createElement("div")
        // give it a class of square
        square.className = "square"
        // give it an outline
        square.style.outline = "1px dashed"
        // append the square to the row
        row.appendChild(square)
    }

    // add it to the dom
    container.appendChild(row)
}

// the rows are flexbox items - what should their flex behaviour be?

// each row is a flexbox container

// fill each row with 16 square divs
//do I need to actually make them squares?
// or will they be squares naturally because the container is square?

// the squares are flex box items - what should their flex behaviour be?



