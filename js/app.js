test = [];
angular.module('myApp', [])

   .controller("mainCtrl", function ($http, $scope) {
    $scope.stories = [];

    $http.get('https://www.reddit.com/r/funny/new/.json')
      .success(function(response) {
        angular.forEach(response.data.children, function(child) {
          $scope.stories.push(child.data);
        });
      test = $scope.stories[0];
    });
});