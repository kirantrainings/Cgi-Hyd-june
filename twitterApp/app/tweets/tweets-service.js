angular.module('tweets')
    .service("tweetSvc", function ($http, $q) {

        /* this.getTweets = function () {
             return $http.get('app/tweets/tweets.json')
         };*/
        var myTweets = {
            "tweets": [{
                tweet: "abcd",
                tweetedBy: "Kiran"
    }]
        };
        this.getTweets = function () {

            var dfd = $q.defer();
            if (myTweets) {
                dfd.resolve(myTweets);
            } else {
                /* $http.get('app/tweets/tweets.json')
                     .then(function (response) {
                         dfd.resolve(response.data.tweets);
                     }).catch(function (response) {
                         dfd.reject("Error Occurred");
                     });*/
            }
            return dfd.promise;
        };
    });
