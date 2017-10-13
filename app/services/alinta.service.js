(function () {
    'use strict';
    angular.module('AlintaApp.editor.services',[])
            .factory('movieapi', ['$resource', 'API_ENDPOINT', function ($resource, API_ENDPOINT) { 
                    var resourceUrl = ''; 
                    var paramDefaults = {}; 

                    var actions = {
                        getMovies: {
                            method: 'GET',
                            isArray:true,
                            withCredentials: true,
                            //url : API_ENDPOINT + '/Movies'
                            url : 'data.json'
                        }
                        //more actions go here
                    }
                    return $resource(resourceUrl, paramDefaults, actions);
            }])
                //more factories go here
})();