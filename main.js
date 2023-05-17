//login area event handler.
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click" , function(){
    const heroSection = document.getElementById("heroSection");
    heroSection.style.display = "none";
    const transectionSection = document.getElementById("transectionSection");
    transectionSection.style.display = "block";
})
//deposite button event handler.
const depositBtn = document.getElementById("addAmount");
depositBtn.addEventListener("click" , function(){
    const amountDeposit = document.getElementById("amountDeposit").value;
    const depositNumber = parseFloat(amountDeposit);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = amountDepositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;
    
    updatespantext("currentDeposit", depositNumber);
    updatespantext("currentBalance", depositNumber);

    document.getElementById("amountDeposit").value = "";

})

// withdraw button event handeler.

const withdrawBtn = document.getElementById("addwithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
    document.getElementById("withdrawAmount").value = "";

    // const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    // document.getElementById("currentWithdraw").innerText = totalWithdraw;

    updatespantext("currentWithdraw", withdrawNumber);
    updatespantext("currentBalance", withdrawNumber);
})

function updatespantext(id, withdrawNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = withdrawNumber + currentNumber;
    const totalBalance = currentNumber - withdrawNumber;
    document.getElementById(id).innerText = total;
    document.getElementById(id).innerText = totalBalance;
}

function updatespantext(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}