function hideResultsAndError() {
    document.getElementById("error-message").setAttribute("class", "hidden");
    document.getElementById("logyy").setAttribute("class", "hidden");
    document.getElementById("kether").setAttribute("class", "hidden");
    document.getElementById("emilyy").setAttribute("class", "hidden");
    document.getElementById("kimyy").setAttribute("class", "hidden");
}

window.onload = function {
    document.querySelector("form").onsubmit = function(event) {
        event.preventDefault();
        hideResultsAndError();
        
    }
}