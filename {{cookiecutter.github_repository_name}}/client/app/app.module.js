(function() {
    'use strict';

    angular
        .module('{{cookiecutter.angular_app_name}}', [
            // Angular libraries.
            'ngAnimate', 'ngResource', 'ngSanitize',
            // External libraries.
            'ui.bootstrap', 'ui.router', 'ui.select', 'djng.forms',
            // Basic app blocks.
            'blocks.router',
            // Services & Components.
            '{{cookiecutter.angular_app_name}}.services', '{{cookiecutter.angular_app_name}}.components',
            // Feature modules.
            '{{cookiecutter.angular_app_name}}.chat', '{{cookiecutter.angular_app_name}}.search', '{{cookiecutter.angular_app_name}}.auth',
        ])
        .run(setGlobalState);

    /* @ngInject */
    function setGlobalState($rootScope, $state, $stateParams) {
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its descendants is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

})();
