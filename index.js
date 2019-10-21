function BoardMember(name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
}

const bmPrototype = BoardMember.prototype

bmPrototype.veto = function() {return "No, I must disagree"}
bmPrototype.approve = function() {return "You can do that!"}
bmPrototype.doCharity = function() {return "I like to help people."}
bmPrototype.releasePressStatement = function() {return "You will see great things from Scuber."}
bmPrototype.sayHi = function() {return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`}