(function(){
    function BlocChatCookies($cookies, $uibModal) {
        if (!$cookies.get('blocChatCurrentUser') || $cookies.get('blocChatCurrentUser') === '') {
            $uibModal.open({
                size: 'sm',
                templateUrl: '/templates/newUserModal.html',
                controller: 'ModalCtrl',
                backdrop: 'static',
                keyboard: false
            }).result.then(function (newUser){
                $cookies.put("blocChatCurrentUser", newUser);
            })
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();