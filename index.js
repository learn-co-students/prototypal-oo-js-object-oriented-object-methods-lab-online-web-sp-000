function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}


function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
}

BoardMember.prototype.veto = function () {
    return "No, I must disagree";
};

BoardMember.prototype.approve = function () {
    return "You can do that!";
};


BoardMember.prototype.doCharity = function () {
    return "I like to help people.";
};

BoardMember.prototype.releasePressStatement = function () {
    return "You will see great things from Scuber.";
};

BoardMember.prototype.sayHi = function () {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};