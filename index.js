// code below

    function BoardMember(name, homeState, training){
        this.name = name;
        this.homeState = homeState;
        this.training = training;
    }

    BoardMember.prototype.veto() = function(){
        return "I must agree";
    }

    BoardMember.prototype.approve() = function(){
        return "You can do that!";
    }

    BoardMember.prototype.doCharity() = function(){

    }


