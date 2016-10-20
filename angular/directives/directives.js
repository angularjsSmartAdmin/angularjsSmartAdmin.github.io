angular.module('directives', [])
        .directive('initEach', function () {
            return {
                restrict: 'A',
                link: function ($scope) {
                    $(function () {
                        $.material.init();
                    });
                    $scope.alertMessages = function (errorCode) {
                        switch (errorCode) {
                            case '0' :
                                $.notify({
                                    message: 'Password is not correct!'
                                }, {
                                    type: 'danger',
                                    delay: 3000,
                                    allow_dismiss: false
                                });
                                break;
                            case '1' :
                                $.notify({
                                    message: 'This username or email is not linked with any account!'
                                }, {
                                    type: 'danger',
                                    delay: 3000,
                                    allow_dismiss: false
                                });
                                break;
                            case '2' :
                                $.notify({
                                    message: 'This email is not linked with any account!'
                                }, {
                                    type: 'danger',
                                    delay: 3000,
                                    allow_dismiss: false
                                });
                                break;
                            default:
                                $.notify({
                                    message: 'Exception occurred!'
                                }, {
                                    type: 'info',
                                    delay: 3000
                                });
                                break;
                        }
                    };
                }
            };
        })
        .directive('smartValidateForm', function () {
            return {
                restrict: 'A',
                link: function (scope, form, attributes) {
                    var validateOptions = {
                        highlight: function (element) {
                            $(element).parent().addClass('has-error');
                        },
                        unhighlight: function (element) {
                            $(element).parent().removeClass('has-error');
                        },
                        errorPlacement: function (error, element) {
                            return true;
                        }
                    };
                    form.validate(validateOptions);
                }
            };
        });