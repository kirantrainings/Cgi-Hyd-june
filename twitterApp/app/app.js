//Module Declaration
angular.module("twitterApp", ["tweets", "register", "login", "tweets"]);


//Using the module
angular.module("twitterApp")
    .config(function () {
        console.log("I am the main Module");
    });
