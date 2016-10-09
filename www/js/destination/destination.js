app.config(function ($stateProvider, $urlRouterProvider	) {
    $stateProvider.state('destination', {
    	cache: false,
        url: '/destination',
        templateUrl: 'js/destination/destination.html',
        controller: "DestinationCtrl"
    });
    $urlRouterProvider.otherwise('/');
});

app.controller('DestinationCtrl', function ($scope, $state, $ionicSlideBoxDelegate, DestinationFactory) {

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };

    $scope.beaches = DestinationFactory.beaches;

    $scope.romantic = DestinationFactory.romantic;

    $scope.paradise = DestinationFactory.paradise;

    $scope.back = function(){$state.go('login')};

    $scope.goToCities = function(cities){$state.go('cities', {cities: cities})};

});

app.factory('DestinationFactory', function(){
	var DestinationFactory = {};

    DestinationFactory.beaches = {name: 'Beaches'};

    DestinationFactory.romantic = {name: 'Romantic'};

    DestinationFactory.paradise = {name: 'Paradise'};

    return DestinationFactory;
});

app.directive('destination', function() {
  return {
    restrict: 'E',
    scope: {
        destinationInfo: '=info'
    },
    templateUrl: 'js/destination/destination.directive.html'
  };
});