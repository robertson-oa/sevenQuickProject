var app = angular.module("RankingLeadersApp", []);

app.controller("RankController", function($scope){


    $scope.showGold = false;
    $scope.showSilver = false;
    $scope.showBronze = false;


    $scope.toggleGold = function(){
        $scope.showGold = !$scope.showGold;
    }
    $scope.toggleSilver = function(){
        $scope.showSilver = !$scope.showSilver;
    }
    $scope.toggleBronze = function(){
        $scope.showBronze = !$scope.showBronze;
    }




    $scope.Leaders = [
        {"pic" : "images/BARBAROSSA.png", "rank" : 1},
        {"pic" : "images/GANDHI.png", "rank" : 1},
        {"pic" : "images/GENGHIS_KHAN.png", "rank" : 1},
        {"pic" : "images/PERICLES.png", "rank" : 2},
        {"pic" : "images/TOMYRIS.png", "rank" : 2},
        {"pic" : "images/VICTORIA.png", "rank" : 2},
        {"pic" : "images/LAUTARO.png", "rank" : 3},
        {"pic" : "images/QIN.png", "rank" : 3},
        {"pic" : "images/SALADIN.png", "rank" : 3}
    ]
    
});