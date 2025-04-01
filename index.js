let signButton = document.getElementById("button");

signButton.addEventListener("click", function (event) {
    event.preventDefault(); // Stops default form submission
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;

    console.log("Name:", Name);
    console.log("Email:", Email);
    console.log("Password:", Password);
    if(!Name, !Email , !Password){
        return (
            alert("Error : complete All the fields ")
        )
    }else{
        return(
            alert("You are successfully loggined!")
        )
    }
});




