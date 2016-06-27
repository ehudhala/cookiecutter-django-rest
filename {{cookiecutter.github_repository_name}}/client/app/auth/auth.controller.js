(function() {
    'use strict';

    angular
        .module('{{cookiecutter.angular_app_name}}.auth')
        .controller('AuthController', AuthController);

    /* @ngInject */
    function AuthController(User, $uibModal) {
        var authVm = this;

        authVm.user = User.details;
        authVm.isLoggedIn = User.isLoggedIn;
        authVm.logOut = User.logOut;

        authVm.openLoginModal = openLoginModal;

        function openLoginModal() {
            $uibModal.open({
                templateUrl: '/media/build/auth/login-modal.html',
                controller: 'LoginController as loginVm'
            });
        }

    }

})();
