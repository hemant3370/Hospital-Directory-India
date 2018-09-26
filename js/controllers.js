var mandiControllers = angular.module('mandiControllers', []);
var url = null;
mandiControllers.controller('ListController' , ['$scope', '$http',function($scope, $http) {
 
$scope.url = 'https://cors-anywhere.herokuapp.com/https://api.data.gov.in/resource/98fa254e-c5f8-4910-a19b-4828939b477d?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10';
url = 'https://cors-anywhere.herokuapp.com/https://api.data.gov.in/resource/98fa254e-c5f8-4910-a19b-4828939b477d?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10';
$http.get($scope.url).success(function(data) {
$scope.mandi = data ;
})
$scope.ListController = function(){

$scope.url = 'https://cors-anywhere.herokuapp.com/https://api.data.gov.in/resource/98fa254e-c5f8-4910-a19b-4828939b477d?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10&filters['+$scope.mandiOrder+']='+$scope.key;
url =  'https://cors-anywhere.herokuapp.com/https://api.data.gov.in/resource/98fa254e-c5f8-4910-a19b-4828939b477d?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10&filters['+$scope.mandiOrder+']='+$scope.key;
$http.get($scope.url).success(function(data) {
$scope.mandi = data ;
})
}
}]);



mandiControllers.controller('DetailsController' , ['$scope', '$http','$routeParams',function($scope, $http, $routeParams) {
 
$http.get(url).success(function(data) {

$scope.mandi = data;
$scope.whichItem = $routeParams.itemId;

if($routeParams.itemId > 0){
$scope.preItem = Number($routeParams.itemId)-1;
}
else{
$scope.preItem = $scope.mandi.records.length-1;
}
if($routeParams.itemId < $scope.mandi.records.length-1){
$scope.nextItem = Number($routeParams.itemId)+1;
}
else{
$scope.nextItem = 0;
}
});

}]);
