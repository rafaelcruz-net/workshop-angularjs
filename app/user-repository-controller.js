(function () {
    angular.module('workshop')
        .controller('userRepositoryController', userRepositoryController);

    userRepositoryController.$inject = ['$scope', 'githubResource', "$stateParams"];

    function userRepositoryController($scope, githubResource, $stateParams) {

        initialize();

        function initialize() {
            $scope.vm = {
                userName: $stateParams.user,
                repository: []
            };

            var q = githubResource.User.repository({ userName: $scope.vm.userName }).$promise;

            q.then(function (response) {
                $scope.vm.repository = response;
            });
        }

    }
})();