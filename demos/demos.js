// Define our app
(function () {
  
  'use strict';

  angular
    .module('myApp', [
      'myApp.controllers'
    ]);

})();


// Submodule for controllers
(function () {

  'use strict';

  angular
    .module('myApp.controllers', [])
    .controller('MainController', MainController);


  function MainController () {

    /// view model ///
    
    var vm = this;

    // Currently-selected datetime and related functions
    vm.selectedDatetime = null;
    vm.setDatetimeToday = setDatetimeToday;
    vm.clearDatetime = clearDatetime;

    // Date formats and related functions
    vm.formats = [
      'dd-MMMM-yyyy',
      'yyyy/MM/dd',
      'dd.MM.yyyy',
      'shortDate'
    ];
    vm.selectedFormat = vm.formats[0];

    /// functions ///

    function setDatetimeToday () {
      vm.selectedDatetime = new Date();
    }

    function clearDatetime () {
      vm.selectedDatetime = null;
    }

  }

})();
