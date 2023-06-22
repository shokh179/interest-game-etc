document.getElementById('submit').onclick = compare;

function compare() {
  let num1 = document.getElementById('num1').value;
  num1 = parseFloat(num1);

  let num2 = document.getElementById('num2').value;
  num2 = parseFloat(num2);


  let comparison;
  
  if(num1 > num2) {
    comparison = '>';
  } else if(num1 < num2) {
    comparison = '<';
  } else {
    comparison = '=';
  }
  
  document.getElementById('comparison').innerHTML = comparison;
  
}




















// let num1 = document.getElementById("num1")
// let num2 = document.getElementById("num2")



// num1.addEventListener("keydown", (e) => {
//     console.log(e.key);
// })

// num2.addEventListener("keydown",  (e2) => {
//     console.log(e2.key);
// }) 


// if (num1 == num2) {
//     console.log("ijhbhj");
// }


// function myFunction() {
//     let num1 = document.getElementById("num1");
//     let num2 = document.getElementById("num2");
//     let val1 = num1.addEventListener("keydown");
//     let val2 = num2.addEventListener("keydown");
    
//     if (val1 == val2) {

//     }
//   }

//   myFunction()



// function greaterNum(){
//     var value1;
//     var value2;
//     value1 = document.getElementById("First_num").value;
//     value2 = document.getElementById("last_num").value;
//     if (value1 > value2){
//         alert(value1 - value2);
//         document.body.style.background = "orange";
//     }

// }


