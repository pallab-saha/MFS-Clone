//step- 1 adding event listener to the add money button
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    //step- 2 preventing default reloading of form element
    event.preventDefault();
    //step-3 get the amount & pin to be added
    const amountInput = document.getElementById('amountInput').value;
    const pin = document.getElementById('pin').value;
    //step-4 get the user pin from session storage
    const userPin = sessionStorage.getItem('userPin');
    //step-5 check if the amount & pin are not empty
    if (amountInput === '' || pin === '') {
        alert('Amount and pin are required');
        return;
    }
    //step-6 check if the pin is valid
    if (pin === userPin) {
        if (isNaN(amountInput)) {
            alert('Invalid amount');
            return;
        }
        if (amountInput >= 0) {
            let currentBalance = parseFloat(document.getElementById('current-balance').innerText);
            
            const newBalance = currentBalance + parseFloat(amountInput);
            console.log(currentBalance, amountInput,newBalance);
            // Update the current balance in the UI
            document.getElementById('current-balance').innerText = newBalance.toFixed(2);
        }
        else{
            alert('Invalid amount');
            return;
        }
        // Proceed with adding money
    }
    else{
        alert('Invalid pin');
        return;
    }
    
})