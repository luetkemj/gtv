(function(){
    var app = angular.module("githubViewer", ["ngRoute"]);

    app.config(function( $routeProvider ){
        $routeProvider
            .when("/main", {
                templateUrl: "src/templates/main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "src/templates/user.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "src/templates/repo.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo:"/main"});
    });

}());