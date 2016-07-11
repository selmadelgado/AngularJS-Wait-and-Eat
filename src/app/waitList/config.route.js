(function() {
  'use strict';
  
  angular
  .module('app.waitList')
  .config(configFunction)
    
  configFunction.$inject = ['$routeProvider'];
  
  function configFunction($routeProvider) {
      $routeProvider.when('/waitList', {
          templateUrl: 'app/waitList/waitList.html',
          
      });
  }
    
})();