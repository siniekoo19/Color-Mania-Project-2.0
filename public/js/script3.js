let confirmPass = document.getElementById('confirm');

confirmPass.addEventListener('input', function(e) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm').value;
    var message = document.getElementById('err-msg');
    
    if (password !== confirmPassword) {
        e.preventDefault(); // Prevent form submission
        message.style.display = 'block';
        confirmPass.style.border = '2px solid red';
    } else {
        message.style.display = 'none';
    }
});