/* social media icon bar which is fixed at left side of the websites */
let fb = document.getElementById("fb");
let ins = document.getElementById("ins");
let ln = document.getElementById("in");
let can = document.getElementById("cancel");

function myFunction() {
    fb.style.display = "none";
    ins.style.display = "none";
    ln.style.display = "none";
    can.style.display = "none";

}
can.addEventListener('click', myFunction);


/*switch form between login form or sign up form  */
let signBtn = document.getElementById("active");
let loginBtn = document.getElementById("login-button");
let signUp = document.getElementById("sign-up");
let login = document.getElementById("login");


function signupformSwitch() {
    login.style.visibility = "hidden";
    signUp.style.visibility = "visible";
    signBtn.style.color = "red";
    loginBtn.style.color = "black";
}

function loginformSwitch() {
    login.style.visibility = "visible";
    signUp.style.visibility = "hidden";
    signBtn.style.color = "black";
    loginBtn.style.color = "red";
}

signBtn.addEventListener('click', Signupforms);
loginBtn.addEventListener('click', loginformSwitch);

/*explore more product by clicking on explore more button */