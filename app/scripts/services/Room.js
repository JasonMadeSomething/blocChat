(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://floundering-salmon.firebaseio.com");
        
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        var addRoom = function(newRoom){
            rooms.$add({name: newRoom});
        };
        
        var returnMessages = function(roomId) {
            return $firebaseArray(firebaseRef.child('messages').orderByChild('roomId').equalTo(roomId));
        };
        
        return {
            all: rooms,
            createRoom: addRoom,
            getMessages: returnMessages
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();