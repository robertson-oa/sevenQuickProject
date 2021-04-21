let app = angular.module("SingersApp", []);
app.controller("SingerController",function($scope){
    $scope.singers = [
        {"pic": "images/1.jpg", "name": "drake", "gender": "male", "quality": "images/like.jpg"},
        {"pic": "images/2.png", "name": "post-malon", "gender": "male", "quality": "images/dislike.jpg"},
        {"pic": "images/3.jfif", "name": "taylor swift", "gender": "female", "quality": "images/like.jpg"},
        {"pic": "images/4.jfif", "name": "micky-minaj", "gender": "female", "quality": "images/like.jpg"},
        {"pic": "images/5.jfif", "name": "katty Perry", "gender": "female", "quality": "images/dislike.jpg"},
        {"pic": "images/6.jfif", "name": "beyounce", "gender": "female", "quality": "images/dislike.jpg"},
        {"pic": "images/7.jpg", "name": "Rihanna", "gender": "female", "quality": "images/dislike.jpg"},
        {"pic": "images/8.jpg", "name": "bruno-mars", "gender": "male", "quality": "images/like.jpg"},
    ];
});