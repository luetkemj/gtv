(function () {

    var simpleAuth = function () {

        //if you exceed your api usage you will need to use basic auth. Set up an application on github and add your client_id and client_secret below like so:
        //var auth = '?client_id=YOURCLIENTID&client_secret=YOURCLIENTSECRET';
        var auth = '';

        var getAuth = function(auth) {
            return auth;
        }

        return {
            getAuth: getAuth
        };
    };

    var module = angular.module("githubViewer");
    module.factory("simpleAuth", simpleAuth);

}());