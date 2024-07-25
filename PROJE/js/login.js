document.addEventListener('DOMContentLoaded', (event) => {
    'use strict';

    var form = document.querySelector('.needs-validation');

    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            checkLogin();
        }
        form.classList.add('was-validated');
    }, false);

    function checkLogin() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var storedData = JSON.parse(localStorage.getItem('user'));

        if (storedData) {
            if (storedData.email === email && storedData.password === password) {
                alert('Giriş Yapıldı!');
                window.location.href = "index.html";
            } else {
                alert('Yanlış şifre veya email!');
            }
        } else {
            alert('böle bir kullanıcı bulunamadı!');
        }
    }
});
