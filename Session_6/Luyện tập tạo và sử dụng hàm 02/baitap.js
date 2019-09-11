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
    document.write(" Area: " + area + "<br>" + " Perimeter: " + perimeter);
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
