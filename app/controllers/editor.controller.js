(function () {
    'use strict';

    angular.module('AlintaApp.editor.controller').controller('MovieCtrl', MovieCtrl);

    MovieCtrl.$inject = ['$scope','movieapi','$compile','$http'];
    function MovieCtrl($scope, movieapi, $compile,$http) {
       
       //Init mapping
        $scope.ping = "Scope Loaded";
        $scope.getmovies = GetMovies;

        //Execution
        $scope.getmovies();
        
        
        /*Add more functions here*/
        function GetMovies(){
            var params = {
                  //add all parameter here
            };
            $scope.myPromise = movieapi.getMovies(params, function (response) {
                
                $scope.movies = response;
                console.log(response);
                var compiledeHTML = $compile("<resource-grid></resource-grid>")($scope);
                $("#moviegrid").append(compiledeHTML);
                
             }).$promise;
        }

    }
})();
            