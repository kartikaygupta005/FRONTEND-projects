const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const dob = document.getElementById("dob").value;

    const password = document.getElementById("password").value;

    const course = document.getElementById("course").value;

    const terms = document.getElementById("termsCheck").checked;


    const namePattern = /^[A-Za-z]+$/;


    // name check

    if (!namePattern.test(name)) {

        alert("Enter valid name");

        return;
    }


    // email check

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Invalid email");

        return;
    }


    // phone check

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        alert("Phone number must contain exactly 10 digits");

        return;
    }


    // password check

    if (password.length < 8) {

        alert("Password must contain at least 8 characters");

        return;
    }

    if (!/[A-Z]/.test(password)) {

        alert("Password must contain at least one uppercase letter");

        return;
    }

    if (!/[a-z]/.test(password)) {

        alert("Password must contain at least one lowercase letter");

        return;
    }

    if (!/[0-9]/.test(password)) {

        alert("Password must contain at least one number");

        return;
    }


    // course check

    if (course === "") {

        alert("Please select a course");

        return;
    }


    // terms check

    if (!terms) {

        alert("Please accept the terms and conditions");

        return;
    }


    // Display data on webpage

    document.getElementById("result").innerHTML = `

        <h2>Registration Successful</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Date of Birth:</strong> ${dob}</p>

        <p><strong>Course:</strong> ${course}</p>

    `;

});
