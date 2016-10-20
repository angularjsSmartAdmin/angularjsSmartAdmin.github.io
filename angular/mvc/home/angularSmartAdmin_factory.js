
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
            }
        };
    }]);