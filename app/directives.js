app.directive('modalContact', ['ngDialog', function (ngDialog) {
    return {
        link: function ($scope, element) {
            element.on('mousedown', function () {
                openModalContact($scope);
            });
            element.on('click', function () {
                openModalContact($scope);
            });
        }
    };

    function openModalContact($scope) {
        ngDialog.open({
            templateUrl: '/modules/contact/modalContact.html',
            className: 'ngdialog-theme-default',
            showClose: true,
            scope: $scope,
            controller: ['$scope', function ($scope) {
                $scope.resetFields = function () {
                    $scope.message.$setUntouched();
                    $scope.message.$setPristine();
                    $scope.message = {};
                    $scope.message.sender = '';
                };
                $scope.submitMessage = function () {
                    alert('sending...');
                };
                $scope.closeDialog = function () {
                    ngDialog.close();
                };
                    }]

        })
    }
}]);