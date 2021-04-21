var app = angular.module("MockingJay's List App", []);

app.controller("ListController", function ($scope) {
    $scope.list = ["milk", "cheese", "egg"];

    $scope.addItem = function (z) {
        $scope.list.push(z);
        $scope.newItem = "";
    }
    $scope.remove = function (y) { 
        var removeItem = $scope.list.indexOf(y);
        $scope.list.splice(removeItem,1);
     }
});