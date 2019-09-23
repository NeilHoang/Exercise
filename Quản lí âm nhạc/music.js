let Music = function (name) {
    this.name = name;
    this.music=[];
    this.setName = function (value) {
        this.name = value;
    };
    this.getName = function () {
        return this.name;
    };
    this.link=function () {
        return this.link;
    }
};
let Info = function (stt,name, singer, author, linkMusic) {
    this.stt = stt;
    this.name = name;
    this.singer = singer;
    this.author = author;
    this.linkMusic = linkMusic;
    this.getName = function () {
        return this.name;
    };
    this.link=function () {
        return this.link;
    }
    this.getStt = function () {
        return this.stt;
    };
    this.getSinger = function () {
        return this.singer;
    };
    this.getAuthor = function () {
        return this.author;
    };
    this.getLinkMusic = function () {
        return this.linkMusic;
    }
    this.setStt = function () {
        return this.stt;
    };
    this.setSinger = function () {
        return this.singer;
    };
    this.setAuthor = function () {
        return this.author;
    };
    this.setLinkMusic = function () {
        return this.linkMusic;
    };
    this.getInformation=function()  {
        return this.stt + this.name + this.singer + this.author + this.linkMusic;
    };
};
let info1 = new Info(1,"Anh Muốn Nghe Giọng Em Nói","Nguyên","Nguyên",src="Anh-Muon-Nghe-Giong-Em-Nguyen-LYM-eth.mp3");
let info2 = new Info(2,"Anh Muốn Biết Sự Thật","DC Tâm","Dương Nhất Linh",src="Anh-Muon-Biet-Su-That-Duong-Nhat-Linh.mp3");
let info3 = new Info(3,"Ánh Dương","Nguyên","Nguyên,eth",src="Anh-Duong-Nguyen-eth.mp3");
let info4 = new Info(4,"Chờ Anh Em Nhé","Thiên Dũng","Khánh Phong",src="Cho-Anh-Em-Nhe-Khanh-Phong.mp3");
let info5 = new Info(5,"Vì Một Người Ra Đi","Nhạc Hoa Lời Việt","Hoàng Minh Thắng",src="Vi-Mot-Nguoi-Ra-Di-Hoang-Minh-Thang.mp3");
let info6 = new Info(6,"Có Chàng Trai Viết Lên Cây","Phan Mạnh Quỳnh","Phan Mạnh Quỳnh",src="Co-Chang-Trai-Viet-Len-Cay-Phan-Manh-Quynh.mp3");
let info7 = new Info(7,"Đường Một Chiều","Nam Trương","Huỳnh Tú",src="Duong-Mot-Chieu-Huynh-Tu-Magazine.mp3");
let info8 = new Info(8,"Ai Là Người Thương Em","Thanh Hưng","Quân A.P",src="Ai-La-Nguoi-Thuong-Em-Quan-A-P.mp3");
let info9 = new Info(9,"Như Gió Với Mây","Nhạc Ngoại Lời Việt","Đình Đại Vũ",src="Nhu-Gio-Voi-May-Dinh-Dai-Vu.mp3");
let info10 = new Info(10,"Em Phải Quên Anh","Vương Anh Tú","Châu Khải Phong",src="Em-Phai-Quen-Anh-Chau-Khai-Phong.mp3");
let library = new Music();
library.music.push(info1,info2,info3,info4,info5,info6,info7,info8,info9,info10);
let selecMusic = document.getElementById('input');
function seach() {
    for (let i = 0; i < library.music.length;i++){
        if (selecMusic.value === library.music[i].name){
            document.getElementById('demo1').innerHTML = library.music[i].getStt();
            document.getElementById('demo2').innerHTML = library.music[i].getSinger();
            document.getElementById('demo3').innerHTML = library.music[i].getLinkMusic();
            document.getElementById('demo4').innerHTML = library.music[i].getAuthor();
            document.getElementById('demo5').innerHTML = library.music[i].getName();
            break;
        } else {
            document.getElementById('demo1').innerHTML = "khong co";
        }
    }
}