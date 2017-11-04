(function () {
    angular.module('workshop')
        .controller('userController', userController);

    userController.$inject = ['$scope', 'githubResource'];

    function userController($scope, githubResource) {
        
        initialize();

        $scope.buscarUsuario = function(){
            githubResource.User.search({q:$scope.vm.userName})
            .$promise
            .then(function(response){
                $scope.vm.results = response.items;
            });

        }
        
        
        function initialize(){
            $scope.vm = {
                userName: '',
                results: []
            }
        }



    }
})();