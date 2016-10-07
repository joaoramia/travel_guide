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

    // $scope.beaches = {name: 'Beaches', click: function(){$state.go('beaches')}};

    // $scope.romantic = {name: 'Romantic', click: function(){$state.go('romantic')}};

    // $scope.paradise = {name: 'Paradise', click: function(){$state.go('paradise')}};

    $scope.back = function(){$state.go('login')};

});

app.factory('DestinationFactory', function(){
	var DestinationFactory = {};

    DestinationFactory.beaches = {name: 'Beaches', click: function(){$state.go('beaches')}};

    DestinationFactory.romantic = {name: 'Romantic', click: function(){$state.go('romantic')}};

    DestinationFactory.paradise = {name: 'Paradise', click: function(){$state.go('paradise')}};

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