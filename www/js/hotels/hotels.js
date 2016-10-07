app.config(function ($stateProvider, $urlRouterProvider	) {
    $stateProvider.state('hotels', {
    	cache: false,
        url: '/destination/cities/:hotels/:city',
        templateUrl: 'js/hotels/hotels.html',
        controller: "HotelsCtrl"
    });
    $urlRouterProvider.otherwise('/');
});

app.controller('HotelsCtrl', function ($scope, $state, $ionicSlideBoxDelegate, $stateParams, HotelsFactory) {

    //substring abaixo para tirar o numero do nome da cidade (Cancun ao inves de Cancun 1 por exemplo)
    $scope.city = $stateParams.city.substring(0, $stateParams.city.length - 2);

    $scope.hotels = HotelsFactory[$stateParams.hotels.substring(0, $stateParams.hotels.length - 1)];

    //funcao apenas para suporte ao botao de voltar a tela anterior
    $scope.type = function(){
        if($scope.city === 'Fernando de Noronha') return 'Beaches';
        if($scope.city === 'Paris') return 'Romantic';
        if($scope.city === 'Cancun') return 'Paradise';
        return 'Beaches'; //default
    };

    $scope.back = function(){$state.go('cities', {cities: $scope.type()})};

    $scope.goToHotel = function(hotel){$state.go('hotel', {hotel: hotel})}

});

app.factory('HotelsFactory', function(){
	var HotelsFactory = {};

    HotelsFactory.fernandodenoronha = {'O Melhor Hotel': {id: 'omelhorhotel', price: '$80.00 per night'}, 'Ibis': {id: 'ibis', price: '$45.00 per night'}, 'Pousada Nova': {id: 'pousadanova', price: '$65.00 per night'}};

    HotelsFactory.cancun = {'Hyatt Zilara Cancun': {id: 'hyattzilara', price: '$89.00 per night'}, 'Moon Palace Golf': {id: 'moonpalace', price: '$119.00 per night'}, 'Live Aqua Cancun': {id: 'liveaqua', price: '$135.00 per night'}};

    HotelsFactory.paris = {'Paris Hotel': {id: 'parishotel', price: '$80.00 per night'}, 'Le Mis Hotel': {id: 'lemis', price: '$60.00 per night'}, 'Hotel Panache': {id: 'hotelpanache', price: '$50.00 per night'}};

    return HotelsFactory;
});