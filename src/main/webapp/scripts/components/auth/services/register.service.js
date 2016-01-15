'use strict';

angular.module('pticolApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


