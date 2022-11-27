//Pobranie po id naszych elementów htmlowych
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

//Nasłuchiwanie na kliknięcie w button, uruchamia nam ifa, który sprawdza poprawność statycznych danych
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
//    Pobranie danych z formularza od użytkownika, abyśmy mogli je póżniej porównać z tymi statycznymi
    const username = loginForm.username.value;
    const password = loginForm.password.value;

//    Statyczne dane
    const user_login = "admin"
    const user_password = "admin"

    //    Warunek logiczny, który sprawdza nam poprawność danych podanych przez użytkownika z danymi statycznymi [user_login, user_password]
    if (username === user_login && password === user_password) {
        alert("You have successfully logged in.");
        location.reload();
//        Warunek, który sprawdzi nam czy formularz nie jest pusty
    } else if(username.length == 0 && password.length == 0) {
        alert("Wpisz jakieś dane, formularz nie może być pusty!");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})