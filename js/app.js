test = [];
angular.module('myApp', [])

   .controller("mainCtrl", function ($http, $scope) {
    $scope.stories = [];

    $http.get('https://www.reddit.com/r/funny/new/.json')
      .success(function(response) {
        angular.forEach(response.data.children, function(child) {
          //child.data.style = {"background": "url(http://www.prepbootstrap.com/Content/images/template/ResponsiveImageTiles/city1.jpg) no-repeat center top","background-size":"cover";};
          $scope.stories.push(child.data);
        });
      test = $scope.stories[0];
    });
  })

  .directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
})

;