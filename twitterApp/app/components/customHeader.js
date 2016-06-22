angular.module("twitterApp")
    .directive("customHeader", function () {
        return {
            template: "<span ng-transclude></span><h1>Hello Guys</h1>",
            transclude: true
        }
    });

angular.module("twitterApp")
    .directive("tweetBox", function () {
        return {
            templateUrl: "app/components/tweetbox.tpl.html",
            restrict: "A",
            controller: function ($scope) {
                $scope.addTweet = function () {
                    var myTweet = {
                        tweetText: $scope.tweetText

                    };
                    $scope.tweets.push(myTweet);
                    console.log($scope.tweets);
                };
            }
        }
    });

angular.module("twitterApp")
    .directive("customDatePicker", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.datepicker();
            }
        }
    });

angular.module("twitterApp")
    .directive("customName", function () {
        return {
            restrict: "A",
            template: "<h1>{{name}}</h1>",
            link: function (scope, element, attrs) {
                setTimeout(function () {
                    scope.name = "Kiran";
                    scope.$apply();
                }, 5000);

                scope.$watch('name', function (newVal, oldVal) {
                    console.log(newVal);
                    console.log(oldVal);
                })

            }
        }
    });
