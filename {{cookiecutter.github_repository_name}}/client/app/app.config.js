(function() {
    'use strict';

    angular
        .module('{{cookiecutter.angular_app_name}}')
        .config(config);

    /* @ngInject */
    function config($compileProvider, $httpProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(http|https):/);

        // Play nice with Django.
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }

})();
