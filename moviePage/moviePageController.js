angular.module('moviePageController',[])
.controller('moviePageCtrl', function($scope,$log,$routeParams,db) {
  $scope.heading = 'Movie Page';
  $scope.id = $routeParams.id;
	$log.log($routeParams)
	$scope.editMode = true;
	$scope.textEditToggle = function () {
		$scope.editMode = !$scope.editMode;
		console.log(this.parent);
		$log.log($scope.editMode)
	}

  $scope.movies = [];

  db.data.then(success,error);
  function success(r) {
    $scope.movies = r.data;
    // $log.log(r)
		var starRating = function () {
			if ($scope.movies[$scope.id].vote_average < 5) {
					return [{star1 : 1}];
			}
			else if ($scope.movies[$scope.id].vote_average >= 5 && $scope.movies[$scope.id].vote_average < 6) {
				return [{star1 : 1},
							 {star2 : 2}]
			}
			else if ($scope.movies[$scope.id].vote_average >= 6 && $scope.movies[$scope.id].vote_average < 7) {
				return [{star1 : 1},
							 {star2 : 2},
							 {star3 : 3}]
			}
			else if ($scope.movies[$scope.id].vote_average >= 7 && $scope.movies[$scope.id].vote_average < 8) {
				return [{star1 : 1},
							 {star2 : 2},
							 {star3 : 3},
							 {star4 : 4}]
			}
			else if ($scope.movies[$scope.id].vote_average >= 8 && $scope.movies[$scope.id].vote_average < 9) {
				return [{star1 : 1},
							 {star2 : 2},
							 {star3 : 3},
							 {star4 : 4},
							 {star5 : 5}]
			}
		}
		$scope.stars = starRating();

		$log.log($scope.stars)
  }
  function error(r) {
    $log.log(r)
  }


	// $log.log(stars())
})
