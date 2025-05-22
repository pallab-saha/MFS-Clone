
document.getElementById('show-cash-out').addEventListener('click', function (event) {
    //hiding add money form

    //document.getElementById('add-money-form').style.display = 'none';
    document.getElementById('add-money-form').classList.add('hidden');
    //showing cash out form

    //document.getElementById('cash-out-form').style.display = 'block';
    document.getElementById('cash-out-form').classList.remove('hidden');
})

document.getElementById('show-add-money').addEventListener('click', function (event) {
    //hiding cashout form

    //document.getElementById('cash-out-form').style.display = 'none';
    document.getElementById('cash-out-form').classList.add('hidden');
    //showing add money form

    //document.getElementById('add-money-form').style.display = 'block';
    document.getElementById('cash-out-form').classList.remove('hidden');
})