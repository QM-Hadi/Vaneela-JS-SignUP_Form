let signButton = document.getElementById("button");

//here we discuss the button click event which is add event listener to the button

signButton.addEventListener("click", function (event) {
    event.preventDefault(); // Stops default form submission
    let Name = document.getElementById("name").value.trim();
    let Email = document.getElementById("email").value.trim();
    let Password = document.getElementById("password").value.trim();
    let Age = document.getElementById("age").value.trim();
    let Gender = document.getElementById("gender").value.trim();

    console.log("Name:", Name);
    console.log("Email:", Email);
    console.log("Password:", Password);

    if (!Name || !Email || !Password || !Age || !Gender) {
        alert("Error: Complete all the fields");
        return;
    } else {
        alert("You are successfully logged in!");
    }
    document.getElementById("contentContainer").innerHTML = `<h1>About ${Name} </h1> </br> Name :${Name} </br> Email :${Email} </br> Password :${Password} </br> Age :${Age} </br> Gender :${Gender} </br>`;

   // here we have made a simple button and use vaneela javascript

    let button = document.createElement("button");
    button.id = "colorConvert";
    button.textContent = "Convert Color";
    button.className = "mt-4 px-5 py-5 bg-red text-white border rounded-md cursor-pointer";

    // Remove existing button if it already exists (prevents duplicates)
    let existingButton = document.getElementById("colorConvert");
    if (existingButton) {
        existingButton.remove();
    }

    // Append button below the welcome message
    contentContainer.appendChild(button);

    // Add event listener to change background color
    button.addEventListener("click", function () {
        let currentColor = window.getComputedStyle(contentContainer).backgroundColor;
        if (currentColor === "rgb(0, 0, 255)") {  
            contentContainer.style.background = "red";
        } else {
            contentContainer.style.background = "blue";
        }
    });

});
