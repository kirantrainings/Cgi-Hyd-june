angular.module("tweets")
    .controller("tweetCtrl", function ($scope) {


        $scope.tweets = [{
            text: "Hey i am the first tweet",
            tweetedBy: "Kiran",
            date: "06/20/2016"
        }, {
            text: "Hey i am the second tweet",
            tweetedBy: "John ",
            date: "06/21/2016"
        }, {
            text: "Hey i am the second tweet",
            tweetedBy: "John ",
            date: "06/21/2016"
        }];
    });
