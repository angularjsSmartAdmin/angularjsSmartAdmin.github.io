angular.module('directives', [])
        .directive('initEach', function () {
            return {
                restrict: 'A',
                link: function ($scope) {
                    $(function () {
                        $.material.init();
                    });
                    $(".datepicker").datepicker();
                    $scope.alertMessages = function (errorCode, message) {
                        // 0 == warning
                        // 1 == danger
                        // 2 == success
                        // 3 == info
                        switch (errorCode) {
                            case '0' :
                                $.notify({
                                    message: message
                                }, {
                                    type: 'warning',
                                    delay: 3000,
                                    allow_dismiss: false,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
                                });
                                break;
                            case '1' :
                                $.notify({
                                    message: message
                                }, {
                                    type: 'danger',
                                    delay: 3000,
                                    allow_dismiss: false,
                                    animate: {
                                        enter: 'animated bounceIn',
                                        exit: 'animated bounceOut'
                                    }
                                });
                                break;
                            case '2' :
                                $.notify({
                                    message: message
                                }, {
                                    type: 'success',
                                    delay: 3000,
                                    allow_dismiss: false,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
                                });
                                break;
                            case '2' :
                                $.notify({
                                    message: message
                                }, {
                                    type: 'info',
                                    delay: 3000,
                                    allow_dismiss: false,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
                                });
                                break;
                            default:
                                $.notify({
                                    message: 'Exception occurred!'
                                }, {
                                    type: 'info',
                                    delay: 3000,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
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