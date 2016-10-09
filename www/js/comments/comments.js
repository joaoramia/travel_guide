app.config(function ($stateProvider, $urlRouterProvider	) {
    $stateProvider.state('comments', {
    	cache: false,
        url: '/destination/:city/:hotel/comments',
        templateUrl: 'js/comments/comments.html',
        controller: "CommentsCtrl"
    });
    $urlRouterProvider.otherwise('/');
});

app.controller('CommentsCtrl', function ($scope, $state, $ionicSlideBoxDelegate, $stateParams, $ionicHistory, HotelFactory) {

    $scope.newComment = null;

    $scope.hotelInfo = HotelFactory.getHotelInfo();

    $scope.back = function(){$ionicHistory.goBack();};

    //a funcao abaixa adiciona o comentario ao view, mas temporariamente, uma vez que nao estamos salvando em um banco de dados
    $scope.submitComment = function(){
        
        //checamos se o comentario nao esta vazio (null) antes de adicionarmos:
        if($scope.newComment){
            var commentToAdd = {date: new Date(), comment: $scope.newComment};
            $scope.hotelInfo.comments.push(commentToAdd);
            $scope.newComment = null;
        }
        
    };

});