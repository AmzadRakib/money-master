document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = document.getElementById('income').value;
    const food = document.getElementById('food').value;
    const rent = document.getElementById('rent').value;
    const clothes = document.getElementById('clothes').value;

    const expenseField = document.getElementById('total-expense');
    const balanceField = document.getElementById('balance');

    if (
        income < 0 ||
        income == '' ||
        food < 0 ||
        food == '' ||
        rent < 0 ||
        rent == '' ||
        clothes < 0 ||
        clothes == ''
    ) {
        alert('Input Must Be Positive Numbers');
        return;
    }


    const expense = parseInt(food) + parseInt(rent) + parseInt(clothes);
    const balance = income - expense;

    if (expense > income) {
        alert('Expense can not more than income');
        return;
    }

    else {
        expenseField.innerText = expense;
        balanceField.innerText = balance;
    }



})

document.getElementById('btn-save').addEventListener('click', function () {
    const saveParcentage = document.getElementById('save').value;
    const income = document.getElementById('income').value;

    if (saveParcentage < 0) {
        alert('Please Provide Positive Saving Value');
        return;
    }
    const savingAmountField = document.getElementById('saving-amount');


    const saveAmount = (saveParcentage / 100 * income).toFixed(2);
    savingAmountField.innerText = saveAmount;
    const balance = document.getElementById('balance').innerText;
    const remainingAmountField = document.getElementById('remaining-balance');
    const remainingAmount = parseInt(balance) - parseInt(saveAmount);
    remainingAmountField.innerText = remainingAmount;
})