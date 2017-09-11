window.modTest = angular.module('modTest', ['ngRoute', 'ngMessages'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/user', {
                controller: 'UserController as userCtrl',
                templateUrl: 'views/user.html',
                resolve: {
                    countries: ['countryService',function (countryService) {
                        return countryService.getAll();
                    }]
                }
                })
            .when('/thank-you', {
                controller: 'ThankYouController as thankYouCtrl',
                templateUrl: 'views/thank-you.html'
            })
            .otherwise({
                redirectTo: '/user'
            });
    }]);