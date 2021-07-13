// Inputs Sign Up
var userNameUp = document.getElementById("userNameUp");
var userEmailUp = document.getElementById("userEmailUp");
var userPassUp = document.getElementById("userPassUp");
var btnUp = document.getElementById("btnUp");
var exist = document.getElementById("exist");
var eyePass = document.querySelector("#eye");
var eyePass1 = document.querySelector("#eye1");
var look = document.querySelectorAll(".look");


// Inputs Sign In
var userEmailIn = document.getElementById("userEmailIn");
var userPassIn = document.getElementById("userPassIn");
var logInBtn = document.getElementById("logInBtn");
var alertMasseg = document.querySelector("#alert");
var userName = document.getElementById("userName");``
var loginOut = document.querySelector(".butt");




var userContainer ;
if(localStorage.getItem("Users") == null){
     userContainer = []
}else{
     userContainer = JSON.parse(localStorage.getItem("Users"));
}

// Sign Up Functions

btnUp.addEventListener("click" , () =>{
     if(isEmpty() == true ){
          messageReqiuered();
          return false
     }
     if(validateEmail() == true){
          validationMessage()
          return false
     }
     if(isEmailExist() == true){
          messageFailed()
          return false
     }
          var user = {
               name : userNameUp.value,
               email : userEmailUp.value,
               pass : userPassUp.value
          }
          userContainer.push(user);
          saveUser()
          clearForm()
});

function saveUser() {
     localStorage.setItem("Users",JSON.stringify(userContainer))
}
function clearForm() {
     userNameUp.value = "";
     userEmailUp.value = "";
     userPassUp.value = "";
}
function isEmailExist() {
     for (var index = 0; index < userContainer.length; index++) {
          if ( userContainer[index].email.toLowerCase() == userEmailUp.value.toLowerCase() ) {
               return true
          }
     }
}
function messageFailed(){
     exist.innerText = "Email already exists" ;
}
function messageReqiuered(){
     exist.innerText = "All inputs are required" ;
}
function isEmpty(){

     if(userNameUp.value == "" && userEmailUp.value == "" && userPassUp.value == "") {
          return true
     } else {
          return false
     }
}
function validateEmail(){
     var regex = /@[a-z]{5-10}(\.com)$/;
     if(regex.test(userEmailUp.value) == true){
          return true;
     }else{
          return false;
     }
}
function validationMessage(){
     exist.innerText = "Please, this email is not valid" ;
}
eyePass.addEventListener('click' , () => {
     if(userPassUp.type === "password" ){
          userPassUp.type = "text"
     }else{
          userPassUp.type = "password"
     }
})
eyePass1.addEventListener('click' , () => {
     if(userPassIn.type === "password" ){
          userPassIn.type = "text"
     }else{
          userPassIn.type = "password"
     }
})

// Sign In Functions
logInBtn.addEventListener("click" , () =>{

     if(isEmptyIn() == true){
          messageReqiueredIn()
          return false
     }

     if (isCorrect() == true ){
          return true
     }else{
          logInFailed()
     }
})


function isEmptyIn(){

     if(userEmailUp.value != "" && userPassUp.value != "") {
          return true
     } else {
          return false
     }
}
function messageReqiueredIn() {
     alertMasseg.innerText = "All inputs are required" ;
}
function isCorrect() {
     for (let i = 0; i < userContainer.length; i++) {
          
          if (userContainer[i].email == userEmailIn.value && userContainer[i].pass == userPassIn.value ) {
               
               var usermasseg = userContainer[i].name
               localStorage.setItem("name" , JSON.stringify(usermasseg) );
               logInBtn.setAttribute("href" , "home.html")
               return true
          }
     }
}

function logInFailed(){
     alertMasseg.innerText = "Email or Password is incorrect";
}

function displayUseeName() {
     var usermasseg = JSON.parse(localStorage.getItem("name"));
     userName.innerHTML = "Welcome " + usermasseg ;
} 

// Login Out Function


function loginfun() {
     localStorage.removeItem("name");
     loginOut.setAttribute("href" , "index.html")
}








// Animaition
var signUpBtn = document.querySelector("#sign-up-btn");
var signInBtn = document.querySelector("#sign-in-btn");
var container = document.querySelector(".container");

signUpBtn.addEventListener("click" , function () {
     container.classList.add("sign-up-mode")
});

signInBtn.addEventListener("click", function () {
     container.classList.remove("sign-up-mode")
});
