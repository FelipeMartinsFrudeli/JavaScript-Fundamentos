
    function calcBaskara(valora, valorb, valorc) {
      
      var quadradodeb = valorb * valorb;

      console.log(quadradodeb);

      var delta = quadradodeb - 4 * valora * valorc;

      console.log(delta);

      if (delta < 0) {
        console.log("Não é possível calcular pois o Delta é menor que zero.");
        return;
      }

      if (delta == 0) {
        console.log("O Delta é zero, portando os valores de X1 e X2 serão iguais.");
        return;
      }

      var valordebneg = valorb * (-1); /* INVERTE O SINAL DO B */

      var raizdedelta = Math.sqrt(delta); /* CALCULA A RAIZ DO DELTA, NO CASO, FEITO PELA FUNÇÃO Math.sqrt(variável) */

      var divisor = 2 * valora; /* CALCULA O DIVISOR, NO CASO QUE DIVIDIRÁ B + RAIZ DE DELTA */

      var resultadox1 = (valordebneg + raizdedelta) / divisor; /* CALCULA O X1 */

      var resultadox2 = (valordebneg - raizdedelta) / divisor; /* CALCULA O X2 */


        console.log("∆ = B² - 4 X A X C");
        console.log("∆ = " + quadradodeb + " - 4 X " + valora + " X " + valorb);
        console.log("∆ = " + delta);

        console.log("X = -B +ou- √∆ __________________      2 X A");
        console.log(" X = " + valordebneg + " +ou- " + raizdedelta + "____________________      2 X " + valora);
        console.log("X1 = " + quadradodeb + " + " + raizdedelta + " / " + divisor);
        console.log("X1 = " + resultadox1);

        console.log("X2 = " + quadradodeb + " - " + raizdedelta + " / " + divisor);
        console.log("X2 = " + resultadox2);
    }

calcBaskara(10, 30, 20)
