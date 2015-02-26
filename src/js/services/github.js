(function () {

    var github = function ($http, simpleAuth) {

        //if you exceed your api usage you will need to use basic auth. Set up an application on github and add your client_id and client_secret below like so:
        //var auth = '?client_id=YOURCLIENTID&client_secret=YOURCLIENTSECRET';
        var auth = simpleAuth.getAuth;

        console.log(auth);

        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username + auth).then(function (response) {
                return response.data;
            });
        };

        var getFollowers = function (user) {
            return $http.get(user.followers_url + auth).then(function(response){
                return response.data;
            });
        };

        var getRepos = function(user){
            return $http.get(user.repos_url + auth).then(function(response){
                return response.data;
            });
        };

        var getRepo = function (username, reponame) {
            return $http.get("https://api.github.com/repos/" + username + "/" + reponame + auth).then(function (response) {
                return response.data;
            });
        };

        var getContributors = function (repo) {
            return $http.get(repo.contributors_url + auth).then(function (response) {
                return response.data;
            });
        };

        return {
            getUser: getUser,
            getFollowers: getFollowers,
            getRepos: getRepos,
            getRepo: getRepo,
            getContributors: getContributors
        };
    };

    var module = angular.module("githubViewer");
    module.factory("github", github);

}());