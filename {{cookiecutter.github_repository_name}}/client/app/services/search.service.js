(function() {
    'use strict';

    angular
        .module('{{cookiecutter.angular_app_name}}.services')
        .factory('searchService', searchService);

    /* @ngInject */
    function searchService($resource) {
        return $resource('/api/search', {}, {
            query: {method: 'POST', isArray: true}
        });
    }

})();
