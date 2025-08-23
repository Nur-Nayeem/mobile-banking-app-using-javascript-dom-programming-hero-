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
    addMoneySection.classList.remove('displayShowSection');
    cashOutSection.classList.remove('displayShowSection');
    transferMoneySection.classList.remove('displayShowSection');
    getBonusSection.classList.remove('displayShowSection');
    payNowSection.classList.remove('displayShowSection');

    addMoneyBtnBox.classList.remove('active-btn');
    cashOutBtnBox.classList.remove('active-btn');
    sendMoneyBtnBox.classList.remove('active-btn');
    getBonusBtnBox.classList.remove('active-btn');
    payBillBtnBox.classList.remove('active-btn');
}

addMoneyBtnBox.addEventListener("click", () => {
    const isActive = addMoneySection.classList.contains('displayShowSection');
    if (isActive) {
        resetAll();
        return
    }
    // Hide others
    transectionHistory.classList.add('displayHiddenSection');
    cashOutSection.classList.remove('displayShowSection');
    transferMoneySection.classList.remove('displayShowSection');
    getBonusSection.classList.remove('displayShowSection');
    payNowSection.classList.remove('displayShowSection');
    cashOutBtnBox.classList.remove('active-btn');
    sendMoneyBtnBox.classList.remove('active-btn');
    getBonusBtnBox.classList.remove('active-btn');
    payBillBtnBox.classList.remove('active-btn');
    transectionHistoryBox.classList.remove('active-btn');

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
    addMoneySection.classList.remove('displayShowSection');
    transferMoneySection.classList.remove('displayShowSection');
    getBonusSection.classList.remove('displayShowSection');
    payNowSection.classList.remove('displayShowSection');

    addMoneyBtnBox.classList.remove('active-btn');
    sendMoneyBtnBox.classList.remove('active-btn');
    getBonusBtnBox.classList.remove('active-btn');
    payBillBtnBox.classList.remove('active-btn');
    transectionHistoryBox.classList.remove('active-btn');


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
    addMoneySection.classList.remove('displayShowSection');
    getBonusSection.classList.remove('displayShowSection');
    cashOutSection.classList.remove('displayShowSection');
    payNowSection.classList.remove('displayShowSection');
    addMoneyBtnBox.classList.remove('active-btn');
    cashOutBtnBox.classList.remove('active-btn');
    getBonusBtnBox.classList.remove('active-btn');
    payBillBtnBox.classList.remove('active-btn');
    transectionHistoryBox.classList.remove('active-btn');


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
    addMoneySection.classList.remove('displayShowSection');
    transferMoneySection.classList.remove('displayShowSection');
    cashOutSection.classList.remove('displayShowSection');
    payNowSection.classList.remove('displayShowSection');
    addMoneyBtnBox.classList.remove('active-btn');
    sendMoneyBtnBox.classList.remove('active-btn');
    cashOutBtnBox.classList.remove('active-btn');
    payBillBtnBox.classList.remove('active-btn');
    transectionHistoryBox.classList.remove('active-btn');



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
    addMoneySection.classList.remove('displayShowSection');
    transferMoneySection.classList.remove('displayShowSection');
    cashOutSection.classList.remove('displayShowSection');
    getBonusSection.classList.remove('displayShowSection');
    addMoneyBtnBox.classList.remove('active-btn');
    sendMoneyBtnBox.classList.remove('active-btn');
    cashOutBtnBox.classList.remove('active-btn');
    getBonusBtnBox.classList.remove('active-btn');
    transectionHistoryBox.classList.remove('active-btn');


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



const addMoneyBtn = document.getElementById('add-money-btn');

if (addMoneyBtn) {
    addMoneyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const availableMoney = document.getElementById('money');
        const addAmountInput = document.getElementById('add-amount-input');
        let totalMoney = parseInt(availableMoney.innerText, 10);
        if (addAmountInput) {
            totalMoney += parseInt(addAmountInput.value, 10)
            availableMoney.innerText = totalMoney.toString()
            console.log(totalMoney);
        } else {
            console.error('Input field with ID "add-amount-input" not found.');
        }
    });
} else {
    console.error('Button with ID "add-money-btn" not found.');
}


