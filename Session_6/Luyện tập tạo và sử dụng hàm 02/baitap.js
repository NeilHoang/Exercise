function check() {
    let num = parseInt(prompt("Nhập số bạn muốn: "));
    num1 = Math.pow(num,2);
    alert("Bình phương là: " + num1);
}

function circle() {
    let inputTradius;
    inputTradius = prompt("Enter the radius: ");
    let radius = parseInt(inputTradius);
    let area = radius * radius * 3.14;
    let perimeter = radius * 3.14 * 2;
    alert(" Area: " + area  + "   Perimeter: " + perimeter);
}

function factorialize() {
    let num = parseInt(prompt('enter the number:'));
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    alert(" factorialize is: " + num);
}
factorialize(num);

function isNumbers() {
    let inputNumbers = Number(prompt("Nhập vào kí tự: "));
        if (inputNumbers >= 0 && inputNumbers <= 9) {
            alert("true")
        }else {
            alert("false");
        }
}


function minNumbers() {
    let Number1 = Number(prompt("Nhập số thứ nhất: "))
    let Nubmer2 = Number(prompt("Nhập số thứ hai: "));
    let Number3 = Number(prompt("Nhập số thứ ba: "));
    let arr = [];
    arr.push(Number1, Nubmer2, Number3);
    let Min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (Min >= arr[i]) {
            Min = arr[i];
        }
    }
    alert("Số nhỏ nhất là: " + Min);
}

function integer() {
    let inputNumber = Number(prompt("Nhập số bạn cần kiểm tra: "));
    if (inputNumber > 0) {
        alert("Đây là số nguyên dương: True ");
    }else {
            if (inputNumber <= 0){
                alert("Đây không là số nguyên dương: Fasle ");
            }
        }
    }

    function swap(Number1,Number2) {
    let num;
    num = Number1;
    Number1=Number2;
    Number2=num;

    alert(Number1);
    alert(Number2);
}
function clickNum() {
    let num1 = Number(prompt("Nhập vào số thứ nhất: "));
    let num2 = Number(prompt("Nhập vào số thứ hai: "));
    swap(num1,num2);
}



