(function() {
   'use strict';
 
   angular
     .module('app.waitList')
     .controller('WaitListController', WaitListController);
 
   WaitListController.$inject = ['textMessageService', 'partyService', 'user'];
    
   function WaitListController(textMessageService, partyService, user) {
       var vm = this;
       
       //Log user to the console
       console.log(user);
             
       vm.newParty = new partyService.Party();
       vm.parties = partyService.parties
       vm.addParty = addParty;
       vm.removeParty = removeParty;
       vm.sendTextMessage = sendTextMessage;
       vm.toggleDone = toggleDone;
       
       function addParty() {
           vm.parties.$add(vm.newParty);
           vm.newParty = new partyService.Party();
       }
       
       function removeParty(party){
           vm.parties.$remove(party)
       }
       
       function sendTextMessage(party){
           textMessageService.sendTextMessage(party, vm.parties);
       }
       
       function toggleDone(party){
           vm.parties.$save(party);
       }
   }
  
})(); 