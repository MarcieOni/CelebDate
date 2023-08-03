function hideResultsAndError() {
    document.getElementById("error-message").setAttribute("class", "hidden");
    document.getElementById("logyy").setAttribute("class", "hidden");
    document.getElementById("kether").setAttribute("class", "hidden");
    document.getElementById("emilyy").setAttribute("class", "hidden");
    document.getElementById("kimyy").setAttribute("class", "hidden");
    document.getElementById("sry").setAttribute("class", "hidden");
}

window.onload = function() {
    document.querySelector("form").onsubmit = function(event) {
        event.preventDefault();
        hideResultsAndError();
        const age = parseInt(document.getElementById("age").value);
        const height = parseInt(document.getElementById("height").value);
        const sex = document.getElementById("sex").value;

        if (!age || !sex || !height || age < 18) {
            document.getElementById("error-message").removeAttribute("class");
        } else {
            if (age >= 40 && sex === "f" && height >= 100) {
                document.getElementById("logyy").removeAttribute("class");
            } else if (age >= 25 && age <= 35 && sex === "f") {
                document.getElementById("kether").removeAttribute("class");
            } else if (age <= 35 && sex === "m" && height < 72 && height > 60) {
                document.getElementById("emilyy").removeAttribute("class");
            } else if (age <= 30 && sex === "f" && height <= 60) {
                document.getElementById("kimyy").removeAttribute("class");
            } else {
                document.getElementById("sry").removeAttribute("class");
            }
        }

    }
}