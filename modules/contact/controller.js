app.controller('Contact', ['$scope', function ($scope) {

        $scope.name = "Contact me";
}])
    .directive('helpContact', function () {
        return {
            template: 'Name: {{customer.name}} Address: {{customer.address}}'
        };
    });