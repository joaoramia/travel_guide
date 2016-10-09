app.config(function ($stateProvider, $urlRouterProvider	) {
    $stateProvider.state('hotels', {
    	cache: false,
        url: '/destination/cities/:hotels/:city',
        templateUrl: 'js/hotels/hotels.html',
        controller: "HotelsCtrl"
    });
    $urlRouterProvider.otherwise('/');
});

app.controller('HotelsCtrl', function ($scope, $state, $ionicSlideBoxDelegate, $stateParams, $ionicHistory, HotelsFactory) {

    //substring abaixo para tirar o numero do nome da cidade (Cancun ao inves de Cancun 1 por exemplo)
    $scope.city = $stateParams.city.substring(0, $stateParams.city.length - 2);

    $scope.hotels = HotelsFactory[$stateParams.hotels.substring(0, $stateParams.hotels.length - 1)];

    $scope.back = function(){$ionicHistory.goBack();};

    $scope.goToHotel = function(hotel){$state.go('hotel', {hotel: hotel, city: $stateParams.hotels.substring(0, $stateParams.hotels.length - 1)})}

});


//na HotelsFactory temos todas informacoes de cada hotel. Estas informacoes poderiam ter sido tiradas de um banco de dados a partir de ajax requests
app.factory('HotelsFactory', function(){
	var HotelsFactory = {};

    HotelsFactory.fernandodenoronha = {
        'O Melhor Hotel': {
            id: 'omelhorhotel', price: '$80.00 per night', pictures: ['img/photo_hotelfernando1_A.png', 'img/photo_hotelfernando1_B.png'], description: 'Best hotel in Fernando de Noronha', services: 'Room Service | Free Breakfast | Laundry', name: 'O Melhor Hotel', comments: [{date: new Date(), comment: 'Awesome place'}, {date: new Date(), comment: 'O Melhor Hotel is definetely the best hotel there'}, {date: new Date(), comment: 'Great place to stay'}]
        }, 
        'Ibis': {
            id: 'ibis', price: '$45.00 per night', pictures: ['img/photo_hotelfernando2_A.png', 'img/photo_hotelfernando2_B.png'], description: 'Perfect place to relax', services: 'Room Service | Free Breakfast | Meeting Rooms | Laundry | Open Bar', name: 'Ibis', comments: [{date: new Date(), comment: 'Awesome place'}, {date: new Date(), comment: 'Ibis is definetely one of the best hotels there'}, {date: new Date(), comment: 'Comfortable'}]
        }, 
        'Pousada Nova': {
            id: 'pousadanova', price: '$65.00 per night', pictures: ['img/photo_hotelfernando3_A.png', 'img/photo_hotelfernando3_B.png'], description: 'The Rolling Stones stayed here', services: 'Room Service | Free Breakfast | Meeting Rooms | Laundry', name: 'Pousada Nova', comments: [{date: new Date(), comment: 'Awesome place'}, {date: new Date(), comment: 'Pousada Nova couldnt be better'}, {date: new Date(), comment: 'Not so good'}]
        }
    };

    HotelsFactory.cancun = {
        'Hyatt Zilara Cancun': {
            id: 'hyattzilara', price: '$89.00 per night', pictures: ['img/photo_hotelcancun1_A.png', 'img/photo_hotelcancun1_B.png'], description: 'Paradise on earth', services: 'Room Service | Free Breakfast | Meeting Rooms | Laundry', name: 'Hyatt Zilara Cancun', comments: [{date: new Date(), comment: 'Awesome place'}, {date: new Date(), comment: 'Hyatt is beautiful'}, {date: new Date(), comment: 'Great place to stay'}]
        }, 
        'Moon Palace Golf': {
            id: 'moonpalace', price: '$119.00 per night', pictures: ['img/photo_hotelcancun2_A.png', 'img/photo_hotelcancun2_B.png'], description: 'Amazing views', services: 'Room Service | Free Breakfast | Meeting Rooms | Laundry', name: 'Moon Palace Golf', comments: [{date: new Date(), comment: 'Awesome place'}, {date: new Date(), comment: 'Moon Palace should be a mandatory place to stay'}, {date: new Date(), comment: 'Great restaurant inside'}]
        }, 
        'Live Aqua Cancun': {
            id: 'liveaqua', price: '$135.00 per night', pictures: ['img/photo_hotelcancun3_A.png', 'img/photo_hotelcancun3_B.png'], description: 'Adult only hotel with amazing view', services: 'Room Service | Free Breakfast | Meeting Rooms | Laundry', name: 'Live Aqua Cancun', comments: [{date: new Date(), comment: 'Awesome place'}, {date: new Date(), comment: 'Live Aqua couldnt be any better'}, {date: new Date(), comment: 'Great place to stay'}]
        }
    };

    HotelsFactory.paris = {
        'Paris Hotel': {
            id: 'parishotel', price: '$80.00 per night', pictures: ['img/photo_hotelparis1_A.png', 'img/photo_hotelparis1_B.png'], description: 'Romantic hotel with great restaurant', services: 'Room Service | Free Breakfast | Meeting Rooms | Laundry', name: 'Paris Hotel', comments: [{date: new Date(), comment: 'Awesome place'}, {date: new Date(), comment: 'Paris Hotel is definetely the best hotel there'}, {date: new Date(), comment: 'Awesome location'}]
        }, 
        'Le Mis Hotel': {
            id: 'lemis', price: '$60.00 per night', pictures: ['img/photo_hotelparis2_A.png', 'img/photo_hotelparis2_B.png'], description: 'Best located hotel in Paris', services: 'Room Service | Free Breakfast | Meeting Rooms', name: 'Le Mis Hotel', comments: [{date: new Date(), comment: 'Awesome place'}, {date: new Date(), comment: 'Le Mis is very classic and organized'}, {date: new Date(), comment: 'Perfect place to stay'}]
        }, 
        'Hotel Panache': {
            id: 'hotelpanache', price: '$50.00 per night', pictures: ['img/photo_hotelparis3_A.png', 'img/photo_hotelparis3_B.png'], description: 'Hotel for the youth of Paris', services: 'Room Service | Meeting Rooms | Laundry', name: 'Hotel Panache', comments: [{date: new Date(), comment: 'Awesome place'}, {date: new Date(), comment: 'Hotel Panache is gorgeous'}, {date: new Date(), comment: 'Will stay there again'}]
        }
    };

    return HotelsFactory;
});