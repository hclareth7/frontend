
var controllerModule = angular.module('AppControllers');

controllerModule.controller('mainController', ['$scope',
        function ($scope) {
           
            $scope.mivariable = [
                {'name' : 'aura'},
                {'name' : 'marco'}
            ]
            
}]);