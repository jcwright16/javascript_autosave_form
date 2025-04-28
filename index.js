// Implement Local Storage Saving
document.getElementById('myForm').addEventListener('input',
    function() {
        var formData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            bio: document.getElementById('bio').value
    };
    localStorage.setItem('formData', JSON.stringify(formData));
});

// Retrieve Saved Form Data
window.addEventListener('DOMContentLoaded', (event) => {
    var savedData = localStorage.getItem('formData');
    if (savedData) {
        var formData = JSON.parse(savedData);
        document.getElementById('username').value = formData.username;
        document.getElementById('email').value = formData.email;
        document.getElementById('bio').value = formData.bio;
    }
});

// Implement Server-Side Saving using Fetch API
document.getElementById('myForm').addEventListener('input',
    function () {
        var formData = new FormData(document.getElementById('myForm'));
        fetch('/saveFromData', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log('Data saved', data))
        .catch(error => console.log('Error saving data', error));
    }
);