const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const user_login = "admin"
    const user_password = "admin"

    if (username === user_login && password === user_password) {
        alert("You have successfully logged in.");
        location.reload();
    } else if(username.length == 0 && password.length == 0) {
        alert("Wpisz jakieś dane!");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})