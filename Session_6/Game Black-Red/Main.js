let array_1 = [];
let array_2 = [];
let elementRanDom;
let score1 = 0;
let score2 = 0;

function gameSimple() {
    for (let i =1 ; i <= 52; i ++) {
        array_1.push(i);
    }
    for (let i = 0; i < array_1.length; i++) {
        elementRanDom = Math.floor(Math.random()*array_1.length);
        array_2.push(array_1[elementRanDom]);
        array_1.splice(elementRanDom, 1);
    }
    document.getElementById("user_1").innerHTML = array_1;
    document.getElementById("user_2").innerHTML = array_2;
}
function startGame() {
    for (let i = 0; i < array_1.length; i ++) {
        if (array_1[i] > array_2[i]) {
            score1++;
        }else if (array_1[i] < array_2[i]) {
            score2++;
        }
    }
    if (score1 > score2) {
       alert("A WIN");
       array_1bài=[];
       array_2=[];
    }else  if (score1 < score2) {
        alert("B WIN");
        array_1=[];
        array_2=[];
    }else {
        alert("EQUAL");
        array_1 = [];
        array_2 = [];
    }
}