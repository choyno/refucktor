app.directive('postItem', function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/post-item.html',
    scope: {
      post: "="
    },
    link: function($scope, element, attrs){
      $scope.name = "jude";
    }
  }
});
