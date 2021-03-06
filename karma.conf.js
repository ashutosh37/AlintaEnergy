// Karma configuration
// Generated on Sat Nov 08 2014 19:20:47 GMT-0700 (MST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js',
            'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-mocks.js',
            'app/bower_components/jquery/dist/jquery.min.js',
            'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap.min.js',
            'app/bower_components/angular-resource/angular-resource.min.js',
            'app/bower_components/lodash/dist/lodash.min.js',
            'app/app.js',
            'app/js/generated/config.js',
            'app/app.config.js',
            'app/controllers/alinta.controller.js',
            'app/services/alinta.service.js',
            'app/services/alinta.service.spec.js'
            
            
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
          
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        concurrency: Infinity
    });
};