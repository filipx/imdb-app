angular.module('homeController',[])
.controller('HomeCtrl', function ($scope,$log,db) {
  $scope.heading = 'All Movies';
  $scope.movies = [];
  $scope.genres = [];
	$scope.tagFilter = '';
	$scope.tags = function (genre) {
		$scope.tagFilter = genre + '';
		console.log($scope.tagFilter);
	};


  db.data.then(success,error);
  function success(r) {
    $scope.movies = r.data;
    $log.log(r)
		filterGenres($scope.movies);
  }
  function error(r) {
    $log.log(r)
  }
  // console.log($scope.movies);

	function filterGenres(movies) {
		for (var i = 0; i < movies.length; i++) {
			for (var j = 0; j < movies[i].genres.length; j++) {
				if ($scope.genres.indexOf(movies[i].genres[j].name) == -1) {
					$scope.genres.push(movies[i].genres[j].name);
				}
			}
		}
		$log.log($scope.genres)
	}

})
