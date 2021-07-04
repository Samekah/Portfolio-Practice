let title = document.querySelector("h2");
let form = document.querySelector("form");

title.addEventListener("click", () =>{
   let value = title.value;

   switch(value){
       case "Testing":
           value = "Contact us"
           break;
        case "Contact us":
            value = "Testing"
            break; 
   }

   title.textContent=value;
});

//simulating form submission
form.addEventListener("submit", recordData);

function recordData(event){
    event.preventDefault();
    let newPass = document.querySelector("#newpass").value;
    let verifyPass = document.querySelector("#pass").value;

    if(newPass !== verifyPass){
        alert("Passwords do not match, pease try again");
    }
    else{
        form.reset();
        alert("Your account has been created");
    }
    
}   