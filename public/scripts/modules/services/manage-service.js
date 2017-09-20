define(['angular',
    'modules/module',
    'json!modules/data/manage.json'
], function(angular, module, jsonData) {
    'use strict';

    module.service('ManageService', ['$q', function($q) {
        return {
            getQuestions: function() {
                var deferred = $q.defer();
                deferred.resolve(jsonData.grid);
                return deferred.promise;
            }
        };
    }]);

    return module;
});
