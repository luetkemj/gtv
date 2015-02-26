// Code goes here
(function () {

    var app = angular.module("githubViewer");

    var UserController = function ($scope, github, $routeParams, $log) {

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onReposComplete, onError);
            github.getGists($routeParams.username).then(onGistsComplete, onError);
            github.getFollowers($scope.user).then(onFollowersComplete, onError);
            github.getFollowing($routeParams.username).then(onFollowingComplete, onError);

            
            $log.info('onUserComplete');
            $log.log(data);

        };

        var onFollowersComplete = function (data) {
            $scope.followers = data;

            $log.info('onFollowersComplete');
            $log.log(data);
        }

        var onFollowingComplete = function (data) {
            $scope.following = data;

            $log.info('onFollowingComplete');
            $log.log(data);
        }

        var onGistsComplete = function(data){
            $scope.gists = data;

            $log.info('onGistsComplete');
            $log.log(data);
        }

        var onReposComplete = function (data) {
            $scope.repos = data;

            $log.info('onReposComplete');
            $log.log(data);
        };

        var onError = function (response) {
            $scope.error = 'Could not fetch data because "' + response.data.message + '"';
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onUserComplete, onError);
    };

    app.controller("UserController", ["$scope", "github", "$routeParams", "$log", UserController]);

}());