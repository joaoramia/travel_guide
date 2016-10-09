describe('Comments functionality', function(){
    var CommentsCtrlMock,
        HotelFactoryMock,
        $controller,
        $scope;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_, $rootScope, _HotelFactory_){

        $controller = _$controller_;

        $scope = {};

        HotelFactoryMock = _HotelFactory_;

        CommentsCtrlMock = $controller('CommentsCtrl', {
            $scope: $scope,
            HotelFactory: HotelFactoryMock
        });
        
    }));

    it('does not allow user to submit empty comment ("")', function() {
        $scope.hotelInfo = {};

        $scope.hotelInfo.comments = [];

        $scope.newComment = '';

        //primeiro, testamos se submitComment() retorna falso:
        expect($scope.submitComment()).toEqual(false);

        //depois, testamos se nenhum comentario foi adicionado ao $scope.hotelInfo.comments:
        expect($scope.hotelInfo.comments.length).toEqual(0);

    });

    it('does not allow user to submit longer than 40 characters comment', function() {

        $scope.hotelInfo = {};

        $scope.hotelInfo.comments = [];
        
        $scope.newComment = 'dfjndskfjnksdjfnksjdnfkjsndkfjnskdjfnksjdnfkjsdnfkjsdnkfjnsdkfj';

        //primeiro, testamos se submitComment() retorna falso:
        expect($scope.submitComment()).toEqual(false);

        //depois, testamos se nenhum comentario foi adicionado ao $scope.hotelInfo.comments:
        expect($scope.hotelInfo.comments.length).toEqual(0);

    });

    it('submits a <40 characters comment', function() {

        $scope.hotelInfo = {};

        $scope.hotelInfo.comments = [];

        $scope.newComment = 'correct';

        //primeiro, testamos se submitComment() retorna verdadeiro:
        expect($scope.submitComment()).toEqual(true);

        //depois, testamos se o comentario foi adicionado ao $scope.hotelInfo.comments:
        expect($scope.hotelInfo.comments.length).toEqual(1);

        //e se o comentario foi corretamente colocado:
        expect($scope.hotelInfo.comments[0].comment).toEqual('correct');

    });

})