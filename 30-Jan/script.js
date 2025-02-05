function validateForm() {
    let name = document.getElementsByName("name")[0].value.trim();
    let email = document.getElementsByName("mail")[0].value.trim();
    let age = document.getElementsByName("age")[0].value.trim();
    let dob = document.getElementsByName("dob")[0].value.trim();
    let problem = document.getElementsByName("problem")[0].value.trim();
    let message = document.getElementById("message");

    let namePattern = /^[A-Za-z\s]+$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let currentYear = new Date().getFullYear();
    let birthYear = new Date(dob).getFullYear();

    if (name === "") {
        alert("Name is required");
        return;
    }
    if (!namePattern.test(name)) {
        alert("Name should only contain letters and spaces.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Enter a valid Gmail address (e.g., example@gmail.com)");
        return;
    }
    if (age === "" || isNaN(age) || age >= 15) {
        alert("Enter a valid age greater than 15");
        return;
    }
    if (dob === "") {
        alert("Select your date of birth");
        return;
    }
    if (birthYear > 2005) {
        alert("Date of birth should be before the year 2005");
        return;
    }
    if (problem === "") {
        alert("Please select a problem");
        return;
    }

    alert("Submitted successfully!!");
    message.innerText = "Data recorded successfully.";
    console.log("Data recorded successfully.");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("DOB:", dob);
    console.log("Problem:", problem);
}
