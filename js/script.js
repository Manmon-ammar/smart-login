// ! html elements
    // ? forms 
        var loginForm = document.querySelector(".loginForm");
        var signUpForm = document.querySelector(".signUpForm");
    // ? inputs
        var username = document.querySelector(".name");
        var useremail = document.querySelector(".email");
        var userpassword = document.querySelector(".password");
    // ? error message
        var errorMessage = document.querySelector(".errorMessage");
    // ? buttons 
        var loginBtn = document.querySelector(".loginBtn");
        var signUpBtn = document.querySelector(".signUpBtn");
    // ? links 
        var signUpLink = document.querySelector(".signUpLink");
        var signInLink = document.querySelector(".signInLink");
// ^ app variables 
    // ? users array 
        var users = JSON.parse(localStorage.getItem("userData")) || [];
// * functions
    // ? sign up functions 
        function showSignUpForm(){
            signUpForm.classList.replace("d-none" , "d-flex");
            loginForm.classList.replace("d-flex" , "d-none");
        }
        function addUser(){
            if(isUserExist(useremail.value)){
                errorMessage.classList.add("text-danger" , "text-center");
                errorMessage.textContent = "User is already exist, please sign in";
                return;
            }
            // create user 
            var user = {
                userName : username.value,
                userEmail : useremail.value,
                userPassword : userpassword.value
            }
            // push user to users array
            users.push(user);
            // add users to local storage
            localStorage.setItem("userData" , JSON.stringify(users));
            // show success message
            errorMessage.classList.add("text-success" , "text-center");
            errorMessage.textContent = "Success";
        }
        function isUserExist(emailValue) {
            for (var i = 0; i < users.length; i++) {
              if (users[i].email === emailValue) {
                return true;
              }
            }
            return false;
          }
    // ? login functions
    function showSignInForm(){
        loginForm.classList.replace("d-none" , "d-flex");
        signUpForm.classList.replace("d-flex" , "d-none");
    }
// & events
    // ? show sign up event
        signUpLink.addEventListener("click" , function(){
            showSignUpForm();
        });
    // ? show sign in event
        signInLink.addEventListener("click" , function(){
            showSignInForm();
        });
    // ? add user event 
        signUpBtn.addEventListener("click" , function(){
            addUser();
        });