document.getElementById('myForm').addEventListener('input',
    function() {
        var formData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            bio: document.getElementById('bio').value
    };
    localStorage.setItem('formData', JSON.stringify(formData));
});