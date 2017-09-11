modTest.factory('userService', ['$http', function ($http) {

    const service = {};
    service.lastSavedUser = undefined;
    service.save = function (user) {
        return $http.post('api/users', user).then(function (savedUser) {

            service.lastSavedUser = savedUser.data;

            return service.lastSavedUser;
        });
    };

    return service;

}]);