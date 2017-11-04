(function () {

    angular.module('workshop')
        .factory('githubResource', githubResource);

    githubResource.$inject = ['$resource'];

    function githubResource($resource) {
        return {
            User: $resource("https://api.github.com/users/:userName", { userName: "@id" }, {
                repository: {
                    method: 'GET',
                    url: 'https://api.github.com/users/:userName/repos',
                    isArray: true
                },
                search: {
                    method: 'GET',
                    url: 'https://api.github.com/search/users?q=:q',
                    isArray: false
                }
            })
        };
    }


})();