app.controller('People', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.name = $routeParams.name === 'bamba' ? 'Vater' : $routeParams.name;
}])