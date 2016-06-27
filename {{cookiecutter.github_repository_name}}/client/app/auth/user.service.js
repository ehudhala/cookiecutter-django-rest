(function() {
    'use strict';

    angular
        .module('{{cookiecutter.angular_app_name}}.auth')
        .factory('User', User);

    function User($http) {
        var details = {};

        $http.get('/api/active-user/').then(function(response) {logIn(response.data)});

        function logIn(user) {
            _.extend(details, user);
        }

        function logOut() {
            $http.get('/api/logout/');
            _.each(details, function(val, key) {
                delete details[key];
            });
        }

        function isLoggedIn() {
            return !_.isEmpty(details);
        }

        return {
            details: details,
            isLoggedIn: isLoggedIn,
            logIn: logIn,
            logOut: logOut,
        };
    }

})();
