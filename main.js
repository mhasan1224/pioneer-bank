//login area event handler.
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click" , function(){
    const heroSection = document.getElementById("hero-section");
    heroSection.style.display = "none";
    const transectionSection = document.getElementById("transection-section");
    transectionSection.style.display = "block";
})
//transection area event handler.
const depositBtn = document.getElementById("addAmount");
depositBtn.addEventListener("click" , function(){
    //console.log("drp");
    const depositAmount = document.getElementById("amountDeposit").value;
    const depositNumber = parseFloat(amountDeposit);
})