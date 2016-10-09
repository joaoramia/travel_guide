describe('Login functionality', function(){
    var LoginCtrlMock,
        LoginFactoryMock,
        $controller,
        $scope,
        stateMock;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_, $rootScope, $state, _LoginFactory_){

        stateMock = jasmine.createSpyObj('$state spy', ['go']);

        $controller = _$controller_;

        LoginFactoryMock = _LoginFactory_;

        $scope = {};

        LoginCtrlMock = $controller('LoginCtrl', {
            $scope: $scope,
            $state: stateMock,
            LoginFactory: LoginFactoryMock
        });
        
    }));

    it('checks if login is valid', function() {

        var obj = {user: 'ibm', password: '123456'};

        //primeiro, vemos com um login correto:
        expect(LoginFactoryMock.checkLogin({'user': 'ibm', 'password': '123456'})).toEqual(true);

        //depois, com uma senha errada e usuario correto:
        expect(LoginFactoryMock.checkLogin({'user': 'ibm', 'password': '23456'})).toEqual(false);

        //depois, com a senha certa e usuario errado:
        expect(LoginFactoryMock.checkLogin({'user': 'icm', 'password': '123456'})).toEqual(false);

    });

    it('redirects to state "destination" upon correct login', function() {
    
        $scope.sendLogin({'user': 'ibm', 'password': '123456'});

        expect($scope.error).toEqual(null);

        expect(stateMock.go).toHaveBeenCalledWith('destination');
    });

    it('does not redirect to a new state upon incorrect login', function() {
    
        $scope.sendLogin({'user': 'wrongUser', 'password': '123456'});

        expect(stateMock.go).not.toHaveBeenCalledWith('destination');
    });

    it('shows error message upon incorrect login', function() {
    
        $scope.sendLogin({'user': 'wrongUser', 'password': '123456'});

        expect($scope.error).toEqual('Wrong username or password');
    });
})