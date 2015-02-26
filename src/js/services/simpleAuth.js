(function () {

    var simpleAuth = function () {

        //if you exceed your api usage you will need to use basic auth. Set up an application on github and add your client_id and client_secret below like so:
        var client_id = '';
        var client_secret = '';

        var auth = '?client_id='+client_id+'&client_secret='+client_secret;

        return {
            getAuth: auth
        };
    };

    var module = angular.module("githubViewer");
    module.factory("simpleAuth", simpleAuth);

}());