
myApp.factory('angularSmartAdminFactory', ['$http', '$q', function ($http, $q) {
        return{
            getData: function () {
                return $http.get("database/users.json")
                        .then(
                                function (response) {
                                    return response.data;
                                },
                                function (errResponse) {
                                    return $q.reject(errResponse);
                                }
                        );
            },
            countries: function () {
                return $http.get("database/countries.json")
                        .then(
                                function (response) {
                                    return response.data;
                                },
                                function (errResponse) {
                                    return $q.reject(errResponse);
                                }
                        );
            },
            states: function () {
                return $http.get("database/states.json")
                        .then(
                                function (response) {
                                    return response.data;
                                },
                                function (errResponse) {
                                    return $q.reject(errResponse);
                                }
                        );
            },
            cities: function () {
                return $http.get("database/cities.json")
                        .then(
                                function (response) {
                                    return response.data;
                                },
                                function (errResponse) {
                                    return $q.reject(errResponse);
                                }
                        );
            }
        };
    }]);