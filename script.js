// Event listener to change the text content of the greeting
document.getElementById('textButton').addEventListener('click', function() {
    // Select the greeting element
    var greeting = document.getElementById('greeting');

    // Change the text content
    greeting.textContent = "Salam, JavaScript!";
});