// VARIABLES
const counterValue = document.getElementById('value'); // Get the counter element
const btns = document.querySelectorAll('.btn') // Get all the buttons

let count = 0 // Set the initial count value to 0

// FUNCTION TO CHANGE COLOR OF THE COUNTER VALUE
const changeColor = () => {
    // If count is negative, set the color to red
    if (count < 0) {
        counterValue.style.color = 'red'
    }
    // If count is positive, set the color to green
    else if (count > 0) {
        counterValue.style.color = 'green'
    }
    // If count is zero, set the color to default
    else {
        counterValue.style.color = 'inherit'
    }
}

// ADD EVENT LISTENER TO EACH BUTTON
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let targetElement = e.target // Get the clicked button element
        // If the clicked button is 'decrease', decrement the count
        if (targetElement.classList.contains('decrease')) {
            count--
        }
        // If the clicked button is 'increase', increment the count
        else if (targetElement.classList.contains('increase')) {
            count++
        }
        // If the clicked button is 'reset', set the count to 0
        else {
            count = 0;
        }
        counterValue.innerText = count // Update the counter value on the webpage
        changeColor() // Change the color of the counter value based on the current count value
    })
}) 
