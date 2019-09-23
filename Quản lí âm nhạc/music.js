let Music = function (stt,song,author,singer) {
    this.stt = stt;
    this.song = song;
    this.author = author;
    this.singer = singer;

    this.getStt = function () {
        return this.stt;
    };
    this.setStt = function (value) {
        this.stt = value;
    };
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
};
