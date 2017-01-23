(function () {
    'use strict';

    //Used to add lodash and make it available to all controllers via _
    angular.module('_', [])
        .factory('_', function () {
            return window._;
        });

    angular.module('Bucket.Common', ['_']);
})();