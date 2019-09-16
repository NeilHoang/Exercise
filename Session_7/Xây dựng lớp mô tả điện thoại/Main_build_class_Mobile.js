let Mobile = function (name) {
    this.name = name;
    this.battery = 99;
    this.inbox = [];
    this.outbox = [];
    this.massage = " ";
    this.write.message = function (value) {
        this.message = value;
    }
    this.sendMessage = function (mobile) {
        this.outbox.push(this.message);
        mobile.reveiceMessage
    }
}