function getElementInnertextByid(id){
    const step_1 = document.getElementById(id).innerText
    const step_2= parseFloat(step_1)
    return step_2
}

function getInputValueByid(id){
    const step_1 = document.getElementById(id).value
    const step_2= parseFloat(step_1)
    return step_2
}



function getHiddenByid (id){
    const step_1 = document.getElementById("add-money-form").classList.add("hidden")
    const step_2 = document.getElementById("cash-out-form").classList.add("hidden")
    const step_3 = document.getElementById("transaction-section").classList.add("hidden")
    const step_4 = document.getElementById(id).classList.remove("hidden")
    return step_4;
    
}