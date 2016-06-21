angular.module('twitterApp')
    .controller("mainCtrl", function ($scope, tabService) {
        var registerUrl = 'app/register/register.tpl.html';
        var loginUrl = 'app/login/login.tpl.html';
        var tweetUrl = 'app/tweets/tweet.tpl.html';


        $scope.loadTemplate = function (type) {
            /* if (type == 'login') {
                 $scope.templateUrl = loginUrl;
             } else if (type == 'register') {
                 $scope.templateUrl = registerUrl;
             } else if (type == 'tweets') {
                 $scope.templateUrl = tweetUrl;
             }*/
            $scope.templateUrl = type.template;
        };
        $scope.headerUrl = "app/common/navbar.tpl.html";

        tabService.getTabs().success(function (response) {
                console.log(response);
                $scope.tabs = response.tabs;
            })
            .error(function (response) {
                console.log(response);
            })

    });
