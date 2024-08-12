//select the button element \\
document.querySelector("body").style.cssText = "color: white; background-color: white;"
let myButton = document.querySelector("button")

//declared event handler function \\
function handleClick() {
    document.querySelector("body").style.cssText = "color: White; background-color: Black;"
}

//use addEventListener to run the handleClick function when the button is clicked
myButton.addEventListener('click', handleClick)

