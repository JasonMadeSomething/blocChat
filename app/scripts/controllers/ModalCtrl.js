(function() {
    function ModalCtrl($scope, $uibModalInstance){
        $scope.newRoom = "";
        
        $scope.ok = function(){
            $uibModalInstance.close($scope.newRoom);
        };
        
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', ModalCtrl])
})();