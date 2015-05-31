app.directive('postItem', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: JST['assets/templates/post-item.html'],
    scope: {
      post: "="
    },
    link: function($scope, element, attrs){
      //Do some logic here
    }
  }
});
