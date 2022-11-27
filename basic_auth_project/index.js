// Requiring module
const express = require("express");
var path = require('path');

// Instancja naszej aplikacji
const app = express();

// Metoda odpowiedzialna za zalogowanie użytkownika
function authentication(req, res, next) {
    // Pobranie danych z headera
    var authheader = req.headers.authorization;
    console.log(req.headers);

    // Sprawdzenie czy użytkownik niezalogowany, nie próbuje poruszać się po aplikacji bez authentykacji (na przykład po ścieżkach /test/test/)
    if (!authheader) {
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err)
    }

    // Wygenerowany klucz na podstawie danych z formularza z, którego w późniejszym etapie porównujemy dane z tymi w bazie lub statyczne.
    var auth = new Buffer.from(authheader.split(' ')[1],
                               'base64').toString().split(':');
    // Pobranie danych z formularza do porównania ich z tymi, które użytkownik posiada w bazie danych, a w tym wypadku statycznie.
    var user = auth[0];
    var pass = auth[1];

    // Porównanie danych, aby sprawdzić ich prawidłowość.
    // Pierwszy if porównuje nam dane, jeśli są one prawidłowe, to przepuszcza nas dalej.
    if (user === 'admin' && pass === 'admin') {
        next();
    } else {
        //  Else jeśli dane są nieprawidłowe, pokazuje nam komunikat o błędzie i zwraca ponownie formularz do zalogowania
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }

}

// First step is the authentication of the client

// Start metody odpowiedzialnej za logowanie użytkownika
app.use(authentication)

// Dołącza nam pliki public. W tym przypadku plik index.html
app.use(express.static(path.join(__dirname, 'public')));

// Server setup

//Ustawienie nasłuchiwania na konkretny port, można go modyfikować według własnych potrzeb.
// Odpalenie aplikacji
app.listen((3000), () => {
    console.log("Server is Running");
})