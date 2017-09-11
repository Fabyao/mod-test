modTest.controller('ThankYouController', ['userService', function(userService){

    var vm = this;

    vm.applicantName = userService.lastSavedUser.name;

}]);