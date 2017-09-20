define(['angular',
    'modules/module',
    'jquery'
], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('ManageCtrl', ['$scope', '$document', 'ManageService', function ($scope, $document, ManageService) {
        ManageService.getQuestions().then(function(data) {
            $scope.tableData = data;
        });
        
        $document.ready(function() {
            document.getElementById('question-table').addEventListener('px-row-click', function(e) {
                var clickedRow = e.detail.row;
                console.log(clickedRow);
            });
        });
    }]);

    //TODO: move this out to a separate JS file and use RequireJS to load it
    window.CustomTableFilters = {
        status : function(searchString, cellValue) {
            var matches = false;
            var element = document.getElementById($(cellValue).get(0).id);
            if (!element) {
                return false;
            } else if('ACTIVE'.startsWith(searchString.toUpperCase())) {
                matches = element.checked;
            } else if('INACTIVE'.startsWith(searchString.toUpperCase())) {
                matches = !element.checked;
            }
            return matches;
        }
    };
});
