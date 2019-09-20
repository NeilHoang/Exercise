let music = function (song, author, singer, src,play) {
    this.song = song;
    this.author = author;
    this.singer = singer;
    this.play = play;
    this.src = src;

    this.getSong = function () {
        return this.song;
    };
    this.setSong = function (value) {
        this.song = value;
    };
    this.getAuthor = function () {
        return this.author;
    };
    this.setAuthor = function (value) {
        this.author = value;
    };
    this.getSinger = function () {
        return this.singer;
    };
    this.setSinger = function (value) {
        this.singer = value;
    };
    this.getPlay = function () {
        return this.play;
    };
    this.setPlay = function (value) {
        this.play = value;
    };
    this.getSrc =function () {
        return this.src;
    };

    this.getInfo = function () {
        let str = `Tên bài hát: ${this.getSong()}<br>Tác giả: ${this.getAuthor()}<br>Ca sĩ là: ${this.singer}
<br>Chơi: ${this.play}`;
        return str;
    };
};
let arr = [];
let song1 = new music("Ai là người thương em", "Quân A.P", "Quân A.P");
let song2 = new music("Sóng gió", "Jack-K-ICM", "Jack-K-ICM",);


