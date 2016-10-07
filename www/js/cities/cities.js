app.config(function ($stateProvider, $urlRouterProvider	) {
    $stateProvider.state('cities', {
    	cache: false,
        url: '/destination/:cities',
        templateUrl: 'js/cities/cities.html',
        controller: "CitiesCtrl"
    });
    $urlRouterProvider.otherwise('/');
});

app.controller('CitiesCtrl', function ($scope, $state, $ionicSlideBoxDelegate, $stateParams, CitiesFactory) {

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };

    $scope.cities = CitiesFactory[$stateParams.cities];

    $scope.back = function(){$state.go('destination')};

    // $scope.goToHotels = function(cities){$state.go('hotels', {hotels: hotels})}

});

app.factory('CitiesFactory', function(){
	var CitiesFactory = {};

    CitiesFactory.Beaches = {'Fernando de Noronha 1': {id: 'fernandodenoronha1', description: 'Great beach', country: 'Brazil'}, 'Fernando de Noronha 2': {id: 'fernandodenoronha2', description: 'Perfect place to relax', country: 'Brazil'}};

    CitiesFactory.Romantic = {'Paris 1': {id: 'paris1', description: 'Beautiful place', country: 'France'}, 'Paris 2': {id: 'paris2', description: 'Many good restaurants around', country: 'France'}};

    CitiesFactory.Paradise = {'Cancun 1': {id: 'cancun1', description: 'Swim with the dolphins', country: 'Mexico'}, 'Cancun 2': {id: 'cancun2', description: 'Amazing sights', country: 'Mexico'}};

    return CitiesFactory;
});

app.directive('city', function() {
  return {
    restrict: 'E',
    scope: {
        cityInfo: '=info'
    },
    templateUrl: 'js/cities/city.directive.html'
  };
});