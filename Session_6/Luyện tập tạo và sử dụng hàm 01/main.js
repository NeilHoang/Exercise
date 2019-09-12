function showMessage() {
    alert("Xin Chao");

}
function argument(x) {
    for (i = 0; i <= 10; i++) {
        x++;
        alert(x);
    }
}

function compera() {
    let number_1 = Number(prompt("Nhập số thứ nhất nào: "));
    let number_2 = Number(prompt("Nhập số thứ hai nào: "));
        if (number_1 > number_2 ) {
            alert("Yeahhh Oh right");
        }else {
            let tutal = number_1 + number_2;
            alert(" Tổng của hai số là: " + tutal);
        }
}

function addNumbers(result) {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    alert (result);
    return result;
}
function findStar() {
    let inputString = prompt("Nhập vào ngôi sao của bạn 😜 😜  ");
    let arr_1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let arr_2 = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Majo", "Leo"];
    for (let i = 0; i < arr_1.length; i++) {
        if (arr_1[i] === inputString) {
            alert("ngôi sao: " + arr_1[i] + "    thuộc sao: " + arr_2[i]);
        }
    }



}
