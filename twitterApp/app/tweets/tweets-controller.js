angular.module("tweets")
    .controller("tweetCtrl", function ($scope, tweetSvc) {


        tweetSvc.getTweets().then(function (response) {
            console.log(response);
        }).catch(function (response) {
            console.log(response);
        }).finally(function (response) {
            console.log("I am executing Finally!!!!!");
        });
    });
