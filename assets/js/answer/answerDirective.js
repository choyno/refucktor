app.directive('answerItem',['$http', function($http){
  return {
    restrict: 'E',
    replace: true,
    template: JST['assets/templates/answer-item.html'],
    transclude: true,
    scope: {
      answer: "="
    },
    link: function($scope, element, attrs, ctrl, transclude){
      var editor = CodeMirror(element.find(".code-editor")[0], {
	lineNumbers: true,
	readOnly: 'nocursor'
      });
      $scope.user = {};
      $http.get('/user/'+ $scope.answer.user)
	.success(function(data){
	  $scope.user = data;
	  $scope.reload = true;
	  })
	.error(function(err){console.log(err)});

      transclude(function(clone){
	element.find(".code-editor")
	var str = $scope.answer.body;
	var string = str.replace(/^\n/, '');

	editor.setValue(string);
      });

      $scope.submitVote = function(vote){
	$http.put('/put/' + $scope.answer.id + "/vote", {vote: vote} )
	  .success(function(data){
	    console.log(data);
	    $scope.answer.vote = data.vote;
	  }).error(function(err){ console.log(err) })
      }
    }
  }

}]);
