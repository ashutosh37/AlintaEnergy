(function () {
    'use strict';

    angular.module('AlintaApp.config')
    .constant('_', window._)
      // use in views, ng-repeat="x in _.range(3)"
      .run(['$rootScope' , function ($rootScope) {
          $rootScope._ = window._;
      }])
    //.constant("API_ENDPOINT", "")
    .config([
                '$httpProvider',
                function ($httpProvider) {
                    function transformRequest(data) {
                        if (angular.isUndefined(data)) {
                            return data;
                        }

                        angular.forEach(data, function (value, key) {
                            if (key.startsWith('$') || key === '_id') { // Backend service fails if we have these params in the request
                                delete data[key];
                                console.log(key);
                            }
                            if (value !== null && value !== undefined) {
                                if (value["$cgBusyFulfilled"]) {
                                    delete value["$cgBusyFulfilled"];
                                }
                                if (value["_id"]) {
                                    delete value["_id"];
                                }
                            }
                        });
                        return data;
                    }

                    $httpProvider.interceptors.push(['$q', '$location', function ($q, $location) {
                            return {
                                // This is the responseError interceptor
                                responseError: function (rejection) {
                                    if (rejection.status === 401 || rejection.status === 403) {
                                        $location.path('/unauthorized');
                                    }
                                    /* If not a 401, do nothing with this error.
                                     * This is necessary to make a `responseError`
                                     * interceptor a no-op. */
                                    return $q.reject(rejection);
                                }
                            };
                        }]);
                    $httpProvider.defaults.transformRequest.unshift(transformRequest);
                    //Enable cross domain calls
                    //$httpProvider.defaults.useXDomain = true;

                    //Remove the header used to identify ajax call  that would prevent CORS from working
                    //delete $httpProvider.defaults.headers.common['X-Requested-With'];

                 }
            ])
    .config([
                '$compileProvider',
                function ($compileProvider) {
                    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel|ftp|mailto|intent|javascript|chrome-extension):|data:application\//);
                }
            ]);
})();