angular.module('dbService',[])
.service('db', function ($http,$log) {
  this.data = $http({
    method: 'GET',
    url: 'js/json.js'
  })
})
