function switchVisible() {
    if (document.querySelector('.input-form')) {

        if (document.querySelector('.input-form').style.display == 'none') {
            document.querySelector('.input-form').style.display = 'block';
            document.querySelector('.main-form').style.display = 'none';
        }
        else {
            document.querySelector('.input-form').style.display = 'none';
            document.querySelector('.main-form').style.display = 'block';
        }
    }
}

function showPasswordModal() {
    document.getElementById('passwordModal').style.display = 'flex';
}

function closePasswordModal() {
    document.getElementById('passwordModal').style.display = 'none';
}

function submitPassword() {
    // You can add logic to check the password here
    // For simplicity, let's just close the modal for now
    closePasswordModal();
}