(function() {
    function RoomCtrl($scope, $uibModal, Room){
        $scope.allRooms = Room.all;
        
        $scope.open = function() {
            
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/templates/newRoomModal.html',
                controller: 'ModalCtrl',
                size: 'sm'
            });
            
            modalInstance.result.then(function (newName) {
                Room.createRoom(newName);
            })
        }
    }
    
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', '$uibModal', 'Room', RoomCtrl]);
})();