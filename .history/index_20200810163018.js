class BoardMember{
   constructor(name,homeState,training ) {
       this.name = name
       this.homeState = homeState
       this.training = training
   }
   function veto(){
       return 'No, I must disagree'
   }
}