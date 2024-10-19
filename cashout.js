document.getElementById("cash-out-btn").addEventListener("click",function(event){
    event.preventDefault()


    const amount = document.getElementById("amount-2").value.trim()
    if(amount.length == 0){
        alert("plaese Input amount and Pin")
        return
       }

    const money =  document.getElementById("amount-2").value
    if(isNaN(money)) {
        alert("Invalid input")
        return
    }

    const pin = document.getElementById("pin-number-2").value.trim()
    if(pin.length == 0){
        alert("plaese Input pin Number")
        return
       }
   const pinNumber = getInputValueByid("pin-number-2");
   const amount2 = getInputValueByid("amount-2");
   const balance = getElementInnertextByid("account-balance");

 
  
    if(pinNumber === 123){
    
    if (amount2 > balance) {
        alert('You have not enough money')
        return
    }

    const newBalance1 =  balance - amount2
    document.getElementById("account-balance").innerText = newBalance1;

    const p = document.createElement("P")
    p.innerText = `Cash Out-${amount2},New Balance -${newBalance1}`
    document.getElementById('transaction-section').appendChild(p)

   }
   
   else{
    alert('Sorry pin number is wrong')
   }
})