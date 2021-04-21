let app = angular.module("ComposersList", []);
app.controller("ComposerController",function($scope){
    $scope.pieces = [
       {"pic": "images/bach.jfif", "composer": "Bach", "title": "Goldberg Variations"},
       {"pic": "images/bach.jfif", "composer": "Bach", "title": "Harpsichord Concerto"},
       {"pic": "images/bach.jfif", "composer": "Bach", "title": "Brandenburg Concerto"},
       {"pic": "images/bach.jfif", "composer": "Bach", "title": "Air On G"},
       {"pic": "images/bach.jfif", "composer": "Bach", "title": "Contana #85"},
       {"pic": "images/beethoven.png", "composer": "Beethoven", "title": "Symphony #9"},
       {"pic": "images/beethoven.png", "composer": "Beethoven", "title": "Fur Elise"},
       {"pic": "images/beethoven.png", "composer": "Beethoven", "title": "Moonlight Sonata"},
       {"pic": "images/beethoven.png", "composer": "Beethoven", "title": "Violin Concerto"},
       {"pic": "images/beethoven.png", "composer": "Beethoven", "title": "Egnant Overture"},
       {"pic": "images/mozart.jfif", "composer": "Mozart", "title": "Eine Kleine Machtmusic"},
       {"pic": "images/mozart.jfif", "composer": "Mozart", "title": "Piano Concerto #21"},
       {"pic": "images/mozart.jfif", "composer": "Mozart", "title": "Don Giovanni"},
       {"pic": "images/mozart.jfif", "composer": "Mozart", "title": "Jupiter Symphony"},
       {"pic": "images/mozart.jfif", "composer": "Mozart", "title": "larinet Concerto #3"}
    ];
});

let bach = document.querySelector("#bach");
let beethoven = document.querySelector("#beethoven");
let mozart = document.querySelector("#mozart");
let main = document.querySelector(".main");

let composers = [bach, beethoven, mozart];

for(let composer of composers){
    composer.addEventListener('click', ()=>{
        main.style.display="block"
    })
}

