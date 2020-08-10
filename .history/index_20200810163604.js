class BoardMember{
   constructor(name,homeState,training ) {
       this.name = name
       this.homeState = homeState
       this.training = training
   }

   BoardMember.prototype.veto(){
       return 'No, I must disagree'
   }
   function approve(){
       return 'You can do that'
   }

   function approve(){
       return 'I like to help people'
   }
   
   function releasePressStatement(){
       return 'you will see great things from Scuber.'
   }
   function sayHi(){
       return  'Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.'
   }

}