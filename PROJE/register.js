document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('Username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const user = {
        username: username,
        email: email,
        password: password,
        phone: phone,
        address: address
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert('Kayıt başarılı!');
});
