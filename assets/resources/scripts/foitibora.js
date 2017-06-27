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
        var idS;
        let vetorCheckBoxes = [];
        var games = $name('video-game');
        // let pegaForm = document.forms[1];
        console.log(games);

        var frase = 'Você joga no(s) seguinte(s) dispositivo(s)';
        for (var i in games) {
            let item = games[i];
            //  if (item.type == 'checkbox' && item.checked) {
            if (item.checked) {

                frase += ', ' + item.value;

            }
        }
        frase += '. <br> Gosta de jogar o(s) seguinte(s) genero(s)'

        var jogos = $name('jogo');
        for (var i in jogos) {
            let item = jogos[i];
            //  if (item.type == 'checkbox' && item.checked) {
            if (item.checked) {

                frase += ', ' + item.value;

            }
        }
        frase += '.<br> <center>Foitibora jogar uma partida!</center>';

        function idSecao(num, func) {
            num = parseInt(Math.random() * num);
            func(num);


        }

        idSecao(10000, function (num) {
            idS = num * num;
        })

        var user = prompt('Informe o seu UserName da Steam')
        frase += '<br> UserName Steam: ' + user;
        $id('resultadoPesquisa').innerHTML = frase + '<br> Id de sessão: ' + idS + '<br>';
    };

    $id('butao').addEventListener('click', pegarCheck);


    $id('mouse').addEventListener('mousemove', function (e) {

        var x = e.clientX;
        var y = e.clientY;
        $id('cordenadas').innerHTML = '<br>' + x + ' x ' + y;
    });



}();
