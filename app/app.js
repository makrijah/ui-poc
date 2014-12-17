var app = angular.module('app', [
    'ngRoute',
    'ngDialog'
]);

app.config(['$routeProvider',
           function ($routeProvider) {
        $routeProvider
            .when('/calendar', {
                templateUrl: 'modules/calendar/calendar.html',
                controller: 'Calendar'
            })
            .when('/people/:name', {
                templateUrl: 'modules/people/people.html',
                controller: 'People'
            })
            .when('/contact', {
                templateUrl: 'modules/contact/contact.html',
                controller: 'Contact'
            })
            .otherwise({
                redirectTo: '/'
            });
           }
           ]);

app.controller('TopNavigationController', ['$scope', function ($scope) {
    $scope.callModal = function () {
        alert('Hello');
    }
}]);