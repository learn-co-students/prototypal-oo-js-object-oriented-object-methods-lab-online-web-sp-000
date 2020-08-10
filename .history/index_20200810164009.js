class BoardMember{
   constructor(name,homeState,training ) {
       this.name = name
       this.homeState = homeState
       this.training = training
   }

   BoardMember.veto = function(){
       return 'No, I must disagree'
   }
    BoardMember.approve = function(){
       return 'You can do that'
   }

   BoardMember.approve = function(){
       return 'I like to help people'
   }
   
   BoardMember.releasePressStatement = function(){
       return 'you will see great things from Scuber.'
   }
   BoardMember.prototype.sayHi = function(){
       return  `Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`
   }

}