const allFormSections = document.getElementsByClassName('all-form-section')
const allButtons = document.getElementsByClassName('button-boxs')

const transectionHistory = document.getElementById("transection-history");
const addMoneySection = document.getElementById("add-money-section");
const cashOutSection = document.getElementById("cash-out-section");
const transferMoneySection = document.getElementById("transfer-money-section");
const getBonusSection = document.getElementById("get-bonus-section");
const payNowSection = document.getElementById("pay-now-section");


const addMoneyBtnBox = document.getElementById("add-money-btn-box");
const cashOutBtnBox = document.getElementById("cash-out-btn-box");
const sendMoneyBtnBox = document.getElementById("send-money-btn-box");
const getBonusBtnBox = document.getElementById("get-bonus-btn-box");
const payBillBtnBox = document.getElementById("pay-bill-btn-box");
const transectionHistoryBox = document.getElementById("transection-history-box");

function resetAll() {
    transectionHistory.classList.remove('displayHiddenSection');

    for (let section of allFormSections) {
        section.classList.remove('displayShowSection');
    }
    for (let button of allButtons) {
        button.classList.remove('active-btn');
    }

}

addMoneyBtnBox.addEventListener("click", () => {
    const isActive = addMoneySection.classList.contains('displayShowSection');
    if (isActive) {
        resetAll();
        return
    }
    // Hide others
    transectionHistory.classList.add('displayHiddenSection');

    for (let section of allFormSections) {
        section.classList.remove('displayShowSection');
    }
    for (let button of allButtons) {
        button.classList.remove('active-btn');
    }
    // Show Add Money
    addMoneySection.classList.add('displayShowSection');
    addMoneyBtnBox.classList.add('active-btn');
});

cashOutBtnBox.addEventListener("click", () => {
    const isActive = cashOutSection.classList.contains('displayShowSection');
    if (isActive) {
        resetAll();
        return
    }
    // Hide others
    transectionHistory.classList.add('displayHiddenSection');

    for (let section of allFormSections) {
        section.classList.remove('displayShowSection');
    }
    for (let button of allButtons) {
        button.classList.remove('active-btn');
    }

    // Show Cash Out
    cashOutSection.classList.add('displayShowSection');
    cashOutBtnBox.classList.add('active-btn');
});

sendMoneyBtnBox.addEventListener("click", () => {
    const isActive = transferMoneySection.classList.contains('displayShowSection');
    if (isActive) {
        resetAll();
        return
    }
    // Hide others
    transectionHistory.classList.add('displayHiddenSection');

    for (let section of allFormSections) {
        section.classList.remove('displayShowSection');
    }
    for (let button of allButtons) {
        button.classList.remove('active-btn');
    }

    // Show Cash Out
    transferMoneySection.classList.add('displayShowSection');
    sendMoneyBtnBox.classList.add('active-btn');
});

getBonusBtnBox.addEventListener("click", () => {
    const isActive = getBonusSection.classList.contains('displayShowSection');
    if (isActive) {
        resetAll();
        return
    }
    // Hide others
    transectionHistory.classList.add('displayHiddenSection');

    for (let section of allFormSections) {
        section.classList.remove('displayShowSection');
    }
    for (let button of allButtons) {
        button.classList.remove('active-btn');
    }

    // Show Cash Out
    getBonusSection.classList.add('displayShowSection');
    getBonusBtnBox.classList.add('active-btn');
});
payBillBtnBox.addEventListener("click", () => {
    const isActive = payNowSection.classList.contains('displayShowSection');
    if (isActive) {
        resetAll();
        return
    }
    // Hide others
    transectionHistory.classList.add('displayHiddenSection');

    for (let section of allFormSections) {
        section.classList.remove('displayShowSection');
    }
    for (let button of allButtons) {
        button.classList.remove('active-btn');
    }

    // Show Cash Out
    payNowSection.classList.add('displayShowSection');
    payBillBtnBox.classList.add('active-btn');
});

transectionHistoryBox.addEventListener("click", () => {
    const isActive = transectionHistoryBox.classList.contains('active-btn');
    const historyType = document.getElementById('history-type')
    if (isActive) {
        historyType.innerText = "Latest Payment"
        transectionHistoryBox.classList.remove('active-btn');

    }
    else {
        transectionHistoryBox.classList.add('active-btn');
        historyType.innerText = "Transection History"
        resetAll();
    }


});

function getInputValue(id) {
    return document.getElementById(id).value;
}

function getMoney() {
    return parseInt(document.getElementById('money').innerText);
}

function setMoney(totalMoney) {
    document.getElementById('money').innerText = totalMoney.toString();
}
function addMoney(id) {
    let availableMoney = getMoney();
    availableMoney += parseInt(document.getElementById(id).value)
    document.getElementById(id).value = ''
    if (availableMoney)
        setMoney(availableMoney)
    else
        console.log('something wrong');
}
function reduceMoney(id) {
    let availableMoney = getMoney();
    availableMoney -= parseInt(document.getElementById(id).value)
    document.getElementById(id).value = ''
    if (availableMoney)
        setMoney(availableMoney)
    else
        console.log('something wrong');
}


function resetInputFields(tag) {
    let inputs = document.querySelectorAll(tag);
    for (let input of inputs) {
        if (input.tagName === 'SELECT') {
            input.selectedIndex = 0; // reset to first option
        } else {
            input.value = '';
        }
    }
}



//add money:
document.getElementById('add-money-btn').addEventListener('click', (e) => {
    e.preventDefault();
    addMoney('add-amount-input')
    resetInputFields('input')

});

//cash money:
document.getElementById('cash-out-btn').addEventListener('click', (e) => {
    e.preventDefault();
    reduceMoney('cash-out-amount')
    resetInputFields('input')
});


//transfer money
document.getElementById('transfer-money-btn').addEventListener('click', (e) => {
    e.preventDefault();
    reduceMoney('transfer-money-input')
    resetInputFields('input')
});

//pay bill:
document.getElementById('pay-bill-btn').addEventListener('click', (e) => {
    e.preventDefault();
    reduceMoney('pay-bill-amount')
    resetInputFields('input')
});


//get bonus:
document.getElementById('get-bonus-btn').addEventListener('click', (e) => {
    e.preventDefault();
    let code = getInputValue('get-bonus-input')
    console.log(code);

    if (code === '1234') {
        let total = getMoney() + 100;
        setMoney(total);
        console.log('success');
        document.getElementById('get-bonus-btn').setAttribute("disabled", "true");
    }
    else {
        console.log('wrong');

    }
    resetInputFields('input')
});




