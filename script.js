


// Add an event listener to the form that prevents the default action (submitting the form) when the submit button is clicked.

// Add additional code to your event handler that has a console.log(...) statement that outputs the value that is currently entered int the input text element in the form.

// Add a color input element to the form in the HTML file.

// Modify your event listener so that it attaches to the color input instead of the text input.

// It should still output the current value inside of the console.

// Modify your event listener so that in addition to outputting the value in the console it also saves it to the local storage.

// Write code that checks to see if the color value is present when the page loads and display it in the console if so.

let textInput = document.getElementById("textarea");
let form = document.querySelector("form");

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(textInput.value);

}); 
textInput.innerText += localStorage.getItem("textarea");

