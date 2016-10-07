app.config(function ($stateProvider, $urlRouterProvider	) {
    $stateProvider.state('login', {
    	cache: false,
        url: '/',
        templateUrl: 'js/login/login.html',
        controller: "LoginCtrl"
    });
    $urlRouterProvider.otherwise('/');
});

app.controller('LoginCtrl', function ($scope, $state, LoginFactory) {

    $scope.login = {};

    $scope.error = null;

    $scope.sendLogin = function(loginInfo) {

        if(LoginFactory.checkLogin(loginInfo)) {
            $state.go('destination');
        }
        else {
            $scope.error = 'Wrong username or password';
        }

    };

});

app.factory('LoginFactory', function(){
	var LoginFactory = {};

	LoginFactory.checkLogin = function(loginInfo){
        //primeiro transforma-se em minusculas, caso a primeira seja maiuscula como default:
        loginInfo.user = loginInfo.user.toLowerCase();
        
		if (loginInfo.user === 'ibm' && loginInfo.password === '123456') return true;
		return false;
	}

    return LoginFactory;
})