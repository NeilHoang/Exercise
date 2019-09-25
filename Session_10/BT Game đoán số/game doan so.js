function createRandom() {
     let arrRandom = [];
     for (let i = 0 ;i < 2; i ++) {
         let randomNumber = Math.ceil(Math.random() * 2);
         arrRandom.push(randomNumber);
     }
     return arrRandom
}

function Play() {
    let inputNumber = parseInt(prompt("Nhập vào số bạn đoán: "));
    let inputMoney = parseInt(prompt("Nhập số tiền bạn muốn cược: "));
    for (let i = 0; i <= createRandom().length; i++) {
            console.log(createRandom()[i]);
            console.log('So nhap vao: ' + typeof(inputNumber));
            console.log('So random: ' + typeof(createRandom()[i]));
            if (inputNumber === createRandom()[i]) {
                alert("Chúc mừng bạn đã ĐÚNG !  Và nhận đuợc số tiền " + (inputMoney * 90) + " VNĐ");
                break;
            } else {
                alert("Đen rồi !! Chơi tiếp nhé");
            }
            break;
        }
}

Play();