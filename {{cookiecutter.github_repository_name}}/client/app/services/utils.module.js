(function() {
    'use strict';

    angular
        .module('{{cookiecutter.angular_app_name}}.services')
        .factory('Utils', Utils);

    /* This service holds util funxtions. */
    function Utils() {
        function util() {
            return 'util placeholder';
        }

        return {
            util: util,
        };
    }

})();
