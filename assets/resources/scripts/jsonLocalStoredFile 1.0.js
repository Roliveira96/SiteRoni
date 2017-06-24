+ function () {
    'use strict';
    // debugger

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

    + function () {
        //alert('kk')
        $id('androiContainer').classList.remove('esconde');
        $id('xboxContainer').classList.add('esconde');
        $id('playContainer').classList.add('esconde');
        $id('pcContainer').classList.add('esconde');
        $id('perfilContainer').classList.add('esconde');
    }();


    $('.parallax').parallax();
    $('.button - collapse ').sideNav();
    $('.collapsible').collapsible();
    $('select').material_select();
    $('.slider').slider();


    //Regarega a pagina
    //window.location.reload();

    //Pegando a pessoa pelo Json do mal

    var pessoaJson = JSON.parse(localStorage.getItem('PessoaObjeto'));
    console.log(pessoaJson);

    window.onload = function () {

        let pessoaPerfil = pessoaJson;


        if (pessoaPerfil == null) {
            window.location.assign('index.html');
        } else {
            if (pessoaPerfil.validador === false)
                window.location.assign('index.html');
        }


        function mostraDados() {
            $id('nomePerfil').innerHTML = trasformaNome(nomeCompleto(pessoaPerfil));
            $id('idadePerfil').innerHTML = pessoaPerfil.idade;
            $id('sexoPerfil').innerHTML = pessoaPerfil.sexo;
            $id('fonePerfil').innerHTML = pessoaPerfil.telefone;
            $id('whatsPerfil').innerHTML = pessoaPerfil.whats;
            $id('emailPerfil').innerHTML = pessoaPerfil.email;


            console.log('Nome:' + trasformaNome(nomeCompleto(pessoaPerfil)));
            console.log('Idade:' + pessoaPerfil.idade);
            console.log('Sexo:' + pessoaPerfil.sexo);
            console.log('Telefone:' + pessoaPerfil.telefone);
            console.log('Whats:' + pessoaPerfil.whats);
            console.log('Email:' + pessoaPerfil.email);
            /*
                        $id('inputNome').value = trasformaNome(pessoaPerfil.nome);
                        $id('inputSobreNome').value = trasformaNome(pessoaPerfil.sobrenome);
                        $id('inputIdade').value = pessoaPerfil.idade;
                        $id('sexoPerfil').value = pessoaPerfil.sexo;
                        $id('inputFone').value = pessoaPerfil.telefone;
                        $id('inputWhats').value = pessoaPerfil.whats;
                        $id('email').value = pessoaPerfil.email;

            */


            function trasformaNome(n) {
                let tudoMinusculo = n.toLowerCase();
                let nomeCorreto = tudoMinusculo.split(' ');
                for (var i = 0; i < nomeCorreto.length; i++) {
                    let aux = nomeCorreto[i];
                    let transformaPrimeiraLetra = aux[0];
                    aux = transformaPrimeiraLetra.toUpperCase() + aux.slice(1);
                    nomeCorreto[i] = aux;
                }


                return nomeCorreto.join(' ');
            }

            pessoaPerfil.nomeCompleto = trasformaNome(nomeCompleto(pessoaPerfil));
            console.log('Nome Completo ' + pessoaPerfil.nomeCompleto);

            let n = pessoaPerfil.nomeCompleto;
            n = n.split(' ')[0];
            // alert('n ' + n);
            // alert('n ' + n);
            $id('nomeP').innerHTML = n;


            function nomeCompleto(obj) {
                let n = obj.nome + ' ' + obj.sobrenome;
                return n;
            }

        }

        mostraDados();

        $id('gAndroid').addEventListener('click', function () {

            $query('#m1').classList.add('active');
            $query('#m2').classList.remove('active');
            $query('#m3').classList.remove('active');
            $query('#m4').classList.remove('active');
            $query('#m5').classList.remove('active');



            $id('navBarMeu').classList.add('android');
            $id('navBarMeu').classList.remove('pc');
            $id('navBarMeu').classList.remove('xbox');
            $id('navBarMeu').classList.remove('play');
            $id('navBarMeu').classList.remove('perfil');

            $id('androiContainer').classList.remove('esconde');
            $id('xboxContainer').classList.add('esconde');
            $id('playContainer').classList.add('esconde');
            $id('pcContainer').classList.add('esconde');
            $id('perfilContainer').classList.add('esconde');
        });

        $id('gxbox').addEventListener('click', function () {





            $query('#m1').classList.remove('active');
            $query('#m2').classList.add('active');
            $query('#m3').classList.remove('active');
            $query('#m4').classList.remove('active');
            $query('#m5').classList.remove('active');

            $id('navBarMeu').classList.remove('android');
            $id('navBarMeu').classList.remove('pc');
            $id('navBarMeu').classList.add('xbox');
            $id('navBarMeu').classList.remove('play');
            $id('navBarMeu').classList.remove('perfil');

            $id('navBarMeu').classList.add('xbox');

            $id('androiContainer').classList.add('esconde');
            $id('xboxContainer').classList.remove('esconde');
            $id('playContainer').classList.add('esconde');
            $id('pcContainer').classList.add('esconde');
            $id('perfilContainer').classList.add('esconde');
        });

        $id('gplay').addEventListener('click', function () {
            $query('#m1').classList.remove('active');
            $query('#m2').classList.remove('active');
            $query('#m3').classList.add('active');
            $query('#m4').classList.remove('active');
            $query('#m5').classList.remove('active');

            $id('navBarMeu').classList.remove('android');
            $id('navBarMeu').classList.remove('pc');
            $id('navBarMeu').classList.remove('xbox');
            $id('navBarMeu').classList.add('play');
            $id('navBarMeu').classList.remove('perfil');

            $id('navBarMeu').classList.add('play');

            $id('androiContainer').classList.add('esconde');
            $id('xboxContainer').classList.add('esconde');
            $id('playContainer').classList.remove('esconde');
            $id('pcContainer').classList.add('esconde');
            $id('perfilContainer').classList.add('esconde');
        });
        $id('gpc').addEventListener('click', function () {

            $query('#m1').classList.remove('active');
            $query('#m2').classList.remove('active');
            $query('#m3').classList.remove('active');
            $query('#m4').classList.add('active');
            $query('#m5').classList.remove('active');

            $id('navBarMeu').classList.remove('android');
            $id('navBarMeu').classList.add('pc');
            $id('navBarMeu').classList.remove('xbox');
            $id('navBarMeu').classList.remove('play');
            $id('navBarMeu').classList.remove('perfil');

            $id('navBarMeu').classList.add('pc');
            $id('androiContainer').classList.add('esconde');
            $id('xboxContainer').classList.add('esconde');
            $id('playContainer').classList.add('esconde');
            $id('pcContainer').classList.remove('esconde');
            $id('perfilContainer').classList.add('esconde');
        });

        $id('gperfil').addEventListener('click', function () {

            $query('#m1').classList.remove('active');
            $query('#m2').classList.remove('active');
            $query('#m3').classList.remove('active');
            $query('#m4').classList.remove('active');
            $query('#m5').classList.add('active');

            $id('navBarMeu').classList.remove('android');
            $id('navBarMeu').classList.remove('pc');
            $id('navBarMeu').classList.remove('xbox');
            $id('navBarMeu').classList.remove('play');
            $id('navBarMeu').classList.add('perfil');

            $id('navBarMeu').classList.add('perfil');
            $id('androiContainer').classList.add('esconde');
            $id('xboxContainer').classList.add('esconde');
            $id('playContainer').classList.add('esconde');
            $id('pcContainer').classList.add('esconde');
            $id('perfilContainer').classList.remove('esconde');
        });

        $id('editaPerfil').addEventListener('click', function () {
            $id('perfilForm').classList.remove('esconde');
        });
        $id('pesquisa').addEventListener('click', function () {
            $id('pesquisaForm').classList.remove('esconde');
        });

        $id('enviar').addEventListener('click', function () {


            let pessoaNova = JSON.parse(localStorage.getItem('PessoaObjeto'));
            pessoaNova.nome = $id('inputNomes').value;
            pessoaNova.sobrenome = $id('inputSobreNomes').value;
            pessoaNova.idade = $id('inputIdades').value;
            pessoaNova.sexo = sexoEscolha($id('sexos').value);
            pessoaNova.telefone = $id('inputFones').value;
            pessoaNova.whats = $id('inputWhatss').value;
            pessoaNova.email = $id('emails').value;
            pessoaNova.validador = true;

            $id('pesquisaForm').classList.remove('esconde');


            function sexoEscolha(valor) {
                alert('Valor' + valor);
                switch (valor) {
                    case '1':
                        return 'Masculino'
                        break;
                    case '2':
                        return 'Feminino'
                        break;
                    case '3':
                        return 'Anonimo'
                        break;
                    default:
                        return 'Error';
                }
            }
            console.log(pessoaNova);
            localStorage.setItem('PessoaObjeto', JSON.stringify(pessoaNova));
            window.location.reload();
        });

    };




    //kkkkk
    //kkkkk
    //kkkkk
    //kkkkk
    //kkkkk
    //kkkkk


    //Impedir Digitar letras e caracteres nos Input Nome 

    $id('inputNomes').addEventListener('keypress', function (e) {

        if ((e.charCode >= 97 && e.charCode <= 122 || e.charCode === 32) ||
            (e.charCode >= 65 && e.charCode <= 90 || e.charCode === 32)) {
            $id('nomeSpan').innerHTML = '';

        } else {
            $id('nomeSpan').innerHTML = 'Somente letras são permitidas!';
            e.preventDefault();
        }
    });


    //Impede que o campo nome fique vazio
    $id('inputNomes').onblur = function () {
        if ($id('inputNomes').value === null || $id('inputNomes').value === '')
            $id('nomeSpan').innerHTML = 'Este campo é nescessário';
    };


    //Impede que o campo sobrenome fique vazio
    $id('inputSobreNomes').onblur = function () {
        if ($id('inputSobreNomes').value === null || $id('inputSobreNomes').value === '')
            $id('sobreSpan').innerHTML = 'Este campo é nescessário';

    };
    //Impede que o campo Email fique vazio
    $id('emails').onblur = function () {
        if ($id('emails').value === null || $id('emails').value === '')
            $id('emailSpan').innerHTML = 'Este campo é nescessário';

    };

    //Impedir Digitar letras e caracteres nos Input SobreNome 

    $id('inputSobreNomes').addEventListener('keypress', function (e) {

        if ((e.charCode >= 97 && e.charCode <= 122 ||
                e.charCode === 32) || (e.charCode >= 65 && e.charCode <= 90 || e.charCode === 32)) {
            $id('sobreSpan').innerHTML = '';

        } else {
            $id('sobreSpan').innerHTML = 'Somente letras são permitidas!';
            e.preventDefault();
        }
    });



    //Impede que no campo idade seja digitados letras.
    //INPENDE numeros menores que 4 e maiores que 110;

    $id('inputIdades').addEventListener('keypress', function (e) {
        //Aqui evita que o 0 seja dijitado no inicio do form transformando em um array eleminando
        //o primeiro valor.


        if ($id('inputIdades').value[0] === 0) {

            let numero = $id('inputIdades').value;
            let res = new Array();

            for (let i = 0; i < numero.length; i++)
                res[i] = numero.charAt(i);

            console.log(res);
            res.shift();

            $id('inputIdades').value = res.join('');
            console.log($id('inputIdades').value);

        }
        //Impede que letras e qualquer coisa que não seja numeros seja digitado
        if ((e.charCode >= 48 && e.charCode <= 57)) {
            $id('idadeSpan').innerHTML = '';

        } else {
            $id('idadeSpan').innerHTML = 'Somente Numeros são Permetido!';
            e.preventDefault();
        }

    });

    //Verefica se a idade digitado é menor que  4 e maior que 109
    $id('inputIdades').addEventListener('keyup', function () {

        let idade = $id('inputIdades').value;
        //Impede que numeros menores que 4 e maiores que 109 sejam digitados
        if ((idade < 4) || (idade > 110)) {
            $id('idadeSpan').innerHTML = 'Idade informada incorreta';
            if ($id('inputIdades').value.length > 3) {
                $id('inputIdades').value = '';

            }
        } else {
            $id('idadeSpan').innerHTML = '';
        }
    });


    //Pega o valor do Select para ver o sexo

    /* $id('sexoSpan').onblur = function () {

             let valor = $id('sexoSpan').selectedIndex;
             console.log(valor);

         }*/
    //IMPEDE QUE LETRA SEJAM DIGITADAS NO CAMPO TELEFONE
    $id('inputFones').addEventListener('keypress', function (e) {

        //Impede que letras e qualquer coisa que não seja numeros seja digitado

        if ((e.charCode >= 48 && e.charCode <= 57)) {
            $id('foneSpan').innerHTML = '';

        } else {
            $id('foneSpan').innerHTML = 'Somente Numeros são Permetido!';
            e.preventDefault();
        }

    });

    //IMPEDE QUE LETRA SEJAM DIGITADAS NO CAMPO WHATS
    $id('inputWhatss').addEventListener('keypress', function (e) {

        //Impede que letras e qualquer coisa que não seja numeros seja digitado

        if ((e.charCode >= 48 && e.charCode <= 57)) {
            $id('whatSpan').innerHTML = '';

        } else {
            $id('whatSpan').innerHTML = 'Somente Numeros são Permetido!';
            e.preventDefault();
        }

    });
    //$id('inputFone').onkeyup = vereficaNumero('inputFone');
    $id('inputWhatss').onblur = function () {


        console.log($id('inputWhatss').value);
        let fone = $id('inputWhatss').value;
        console.log(fone.length);
        //Verefica se o numero digitado é maior ou menor que o permetido
        if (fone.length === 10) {
            $id('whatSpan').innerHTML = '';
        } else {
            $id('whatSpan').innerHTML = 'Numero de Telefone incorreto\nVerefique ' +
                ' se tá certo a quantidade de digitos!';
        }

    };
    $id('inputFones').onblur = function () {


        console.log($id('inputFones').value);
        let fone = $id('inputFones').value;
        console.log(fone.length);
        //Verefica se o numero digitado é maior ou menor que o permetido
        if (fone.length === 10) {
            $id('foneSpan').innerHTML = '';
        } else {
            $id('foneSpan').innerHTML = 'Numero de Telefone incorreto\nVerefique' +
                'se tá certo a quantidade de digitos!';
        }

    };
    $id('emails').onblur = function () {



        let email = $id('emails').value;
        email = email.toLocaleLowerCase();
        $id('emails').value = email;


    };
    //Impede que um caractere não permitido em emails seja digitado.
    $id('emails').addEventListener('keypress', function (e) {

        if ((e.charCode >= 48 && e.charCode <= 57) ||
            (e.charCode >= 97 && e.charCode <= 122) ||
            (e.charCode >= 65 && e.charCode <= 90) ||
            (e.charCode >= 45 && e.charCode < 47) ||
            (e.charCode === 95 || e.charCode === 64)) {

            $id('emailSpan').innerHTML = '';



        } else {
            $id('emailSpan').innerHTML = 'Caractere não Permitido!';
            e.preventDefault();
        }

    });
    /*NOVO Jquery*/

    // $('button .cadastrar')
    $('button #butao ').on('click', function () {

        alert('kkk kkk');
    });
    //$name('funcaoPorTagName').addEventListener() {
    //efeito bolha
    var contador = 0;
    document.addEventListener('click', function () {

        $id('contagemDeClique').value = 'Quantos clicks já foram dados ' +
            contador++;

    });

}();
