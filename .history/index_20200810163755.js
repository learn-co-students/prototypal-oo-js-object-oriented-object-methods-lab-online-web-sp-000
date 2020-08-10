class BoardMember{
   constructor(name,homeState,training ) {
       this.name = name
       this.homeState = homeState
       this.training = training
   }

   BoardMember.prototype.veto = function(){
       return 'No, I must disagree'
   }
    BoardMember.prototype.approve = function(){
       return 'You can do that'
   }

   BoardMember.prototype.approve = function(){
       return 'I like to help people'
   }
   
   BoardMember.prototype.releasePressStatement = function(){
       return 'you will see great things from Scuber.'
   }
   BoardMember.prototype.sayHi = function(){
       return  'Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.'
   }

}