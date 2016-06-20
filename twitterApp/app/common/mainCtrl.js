angular.module('twitterApp')
    .controller("mainCtrl", function ($scope) {
        var registerUrl = 'app/register/register.tpl.html';
        var loginUrl = 'app/login/login.tpl.html';
        var tweetUrl = 'app/tweets/tweet.tpl.html';

        $scope.loadTemplate = function (type) {
            if (type == 'login') {
                $scope.templateUrl = loginUrl;
            } else if (type == 'register') {
                $scope.templateUrl = registerUrl;
            } else if (type == 'tweets') {
                $scope.templateUrl = tweetUrl;
            }
        }

    });
