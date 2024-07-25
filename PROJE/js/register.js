document.addEventListener('DOMContentLoaded', (event) => {
    'use strict';

    var form = document.querySelector('.needs-validation');
    
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            saveFormData();
        }
        form.classList.add('was-validated');
    }, false);

    function saveFormData() {
        var user = {
            firstName: document.getElementById('inputFirstname4').value,
            lastName: document.getElementById('inputLastname4').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            address: document.getElementById('inputAddress').value,
            check: document.getElementById('gridCheck').checked
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Form data saved successfully!');
    }
});
