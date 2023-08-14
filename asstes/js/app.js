let slide = document.querySelector(".slide")
let cross = document.querySelector(".cross")
let ul = document.querySelector(".ul-position")
let op = document.querySelector("#overlay")
console.log(ul)
slide.addEventListener("click", function () {
    ul.classList.add("left")
    op.classList.add("overlay")     
})
cross.addEventListener("click", function () {
    ul.classList.remove("left")
    op.classList.remove("overlay")
})
op.addEventListener("click", function () {
    ul.classList.remove("left")
    op.classList.remove("overlay")
})