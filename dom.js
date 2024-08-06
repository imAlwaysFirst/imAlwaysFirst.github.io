//select the button element
let myButton = document.querySelector("button")

//declared event handler function 
function handleClick(){
    alert('button was clicked')
    document.querySelector("body").style.cssText = "color: white; background-color: black;"
}

//use addEventListener to run the handleClick function when the button is clicked
myButton.addEventListener('click', handleClick)

