const calculate = () => {
  let amount = document.getElementById("amount").value;
  let tipPercent = document.getElementById("tipPercent").value;
  let split = document.getElementById("split").value;

  //validate//
  // if(totalBill==="" || tipPercent== 0|| split==0){
  //     alert('please enter values')
  //     return;
  // }

  //tip ammount
  let tipAmount = amount * (tipPercent / 100);
  //total billed
  let totalBilled = tipAmount + Number(amount);
  //total per person
  let totalPerP = totalBilled / split;
  totalPerP = totalPerP.toFixed(2);
  console.log(totalPerP);
  document.getElementById("tipAmount").innerHTML = tipAmount;
  document.getElementById("totalBilled").innerHTML = totalBilled;
  document.getElementById("totalPerP").innerHTML = totalPerP;
};

// const calculate=()=>{
//     let amount=document.getElementById('amount').value
//     let tip = document.getElementById("tipPercent").value;

//     //tip amount
//     let tip = amount*(tip/100)
//     alert(tip)
//     //total billed
//     let totalBilled = tip + amount;
//     alert(totalBilled)
    
// }
