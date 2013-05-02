// Controller JS - Angular.js

function MainCtrl($scope, $rootScope, $log, DZLoader, GlobalVarsService) {

	DZLoader.checked_logged();

	$scope.$on('RessourceLoaded',function() {

		if ($rootScope.user_data != undefined) {
			$('#demo-headline').animate({'opacity':0}, function(){$(this).remove()});
		}
	});

	$scope.appid = GlobalVarsService.appid;

	$scope.dzLogin = function(){
		if (!$rootScope.user_data) {
			DZLoader.login();
		}
		else {
			// user is logged do nothing
			return true;
		}
	}
}

function ChildCtrl($scope, $log) {

	$scope.dzLogout = function(){
		DZ.logout(function(response){
			// should be unlogged now... hopefully... or not :/
		});
	}

}

function viewAlbum($scope, $compile, $log, GlobalVarsService) {

	$scope.appid = GlobalVarsService.appid;

	$scope.$on('RessourceLoaded',function() {

		// call API to get deezer albums datas
		DZ.api('user/me/albums', function(data) {
			$scope.response = data;
		});

	});
}




