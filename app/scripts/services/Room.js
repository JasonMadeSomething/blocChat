(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://floundering-salmon.firebaseio.com");
        
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        var addRoom = function(newRoom){
            rooms.$add({name: newRoom});
        };
        
        return {
            all: rooms,
            createRoom: addRoom
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();