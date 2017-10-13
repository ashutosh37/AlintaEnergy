## Alinta Interview app

AngularJS and Bootstrap based SPA framework , can be extended to use routing as ui-router is already included.

### Install instructions

Pre-Requisites: Install Gulp and Karma globally for commandline interface , follow the below commands

>npm install gulp-cli -g
>npm install -g karma-cli

Then run the below mentioned commands

* npm Install 

* npm start 

This will load the browser with the movie listing

***There is a cors problem on the server side and needs to be resolved as it is rejecting the origin of the request : localhost:8080***

>Failed to load https://alintacodingtest.azurewebsites.net/api/Movies: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:8080' is therefore not allowed access.


#### All the nmp scripts used are listed below

>"postinstall: "gulp loadConfig && bower install --config.directory=${npm_package_config_bower_dir}

>"prestart: "npm install"

>"start: "http-server app -a 0.0.0.0 -p 8080 -c-1 --cors -o && gulp"

>"pretest: "npm install"

>"test: "node node_modules/karma/bin/karma start karma.conf.js"

>"test-single-run: "node node_modules/karma/bin/karma start karma.conf.js  --single-run"

>"preupdate-webdriver: "npm install"
