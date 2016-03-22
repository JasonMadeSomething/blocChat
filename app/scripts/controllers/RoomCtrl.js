(function() {
    function RoomCtrl($scope, Room){
        $scope.allRooms = Room.all;
    }
    
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
})();