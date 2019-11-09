function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

const methods = {
  veto: () => "No, I must disagree",
  approve: () => "You can do that!",
  doCharity: () => "I like to help people.",
  releasePressStatement: () => "You will see great things from Scuber.",
  sayHi: function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}

Object.assign(BoardMember.prototype, methods);
