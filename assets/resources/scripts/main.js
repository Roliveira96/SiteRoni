 + function () {
     'use strict';
     window.load = inciar();
     // uso do confirm, alert, console

     do {
         var q = confirm('Você tem que ser maior de idade para acersar este site!');
         if (q) {
             alert('Bem Vindo');
             console.log('Bem vindo Programador foitibora');
         } else {
             alert('Feche o navegador e vá estudar!');
         }
     } while (!q);


     //pessoaDoForm = JSON.parse(localStorage.getItem('PessoaObjeto'));


     //Materialize
     function inciar() {

         $('.parallax').parallax();
         $(".button-collapse").sideNav();
         $('.collapsible').collapsible();
         $('select').material_select();
         $('.slider').slider();


     }


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

     //focus no nome
     // $id('inputNome').focus();


     //Impedir Digitar letras e caracteres nos Input Nome 

     $id('inputNome').addEventListener('keypress', function (e) {

         if ((e.charCode >= 97 && e.charCode <= 122 || e.charCode == 32) || (e.charCode >= 65 && e.charCode <= 90 || e.charCode == 32)) {
             $id('nomeSpan').innerHTML = '';

         } else {
             $id('nomeSpan').innerHTML = 'Somente letras são permitidas!';
             e.preventDefault();
         }
     });


     //Impede que o campo nome fique vazio
     $id('inputNome').onblur = function () {
         if ($id('inputNome').value === null || $id('inputNome').value === '')
             $id('nomeSpan').innerHTML = 'Este campo é nescessário';
     };


     //Impede que o campo sobrenome fique vazio
     $id('inputSobreNome').onblur = function () {
         if ($id('inputSobreNome').value === null || $id('inputSobreNome').value === '')
             $id('sobreSpan').innerHTML = 'Este campo é nescessário';

     };
     //Impede que o campo Email fique vazio
     $id('email').onblur = function () {
         if ($id('email').value === null || $id('email').value === '')
             $id('emailSpan').innerHTML = 'Este campo é nescessário';

     };

     //Impedir Digitar letras e caracteres nos Input SobreNome 

     $id('inputSobreNome').addEventListener('keypress', function (e) {

         if ((e.charCode >= 97 && e.charCode <= 122 || e.charCode == 32) || (e.charCode >= 65 && e.charCode <= 90 || e.charCode == 32)) {
             $id('sobreSpan').innerHTML = '';

         } else {
             $id('sobreSpan').innerHTML = 'Somente letras são permitidas!';
             e.preventDefault();
         }
     });



     //Impede que no campo idade seja digitados letras.
     //INPENDE numeros menores que 4 e maiores que 110;

     $id('inputIdade').addEventListener('keypress', function (e) {
         //Aqui evita que o 0 seja dijitado no inicio do form transformando em um array eleminando
         //o primeiro valor.


         if ($id('inputIdade').value[0] === 0) {

             let numero = $id('inputIdade').value;
             let res = new Array();

             for (let i = 0; i < numero.length; i++) {
                 res[i] = numero.charAt(i);
             }
             console.log(res);
             res.shift();

             $id('inputIdade').value = res.join('');
             console.log($id('inputIdade').value);

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
     $id('inputIdade').addEventListener('keyup', function (e) {

         let idade = $id('inputIdade').value;
         //Impede que numeros menores que 4 e maiores que 109 sejam digitados
         if ((idade < 4) || (idade > 110)) {
             $id('idadeSpan').innerHTML = 'Idade informada incorreta';
             if ($id('inputIdade').value.length > 3) {
                 $id('inputIdade').value = '';

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
     $id('inputFone').addEventListener('keypress', function (e) {

         //Impede que letras e qualquer coisa que não seja numeros seja digitado

         if ((e.charCode >= 48 && e.charCode <= 57)) {
             $id('foneSpan').innerHTML = '';

         } else {
             $id('foneSpan').innerHTML = 'Somente Numeros são Permetido!';
             e.preventDefault();
         }

     });

     //IMPEDE QUE LETRA SEJAM DIGITADAS NO CAMPO WHATS
     $id('inputWhats').addEventListener('keypress', function (e) {

         //Impede que letras e qualquer coisa que não seja numeros seja digitado

         if ((e.charCode >= 48 && e.charCode <= 57)) {
             $id('whatSpan').innerHTML = '';

         } else {
             $id('whatSpan').innerHTML = 'Somente Numeros são Permetido!';
             e.preventDefault();
         }

     });
     //$id('inputFone').onkeyup = vereficaNumero('inputFone');
     $id('inputWhats').onblur = function () {


         console.log($id('inputWhats').value);
         let fone = $id('inputWhats').value;
         console.log(fone.length);
         //Verefica se o numero digitado é maior ou menor que o permetido
         if (fone.length === 10) {
             $id('whatSpan').innerHTML = '';
         } else {
             $id('whatSpan').innerHTML = 'Numero de Telefone incorreto\nVerefique se tá certo a quantidade de digitos!';
         }

     };
     $id('inputFone').onblur = function () {


         console.log($id('inputFone').value);
         let fone = $id('inputFone').value;
         console.log(fone.length);
         //Verefica se o numero digitado é maior ou menor que o permetido
         if (fone.length === 10) {
             $id('foneSpan').innerHTML = '';
         } else {
             $id('foneSpan').innerHTML = 'Numero de Telefone incorreto\nVerefique se tá certo a quantidade de digitos!';
         }

     };
     $id('email').onblur = function () {



         let email = $id('email').value;
         email = email.toLocaleLowerCase();
         $id('email').value = email;


     };
     //Impede que um caractere não permitido em emails seja digitado.
     $id('email').addEventListener('keypress', function (e) {

         if ((e.charCode >= 48 && e.charCode <= 57) ||
             (e.charCode >= 97 && e.charCode <= 122) ||
             (e.charCode >= 65 && e.charCode <= 90) ||
             (e.charCode >= 45 && e.charCode < 47) ||
             (e.charCode == 95 || e.charCode == 64)) {

             $id('emailSpan').innerHTML = '';



         } else {
             $id('emailSpan').innerHTML = 'Caractere não Permitido!';
             e.preventDefault();
         }

     });


     //Criando o Objeto usando class

     function Pessoa(nome, idade) {
         this.nome = nome;
         this.idade = idade;

     }

     var fulano = new Pessoa('Fulano', '24');
     console.log(fulano.nome);

     // debugger
     // funcção que se for clicado cria o objeto
     $id('enviar').onclick = function () {



         console.log('<------ << Objeto Pessoa >> ------>');
         let nome = $id('inputNome').value;
         console.log('Nome: ' + nome);

         let sobrenome = $id('inputSobreNome').value;
         console.log('Sobrenome: ' + sobrenome);

         let idade = $id('inputIdade').value;
         console.log('Idade: ' + idade);

         let sexo = $id('sexo').value;
         console.log('Sexo: ' + sexo);

         let telefone = $id('inputFone').value;
         console.log('Telefone: ' + telefone);

         let whats = $id('inputWhats').value;
         console.log('Whats: ' + whats);

         let email = $id('email').value;
         console.log('Email: ' + email);

         //Pegando pessoa por herança

         var pessoa = Object.create(fulano);

         //Inserindo dados esqueci o nome do modo
         pessoa.nome = nome;
         pessoa.sobrenome = sobrenome;
         pessoa.idade = idade;
         pessoa.sexo = sexoMove(sexo);
         pessoa.telefone = telefone;
         pessoa.whats = whats;
         pessoa.email = email;

         if (pessoa.nome === '' ||
             pessoa.sobrenome === '' ||
             pessoa.idade == '' ||
             pessoa.telefone === '' ||
             pessoa.email == '') {
             pessoa.validador = false;
         } else {
             pessoa.validador = true;
         }
         console.log('Validador ' + pessoa.validador);
         console.log(pessoa);

         //Tentando Salvar Algo no JSON kkk
         //Enviando Para o localStorage
         localStorage.setItem('PessoaObjeto', JSON.stringify(pessoa));

         //Função para retorna o sexo para o Objeto
         function sexoMove(sexo) {

             switch (sexo) {
                 case '1':
                     return 'Masculino'
                     break;
                 case '2':
                     return 'Femenino'
                     break;
                 case '3':
                     return 'Anônimo'
                     break;
                 default:
                     return 'Error de Sexo cod. 11';
             }
         }

         //Restaurando do LocalStorege
         var pessoaJson = JSON.parse(localStorage.getItem('PessoaObjeto'));

         console.log(pessoaJson);

         window.location.assign('mundodosgames.html');

     };



 }();
