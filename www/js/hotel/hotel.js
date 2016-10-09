app.config(function ($stateProvider, $urlRouterProvider	) {
    $stateProvider.state('hotel', {
    	cache: false,
        url: '/destination/:city/:hotel',
        templateUrl: 'js/hotel/hotel.html',
        controller: "HotelCtrl"
    });
    $urlRouterProvider.otherwise('/');
});

app.controller('HotelCtrl', function ($scope, $state, $ionicSlideBoxDelegate, $stateParams, $ionicHistory, HotelFactory) {

    $scope.hotelInfo = HotelFactory.getHotelInfo();

    $scope.back = function(){$ionicHistory.goBack();};

    // $scope.goToComments = function(hotel){$state.go('hotel', {hotel: hotel})}

});

app.factory('HotelFactory', function(HotelsFactory, $stateParams){
    var HotelFactory = {};
    
    //a funcao abaixo encontra sa informacoes do hotel clicado a partir da HotelsFactory:
    HotelFactory.getHotelInfo = function(){
        var city = HotelsFactory[$stateParams.city];
        
        for (var hotel in city){
            if (city[hotel].id === $stateParams.hotel) return city[hotel];
        }
    }

    return HotelFactory;
});