document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('login-form').addEventListener("submit", loginFunc);

    function loginFunc(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var result = document.getElementById('result');

        var user = localStorage.getItem(email);
        var data = JSON.parse(user);

        if (data == null) {
            result.innerHTML = 'Wrong email';
        } else if (email == data.email && password == data.password) {
            window.location.href = 'index.html';
        } else {
            result.innerHTML = 'Wrong password';
        }
    }
});