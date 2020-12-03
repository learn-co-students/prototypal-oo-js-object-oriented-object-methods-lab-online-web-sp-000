// In index.js, write a constructor function called BoardMember that sets the following properties: name, homeState, and training.
function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}
  // Add following methods to the class:
  // veto — returns No, I must disagree
  BoardMember.prototype.veto = function(){
    return `No, I must disagree`
  }

// approve — returns You can do that!
BoardMember.prototype.approve = function(){
  return `You can do that!`
}

// doCharity — returns I like to help people.
BoardMember.prototype.doCharity = function(){
  return `I like to help people.`
}

//Note: remember that this keyword is referring to the object it belongs to. In this case BoardMember.
// releasePressStatement — returns You will see great things from Scuber.
BoardMember.prototype.releasePressStatement = function(){
  return `You will see great things from Scuber.`
}

// sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.
BoardMember.prototype.sayHi = function(){
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}
