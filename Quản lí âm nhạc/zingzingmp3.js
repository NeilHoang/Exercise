// const RADIUS = 20;
// var cx =  100;
// var cy = 100;
// var speedX = 10;
// var speedY = 10;
// var _canvas;
// var _context;
// var _reqAnimation;
// var _angle = 0;
//
// function update(time) {
//
//     cx += speedX;
//     cy += speedY;
//     if(cx<0 || cx > _canvas.width)
//         speedX = -speedX;
//
//     if(cy<0 || cy > _canvas.height)
//         speedY = -speedY;
//
//     // draw
//     _context.clearRect(0, 0, _canvas.width, _canvas.height);
//     _context.beginPath();
//     _context.arc(cx, cy, RADIUS, 0, Math.PI*2, false);
//     _context.closePath();
//     _context.fill();
//
//     _reqAnimation(update);
// }
// window.onload = function() {
//     _canvas = document.getElementById("canvas");
//     _context = _canvas.getContext("2d");
//     _context.fillStyle = "yellow";
//     cx = _canvas.width / 2;
//     cy = _canvas.height;
//
// }

//     _reqAnimation = window.requestAnimationFrame    ||
//         window.mozRequestAnimationFrame     ||
//         window.webkitRequestAnimationFrame  ||
//         window.msRequestAnimationFrame      ||
//         window.oRequestAnimationFrame       ;
//
//     if(_reqAnimation)
//         update();
//     else
//         alert("Your browser doesn't support requestAnimationFrame.");
// }

function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 20);
    console.log(radius);
    let color = getRandomColor();
    let x = Math.random() * 1368;
    let y = Math.random() * 768;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
function mutilCircle() {
    setInterval(createCircle,100)
}
mutilCircle();
