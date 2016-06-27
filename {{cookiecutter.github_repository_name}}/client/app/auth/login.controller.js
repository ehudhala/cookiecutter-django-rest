(function() {
    'use strict';

    angular
        .module('{{cookiecutter.angular_app_name}}.auth')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($scope, $http, djangoForm, User) {
        var loginVm = this;

        loginVm.close = $scope.$close;

        loginVm.login = login;

        loginVm.credentials = {
            username: '',
            password: ''
        };

        function loginUser(response) {
            User.logIn(response.data);

            loginVm.close();
        }

        function loginFailed(response) {
            var errors = response.data;
            djangoForm.setErrors(loginVm.loginForm, errors);
        }

        function login(credentials) {
            $http.post('/api/login/', credentials).then(loginUser, loginFailed);
        }
    }

})();
