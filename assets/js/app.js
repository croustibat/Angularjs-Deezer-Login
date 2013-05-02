// Application JS

var $wrap_container = $('#wrap');

var $APPID = '116995';
DZ.init({
    appId       : $APPID,
    channelUrl  : 'http://'+$domaine+'/Angularjs-Deezer-Login/channel.html'
});


/* App Module */
var myApp = angular.module('dzAppDemo', []);

// Routing
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  	.when('/', {controller:MainCtrl})
    .when('/my-albums', {templateUrl: 'partial/album_item.html', controller: 'viewAlbum'})
    .otherwise({redirectTo:'/'});
});

// global var, use global var to set app_id everywhere for affiliation programm
// check : http://developers.deezer.com/myapps/affiliate/documentation
myApp.factory('GlobalVarsService', function() {
  return {
      appid : $APPID
  };
});

// Deezer login service
myApp.factory('DZLoader', function($rootScope, $http, $compile, $log) {

var displayStatus = function() {

	$('#login-container').remove();
	$rootScope.appid = $APPID;

	$http.get('partial/menu_logged.html')
	.success(function(data) {
		$wrap_container.prepend(data);
		// Make AngularJS kick in!
		$compile($wrap_container)($rootScope);

		// broadcast event when DZ calls ends
		$rootScope.$broadcast('RessourceLoaded');
	});

	return true;
}

var setRootData = function(response) {
	$rootScope.user_data = {
		"access_token" 	: response.authResponse.accessToken,
		"user_id"		: response.userID
	};

    DZ.api('user/me', function(user){
        $.extend($rootScope.user_data,{"userEmail" : user.email, "userName" : user.name, "pictureUrl" : user.picture});
		displayStatus();
    });

    return true;
}

return {
	checked_logged: function() {
		DZ.getLoginStatus(function(response){
			if (response.authResponse != null) {
				setRootData(response);
			}
			else {
				return false;
			}
		});
	},
    login: function() {
		DZ.login(function(response) {
			DZ.getLoginStatus(function(response) {
				if (response.authResponse != null) {
					setRootData(response);
				}
			});
		}, {perms:'basic_access,email,offline_access,manage_library'});
    }
  };
});


