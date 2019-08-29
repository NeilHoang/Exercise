 
 function Plus() {
    let a = +document.getElementById("Number_1").value;
    let b = +document.getElementById("Number_2").value;

    let P = a + b
  document.getElementById('Result').value=P;
     
 }
 function Subtraction() {
     let a = +document.getElementById("Numbers_1").value;
     let b = +document.getElementById("Numbers_2").value;

     let S = a - b;
     document.getElementById('Result').value=S;    
     
 }
 function Multiply() {
     let a = +document.getElementById("Numbers_1").value;
     let b = +document.getElementById("Numbers_2").value;

     let M = a * b;
     document.getElementById('Result').value=M;
 }
 function Division() {
     let a = +document.getElementById("Numbers_1").value;
     let b = +document.getElementById("Numbers_2").value;

     let D = a / b;
     document.getElementById('Result').value=D;
 }