(function () {
    'use strict';
    angular.module('AlintaApp.editor.directives')
    .directive('resourceGrid' ,['$http' , '$compile' ,  function($http , $compile ){
         return {
             restrict: 'AE',
            replace: true,
            templateUrl: 'directives/resourceGrid.html',
            link: function ($scope, $elem, $attrs) {
                console.log($scope.movies);
                var y = _.map($scope.movies, function (x) {
                    var temp = _.map(x.roles, function (z) {
                        return _.defaults({"movie" :x.name , "name": z.name, "actor": z.actor });
                    });
                    return temp;
                });
                y  = _.flatten(y);
                let sorted = _.sortBy(y,['actor','movie']);
                $scope.groupedData = _.groupBy(sorted,function(item){ return item.actor})
            }
         };
    }]);
})();
