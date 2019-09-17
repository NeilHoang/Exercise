function Conan(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getConanElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.getSpeed();
        console.log('ok: ' + this.left);
    };
    this.moveLeft = function(){
        this.left -= this.getSpeed();
        console.log('ok: ' + this.left);
    };
    this.moveUp = function () {
        this.top -= this.getSpeed();
    };
    this.moveDown = function () {
        this.top += this.getSpeed();
        console.log('ok: ' + this.top);
    };
    this.setSpeed = function (speed) {
        this.speed = speed;
    };
    this.getSpeed = function () {
        return this.speed;
    };

}

let conan = new Conan('conan.jpg',0,0,150);
conan.setSpeed(10);

let maxWith = window.innerWidth - conan.size;
let maxHeight = window.innerHeight - conan.size;

function start() {
    if (conan.left < maxWith && conan.top === 0) {
        conan.moveRight();
    }else if (conan.left >= maxWith && conan.top < maxHeight) {
        conan.moveDown();
    }else if (conan.left > 0 && conan.top >= maxHeight) {
        conan.moveLeft();
    }else if (conan.left <= 0 && conan.top > 0) {
        conan.moveUp();
    }
    document.getElementById('game').innerHTML = conan.getConanElement();
    requestAnimationFrame(start);
}

start();
