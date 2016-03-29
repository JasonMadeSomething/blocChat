(function() {
    function Message($firebaseArray) {
        var firebaseRef = new Firebase("https://floundering-salmon.firebaseio.com");
        var messages = $firebaseArray(firebaseRef.child('messages'));
        
        var sendMessage = function(newMessage) {
            messages.$add(newMessage);
        };
        
        return {
            send: sendMessage
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();