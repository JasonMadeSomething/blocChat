(function() {
    function RoomCtrl($scope, $uibModal, $cookies, Room, Message){
        
        $scope.allRooms = Room.all;
        
        $scope.newMessage = '';
        
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
        
        $scope.sendMessage = function() {
            Message.send({
                username: $cookies.get('blocChatCurrentUser'),
                roomId: $scope.activeRoom.$id,
                sentAt: Firebase.ServerValue.TIMESTAMP,
                content: $scope.newMessage
            });
            $scope.newMessage = '';
        }
    }
    
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', '$uibModal', '$cookies', 'Room', 'Message', RoomCtrl]);
})();