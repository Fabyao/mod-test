modTest.factory('countryService', ['$http', function ($http) {

    const service = {};

    service.getAll = function () {

       return $http.get('https://restcountries.eu/rest/v1/region/Europe').then(function (countries) {           
            return countries.data;
        })
    };

    return service;

}]);