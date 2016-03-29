(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/home.html'
        });
    }
    
    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngAnimate', 'ngCookies'])
        .config(config);
})();