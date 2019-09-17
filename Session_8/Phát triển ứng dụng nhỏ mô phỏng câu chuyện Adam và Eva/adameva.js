let Apple = function (weight) {
    this.weight = weight;

    this.getWeight = function (value) {
        this.Weight = value;
    }
}
let Human = function (name,gerder,weight,said) {
    this.name = name;
    this.gerder = gerder;
    this.weight = weight;
    this.said = said;
    };

    this.getName = function () {
    return this.name;
    };
    this.setName = function (value) {
    this.name = value;
    };

    this.getGerder = function () {
        return this.gerder;
    };
    this.setGerder = function (value) {
        this.gerder = value;
    };

    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (value) {
        this.weight = value;
    };

    this.getSaid = function () {
        return this.said;
    };
    this.setSaid = function (value) {
        this.said = value;
    };

    let human = new Human("Adam" , "Male" , 70 , "I am Adam");
    let apple = new Apple(10);





