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
        result.innerHTML = 'Logged in';
        window.location.href="index.html";
    } else {
        result.innerHTML = 'Wrong password';
    }
}

document.getElementById('signup-form').addEventListener('submit', loginFunc);
