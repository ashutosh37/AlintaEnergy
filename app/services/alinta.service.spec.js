
describe('MovieController', function () {

    describe('Get movies', function () {
        var scope;
        var $q;
        var deferred;

        beforeEach(module('FuseContentPageApp'));

        beforeEach(angular.mock.inject(function ($rootScope, _$q_, $controller, movieapi,$compile,$http){
            //create an empty scope
            scope = $rootScope.$new();

            $q = _$q_;

            deferred = _$q_.defer();

            spyOn(movieapi, 'getMovies').and.returnValue(deferred.promise);

            $controller('MovieCtrl', {
                $scope: scope,
                movieapi: movieapi,
                $compile:$compile,
                $http : $http
            });

        }));
        
        it('External service returning should have data', function () {

            // Setup the data we wish to return for the .then function in the controller
            deferred.resolve();  
            // We have to call apply for this to work
            scope.$apply();
            scope.getmovies();
            expect(scope.movies).toBeUndefined();
        });
        
        

       

    });
});