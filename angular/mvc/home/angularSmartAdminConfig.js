myApp.config(["$routeProvider", function ($routeProvider) {
        $routeProvider
                .when("/", {
                    templateUrl: "views/home/",
                    controller: "angularSmartAdminController as ctrl"
                })
                .when("/signin", {
                    templateUrl: "views/signin/",
                    controller: "angularSmartAdminController as ctrl"
                })
                .when("/signup", {
                    templateUrl: "views/signup/",
                    controller: "angularSmartAdminController as ctrl"
                })
                .when("/forgotpassword", {
                    templateUrl: "views/forgotpassword/",
                    controller: "angularSmartAdminController as ctrl"
                })
                .when("/emailsent", {
                    templateUrl: "views/emailsent/",
                    controller: "angularSmartAdminController as ctrl"
                })
                .when("/installationguide", {
                    templateUrl: "views/installationguide/",
                    controller: "angularSmartAdminController as ctrl"
                })
                .when("/documentation", {
                    templateUrl: "views/documentation/",
                    controller: "angularSmartAdminController as ctrl"
                })
                .when("/aboutme", {
                    templateUrl: "views/aboutme/",
                    controller: "angularSmartAdminController as ctrl"
                })
                .when("/contactme", {
                    templateUrl: "views/contactme/",
                    controller: "angularSmartAdminController as ctrl"
                })
                .when("/blogs", {
                    templateUrl: "views/blogs/",
                    controller: "angularSmartAdminController as ctrl"
                })
                .otherwise({
                    templateUrl: "views/error/"
                });
    }]);