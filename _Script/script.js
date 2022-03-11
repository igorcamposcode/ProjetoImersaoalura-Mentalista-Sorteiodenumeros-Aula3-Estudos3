
var numeroSecreto = parseInt(Math.random() * 21 ); 

 function Chutar(){

    var elementoResultado = document.getElementById("resultado");
     var chute = parseInt(document.getElementById("valor").value);
     console.log(chute);

     if (chute == numeroSecreto){
        elementoResultado.innerHTML = "Parabéns, você acertou... ";
     } else if(chute > 20 || chute < 0){ 

        elementoResultado.innerHTML = "Vocês devem digitar um número de 0 a 20";

     }else{
        elementoResultado.innerHTML = "Triste que você errou, tente novamente";
     }
 }

var numeroSecreto2 = parseInt(Math.random() * 41);

 function Chutar2() {
    var elementoResultado2 = document.getElementById("resultado2");
      var chute2 = parseInt(document.getElementById("valor2").value);
      console.log(chute2);

      if (chute2 == numeroSecreto2){
          elementoResultado2.innerHTML = "Parabéns, você acertou... ";
      }else if (chute2 >40 || chute2 < 0){
          elementoResultado2.innerHTML = "Vocês devem digitar um (2) número de 0 a 40";
      }else {
          elementoResultado2.innerHTML = "Triste que você errou, tente novamente";
      }
 }

 var numeroSecreto3 = parseInt(Math.random() * 71);

  function Chutar3() {
      var elementoResultado3 = document.getElementById("resultado3");
        var chute3 = parseInt(document.getElementById("valor3").value);
        console.log(chute3);

        if (chute3 == numeroSecreto3) {
            elementoResultado3.innerHTML = "Parabéns, você acertou... ";
        }else if (chute3 > 70 || chute3 < 0){
            elementoResultado3.innerHTML = "Vocês devem digitar um (2) número de 0 a 70";
        }else {
            elementoResultado3.innerHTML = "Triste que você errou, tente novamente";
        }
  }

  var numeroSecreto4 = parseInt(Math.random() * 101);

  function Chutar4() {
      var elementoResultado4 = document.getElementById("resultado4");
        var chute4 = parseInt(document.getElementById("valor4").value);
        console.log(chute4);

        if (chute4 == numeroSecreto4) {
            elementoResultado4.innerHTML = "Parabéns, você acertou... ";
        }else if (chute4 > 100 || chute4 < 0){
            elementoResultado4.innerHTML = "Vocês devem digitar um (2) número de 0 a 70";
        }else {
            elementoResultado4.innerHTML = "Triste que você errou, tente novamente";
        }
  }