console.log('Login script loaded');

//step-1 set evenet handler
document.getElementById('login-btn').addEventListener('click', function (event) {
    //step- 2 preventing default reloading of form element
    event.preventDefault();
    //step-3 get the phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin').value;
    //step-4 storing pin in session storage
    sessionStorage.setItem('userPin', pin);
    //step-5 check if the phone number and pin are not empty
    if (phoneNumber === '' || pin === '') {
        alert('Phone number and pin are required');
        return;
    }
    //step-6 check if the phone number and pin are valid
    if (phoneNumber.length !== 11 || pin.length !== 4) {
        alert('Phone number must be 11 digits and pin must be 4 digits');
        return;
    }
    else{
        window.location.href = "/home.html";
    }
    

})