app.controller('PostCtrl', ['$scope', '$http', function($scope, $http){
  $scope.post = {};
  $scope.posts = [];
  $scope.postId = "";
  $scope.load = false;

  $scope.createPost = function(load){
    $scope.load = true;
    $http.post('/post', $scope.formData)
      .success(function(data){
	if (load == 'load_posts') getPosts();
	if (load == 'load_post') getPost();
	$scope.formData = {};
      })
      .catch(function(err){ console.log(err); })
      .finally(function(){ $scope.load = false; });
  }

  $scope.$watch('postId', function(){
    getPost();
  });

  function getPost(){
    $http.get('/post/'+$scope.postId)
      .success(function(data){
	$scope.post = data;
      })
    .catch(function(){ console.log("error"); });
  }

  function getPosts(){
    $http.get('/post?question=null')
      .success(function(data){
	$scope.posts = data;
      })
    .catch(function(){ console.log("error"); });
  }

  getPosts()
}]);

