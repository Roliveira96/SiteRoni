+ function () {
    'use strict';
    var $id = function (id) {
        return document.getElementById(id);
    };


    var $query = function (selector) {
        return document.querySelector(selector);
    };


    var $querAll = function (selector) {
        return document.querySelectorAll(selector);
    };

    var $name = function (name) {
        return document.getElementsByName(name);
    };



    function pegarCheck() {
        debugger;
        let vetorCheckBoxes = [];
        var games = $name('video-game');
        // let pegaForm = document.forms[1];
        console.log(games);


        for (var i in games) {
            let item = games[i];
            //  if (item.type == 'checkbox' && item.checked) {
            if (item.checked)
                alert(item.value);
        }

    };

    $id('butao').addEventListener('click', pegarCheck);

}();
