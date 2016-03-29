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
        
        $scope.activeRoom = null;
        
        $scope.messges = null;
        
        $scope.setRoom = function(room) {
            $scope.activeRoom = room;
            $scope.roomName = room.name;
            $scope.messages = Room.getMessages(room.$id);
        }
        
        $scope.isActive = function(room) {
            return $scope.activeRoom === room;
        }
        
        $scope.roomName = "Please Select a Room";
        
    }
    
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', '$uibModal', 'Room', RoomCtrl]);
})();