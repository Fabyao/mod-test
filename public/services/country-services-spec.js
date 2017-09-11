describe('country service', function () {

    var countryService, $httpBackend;

    const fakeCountries = [{ name: 'France', alpha2Code: 'Fr' }];

    beforeEach(module('modTest'));

    beforeEach(inject(function (_countryService_, _$httpBackend_) {
        countryService = _countryService_;
        $httpBackend = _$httpBackend_;
    }));

    it('is instantiated', function () {
        expect(countryService).toBeDefined();
        expect(countryService.getAll).toEqual(jasmine.any(Function));
    });

    it('can get all countries', function () {
        
        $httpBackend.when('GET', 'https://restcountries.eu/rest/v1/region/Europe').respond(fakeCountries);

        countryService.getAll().then(function (countries) {            
            expect(countries).toEqual(fakeCountries);            
        });

        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
        
    });
});