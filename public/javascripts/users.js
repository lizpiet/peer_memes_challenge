var app = angular.module('MemeApp', []);

app.controller('MainController', ['$scope', function($scope){
    $scope.allthethings = "Learn all the Jade!!!!!!!";
    $scope.keanu = "I ordered salami...";
    $scope.leo = "I'm walking on SUNSHINE!!";
    $scope.neil = "Watch out, we've got Nick over here!";
    $scope.spiderman = "This class gave me cancer.";
}]);