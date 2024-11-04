// const box = document.getElementById("box")
const box = document.querySelector("div")
const dimension = box.getAttribute("data-dimension")

box.style.width = dimension + "px"
box.style.height = dimension + "px"

let isPressed = false
let xOffset = 0
let yOffset = 0

box.addEventListener("mousedown", (event) => {
  const { target } = event
  const { x, y } = event
  const rect = target.getBoundingClientRect()
  const boxX = rect.left
  const boxY = rect.top
  xOffset = x - boxX
  yOffset = y - boxY

  console.log("OFFSET X:", xOffset, "OFFSET Y:", yOffset)
  isPressed = true

})

box.addEventListener("mouseup", () => {
  isPressed = false
})

box.addEventListener("mousemove", (event) => {
  const { x, y } = event
  if(isPressed) {
    box.style.transform = `translate(${x - xOffset}px, ${y - yOffset}px)`
  }
})

// const boxes = document.querySelectorAll("div");

// function randomColor() {
//   const r = Math.floor(Math.random() * 256)
//   const g = Math.floor(Math.random() * 256)
//   const b = Math.floor(Math.random() * 256)

//   return `rgb(${r}, ${g}, ${b})`
// }

// for (const box of boxes) {
//   const color = randomColor()
//   box.addEventListener("click", (event) => {
//     const { target } = event;
//     target.innerText = "hello";
//     target.style.backgroundColor = color
//   });
// }


