//Prevents the form from submitting
const button = document.getElementById("submit");
    button.addEventListener('click',(e) => {
        e.preventDefault();
});

//Password
//Variables to store the toggle password and password values
const togglePassword =  document.querySelector("#togglePassword");
const password = document.querySelector("#password");
//Add an event listener to the togglePassword icon
togglePassword.addEventListener('click', (e) => {
    //toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type",type);
    //toggle the eye
    this.classList.toggle("fa-eye");
});

//Confirm Password
const togglePassword1 = document.querySelector("#togglePassword1");
const password1 = document.querySelector("#password1");

togglePassword1.addEventListener('click', (e) => {
    //toggle the type attribute
    const type1 = password1.getAttribute("type") === "password" ? "text" : "password";
    password1.setAttribute("type",type1);
    //toggle the eye
    this.classList.toggle("fa-eye");
});