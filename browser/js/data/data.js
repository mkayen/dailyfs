var lineup = require('../cache/optLineup.json')

app.controller('DataController', function($scope){
	$scope.data = lineup
})