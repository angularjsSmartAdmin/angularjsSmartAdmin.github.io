myApp.controller("angularSmartAdminController", ["$scope", "angularSmartAdminFactory", function ($scope, angularSmartAdminFactory) {
        var self = this;

        //userlist fetch
        self.userlist = [];
        self.onloaddata = function () {
            angularSmartAdminFactory.getData()
                    .then(
                            function (data) {
                                for (var i = 0; i < data.length; i++) {
                                    data[i].password = atob(data[i].password);
                                    var chkId = i + 1;
                                    if (chkId === data.length) {
                                        self.userlist = data;
                                    }
                                }
                            },
                            function (errResponse) {
                                alert(errResponse.data);
                            }
                    );
        };
        self.onloaddata();

        //location data
        self.location = {
            "countries": [],
            "states": [],
            "cities": [],
            "countryState": [],
            "stateCity": []
        };
        self.locationdata = function () {
            angularSmartAdminFactory.countries()
                    .then(
                            function (data) {
                                self.location.countries = data;
                            },
                            function (errResponse) {
                                alert(errResponse.data);
                            }
                    );
            angularSmartAdminFactory.states()
                    .then(
                            function (data) {
                                self.location.states = data;
                            },
                            function (errResponse) {
                                alert(errResponse.data);
                            }
                    );
            angularSmartAdminFactory.cities()
                    .then(
                            function (data) {
                                self.location.cities = data;
                            },
                            function (errResponse) {
                                alert(errResponse.data);
                            }
                    );
        };
        self.locationdata();

        //sign in form
        self.signindata = {
            "usernameoremail": "",
            "password": "",
            "rememberme": false
        };
        self.signinsubmit = function () {
            var isvalidate = $("#signinform").valid();
            if (isvalidate) {
                $("#signinsubmit").html("<i class='fa fa-spinner fa-spin'></i>&nbsp;&nbsp;checking").addClass("disabled");
                setTimeout(function () {
                    angularSmartAdminFactory.getData()
                            .then(
                                    function (data) {
                                        var exists = false;
                                        for (var i = 0; i < data.length; i++) {
                                            if (self.signindata.usernameoremail === data[i].username || self.signindata.usernameoremail === data[i].emailid) {
                                                exists = true;
                                                if (self.signindata.password === atob(data[i].password)) {
                                                    $("#signinsubmit").html("<i class='fa fa-spinner fa-spin'></i>&nbsp;&nbsp;signing in");
                                                    setTimeout(function () {
                                                        $("#signinsubmit").html("Submit").removeClass("disabled");
                                                        window.location = "dashboard.html";
                                                    }, 2000);
                                                } else {
                                                    $("#signinsubmit").html("Submit").removeClass("disabled");
                                                    $("#password").focus();
                                                    $scope.alertMessages("1", "Password is not correct!");
                                                }
                                                break;
                                            }
                                            var chk = i + 1;
                                            if (chk === data.length) {
                                                if (exists === false) {
                                                    $("#signinsubmit").html("Submit").removeClass("disabled");
                                                    $("#usernameoremail").focus();
                                                    $scope.alertMessages("1", "This username or email is not linked with any account!");
                                                }
                                            }
                                        }
                                    },
                                    function (errResponse) {
                                        alert(errResponse.data);
                                    }
                            );
                }, 2000);
            }
        };

        //forgot password form
        self.forgotpassworddata = {
            "email": ""
        };
        self.forgotpasswordsubmit = function () {
            var isvalidate = $("#forgotpasswordform").valid();
            if (isvalidate) {
                $("#forgotpasswordsubmit").html("<i class='fa fa-spinner fa-spin'></i>&nbsp;&nbsp;checking").addClass("disabled");
                ;
                setTimeout(function () {
                    angularSmartAdminFactory.getData()
                            .then(
                                    function (data) {
                                        var exists = false;
                                        for (var i = 0; i < data.length; i++) {
                                            if (self.forgotpassworddata.email === data[i].emailid) {
                                                exists = true;
                                                $("#forgotpasswordsubmit").html("<i class='fa fa-spinner fa-spin'></i>&nbsp;&nbsp;sending mail");
                                                setTimeout(function () {
                                                    $("#forgotpasswordsubmit").html("Submit").removeClass("disabled");
                                                    window.location = "#/emailsent";
                                                }, 3000);
                                                break;
                                            }
                                            var chk = i + 1;
                                            if (chk === data.length) {
                                                if (exists === false) {
                                                    $("#forgotpasswordsubmit").html("Submit").removeClass("disabled");
                                                    $("#email").focus();
                                                    $scope.alertMessages("1", "This email is not linked with any account!");
                                                }
                                            }
                                        }
                                    },
                                    function (errResponse) {
                                        alert(errResponse.data);
                                    }
                            );
                }, 2000);
            }
        };

        //sign up form
        self.signupdata = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "contactno": "",
            "country": "",
            "state": "",
            "city": "",
            "address": "",
            "postalcode": "",
            "post": "",
            "sex": "",
            "birthdate": "",
            "username": "",
            "password": ""
        };
        self.signupsubmit = function () {
            var isvalidate = $("#signupform").valid();
            if (isvalidate) {
                console.log(self.signupdata);
            }
        };
    }]);