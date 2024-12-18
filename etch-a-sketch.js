// get container as javascript obj
const container = document.querySelector(".container")

// fill the container with 16 rows

let n = 40

for (let i = 1; i <= n; i++) {
    // add a row div as js obj
    const row = document.createElement("div")
    // give it a class
    row.className = "row"
    // give it an outline
    row.style.outline = "1px dashed"

    // for each row fill it with 16 squares
    for (let j = 1; j <= n; j++) {
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

// create a square object
const squares = document.querySelectorAll(".square")
// set up an event listener for all the squares
squares.forEach((square) => {
    // and for each one we add a 'click' listener
    square.addEventListener("mouseenter", () => {
      console.log("you have entered a new square");
      square.style.backgroundColor = "#00008B"
    });
  });

// create a button in the DOM

const btn = document.createElement("button")
btn.innerText = "Create grid"
// append button to body
const body = document.querySelector("body")
body.appendChild(btn)

btn.addEventListener("click", () => {
  let numOfSquares = prompt("How many squares per side do you want? Enter a number between 1 and 100","100")
})






