(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('FuseContentPageApp', [
        'ui.bootstrap',
        'ngResource',
        'AlintaApp.config',
        'AlintaApp.editor.controller',
        'AlintaApp.editor.services',
        'AlintaApp.editor.directives'
    ]);
     angular.module('AlintaApp.config', []);
     angular.module('AlintaApp.editor.controller', ['AlintaApp.editor.directives','AlintaApp.editor.services']);
     angular.module('AlintaApp.editor.directives',[])
     angular.module('AlintaApp.editor.services', ['AlintaApp.config']);
})();