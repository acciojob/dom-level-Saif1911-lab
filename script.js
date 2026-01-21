// Select the element with id "level"
let element = document.getElementById("level");

// Start count from 0
let level = 0;

// Count the element itself and all its parents up to <html>
while (element !== null) {
    level++;
    element = element.parentElement;
}

// Display the result
alert("The level of the element is: " + level);

