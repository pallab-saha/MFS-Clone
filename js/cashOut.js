//step- 1 adding event listener to the add money button
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    //step- 2 preventing default reloading of form element
    event.preventDefault();
    //step-3 get the amount & cashOutPin to be added
    const cashOutInput = document.getElementById('cashOutInput').value;
    const cashOutPin = document.getElementById('cashOutPin').value;
    //step-4 get the user cashOutPin from session storage
    const usercashOutPin = sessionStorage.getItem('userPin');
    //step-5 check if the amount & cashOutPin are not empty
    if (cashOutInput === '' || cashOutPin === '') {
        alert('Amount and cashOutPin are required');
        return;
    }
    //step-6 check if the cashOutPin is valid
    if (cashOutPin === usercashOutPin) {
        if (isNaN(cashOutInput)) {
            alert('Invalid amount');
            return;
        }
        if (cashOutInput >= 0) {
            let currentBalance = parseFloat(document.getElementById('current-balance').innerText);
            
            const newBalance = currentBalance - parseFloat(cashOutInput);
            console.log(currentBalance, cashOutInput,newBalance);
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
        alert('Invalid cashOutPin');
        return;
    }
    
})