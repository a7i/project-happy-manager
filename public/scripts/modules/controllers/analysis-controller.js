define(['angular',
    'modules/module'
], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('AnalysisCtrl', ['$scope', function ($scope) {
        console.log($scope);
    }]);
});
