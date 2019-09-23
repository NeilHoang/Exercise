let Music = function (name) {
    this.name = name;
    this.music = [];
    this.setName = function (value) {
        this.name = value;
    };
    this.getName = function () {
        return this.name;
    };
    this.link = function () {
        return this.link;
    }
};
let Info = function (stt, name, singer, author, linkMusic,) {
    this.stt = stt;
    this.name = name;
    this.singer = singer;
    this.author = author;
    this.linkMusic = linkMusic;

    this.getName = function () {
        return this.name;
    };
    this.link = function () {
        return this.link;
    };
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
    };
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
    this.getInformation = function () {
        return this.stt + this.name + this.singer + this.author + this.linkMusic;
    };
};
let info1 = new Info("1", "Ai Là Nguời Thuơng Em", "Quân A.P", "Quân A.P", "Ai-La-Nguoi-Thuong-Em-Quan-A-P.mp3");
let info2 = new Info("2", "Bạc Phận", "Jack-K-ICM", "Jack-K-ICM","Bac-Phan-Jack-K-ICM.mp3");
let info3 = new Info("3", "Buớc Qua Đời Nhau", "Lê Bảo Bình", "Lê Bảo Bình","Buoc-Qua-Doi-Nhau-Le-Bao-Binh.mp3");
let info4 = new Info("4", "Có Tất Cả Nhưng Thiếu Anh", "ERIK", "ERIK","Co-Tat-Ca-Nhung-Thieu-Anh-ERIK.mp3");
let info5 = new Info("5", "Lời Yêu Ngây Dại", "Kha", "Kha","Loi-Yeu-Ngay-Dai-Kha.mp3");
let info6 = new Info("6", "Sóng Gió", "Jack-K-ICM", "Jack-K-ICM","Song-Gio-Jack-K-ICM.mp3");
let info7 = new Info("7", "Thay tôi yêu cô ấy", "Thanh Hưng", "Thanh Hưng","Thay-Toi-Yeu-Co-Ay-Thanh-Hung.mp3");
let info8 = new Info("8", "Thê Tử", "Minh Vương-Hương Ly", "Minh Vương-Hương Ly","The-Tu-Remix-Minh-Vuong-M4U-Huong-Ly.mp3");
let info9 = new Info("9", "Yêu Ai để Không Phải Khóc", "Huơng Ly", "Huơng Ly","Yeu-Ai-De-Khong-Phai-Khoc-Huong-Ly.mp3");
let info10 = new Info("10", "Tuớng Quân", "Nhật Phong", "Nhật Phong","Tuong-Quan-Remix-Nhat-Phong-DinhLong.mp3");
// let info11 = new Info("11","Cát Bụi Cuộc Đời","Truờng Sơn","KO RÕ","Cat-Bui-Cuoc-Doi-Truong-Son.mp3");
// let info12 = new Info("12","Con Đuờng Xưa Em Đi","Lưu Anh Loan","Lê Sang","Con-Duong-Xua-Em-Di-Luu-Anh-Loan-Le-Sang.mp3");
// let info13 = new Info("13","Duyên Phận","Như Quỳnh","Ko Rõ","Duyen-Phan-Nhu-Quynh.mp3");
let library = new Music();
library.music.push(info1, info2, info3, info4, info5, info6, info7, info8, info9, info10);
let selecMusic = document.getElementById('input');

function seach() {
    for (let i = 0; i < library.music.length; i++) {
        if ((selecMusic.value === library.music[i].stt) || ((selecMusic.value === library.music[i].name))) {
            document.getElementById('demo1').innerHTML = library.music[i].getStt();
            document.getElementById('demo2').innerHTML = library.music[i].getName();
            document.getElementById('demo3').innerHTML = `<audio controls muted loop style="height: 30px">                                                            
                <source src="music/${library.music[i].getLinkMusic()}" type="audio/mp3"</audio>`;
            document.getElementById('demo4').innerHTML = library.music[i].getAuthor();
            document.getElementById('demo5').innerHTML = library.music[i].getSinger();
            break;
        } else {
            document.getElementById('demo1').innerHTML = "khong co";
            document.getElementById('demo2').innerHTML = "khong co";
            document.getElementById('demo3').innerHTML = "khong co";
            document.getElementById('demo4').innerHTML = "khong co";
            document.getElementById('demo5').innerHTML = "khong co";

        }
    }
}
