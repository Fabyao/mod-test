modTest.controller('UserController', ['countries', 'userService', '$location',
    function (countries, userService, $location) {

        var vm = this;

        vm.countries = countries;

        vm.submitForm = function (form, userDetails) {
            // if the user presses the enter key, this will cause
            // the form to be submitted.
            if (form.$invalid) {
                return;
            }

            const userToSave = {
                name: userDetails.name,
                age: userDetails.age,
                sex: userDetails.sex,
                country: userDetails.selectedCountry.alpha2Code
            }

            userService.save(userToSave).then(function (user) {
                $location.path('/thank-you');
            });
        }

    }]);