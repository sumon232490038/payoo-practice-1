document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault()


    const amount = document.getElementById("amount-1").value.trim()
    if(amount.length == 0){
        alert("plaese Input amount and pin")
        return
       }
    const money =  document.getElementById("amount-1").value
    if(isNaN(money)) {
        alert("Invalid input")
        return
    }
  
    const pin = document.getElementById("pin-number-1").value.trim()
    if(pin.length == 0){
        alert("plaese Input pin Number")
        return
       }
   const pinNumber = getInputValueByid("pin-number-1");
   const amount1 = getInputValueByid("amount-1");
   const balance = getElementInnertextByid("account-balance");
   
   if(pinNumber === 123){
    const newBalance1 = amount1 + balance;
    document.getElementById("account-balance").innerText = newBalance1;

    const p = document.createElement("P")
    p.innerText = `Added-${amount1},New Balance -${newBalance1}`
    document.getElementById('transaction-section').appendChild(p)

   }
   else {
    alert('Sorry pin number is wrong')
   }
})