function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;

    BoardMember.veto = function() {
        return "No, I must disagree";
    };

    BoardMember.approve = function() {
        return "You can do that!";
    }

    BoardMember.doCharity = function() {
        return "I like to help people.";l
    }

    BoardMember.releasePressStatement = function() {
        return "You will see great things from Scuber."
    }

    BoardMember.sayHi = function() {
        return `Hi, my name is ${this.name}. I am from New York, and I was trained in law.`
    }    
}

 