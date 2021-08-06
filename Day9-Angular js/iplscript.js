angular.module('orderByExample2', [])
.controller('iplController', ['$scope', function($scope) {
  var ipl = [
    {name: 'Virat',   team: 'RCB',  season: 2020,    runs:400, wickets:0},
    {name: 'ABD',      team: 'RCB',  season: 2020,  runs:403,   wickets:0},
    {name: 'MS Dhoni',   team: 'CSK',  season: 2020, runs:450,   wickets:1},
    {name: 'Jadeja',   team: 'CSk', season: 2020,   runs:20,  wickets:5},
    {name: 'Bumrah',  team: 'MI',  season: 2020,    runs:70, wickets:8}
  ];
 
  $scope.propertyName = 'runs';
  $scope.reverse = true;
  $scope.ipl = ipl;
 
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
}]);