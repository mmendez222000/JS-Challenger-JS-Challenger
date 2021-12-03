let numero = 9229;

function Valor(Pnumero){
    let i = Pnumero.toString().length;
    let j = 0;
    let recibeValor = [0];
    let valor = 0;

    while (i) { 
        recibeValor[j] = String(Pnumero).substring(i-1,i);
        
        i--;
        j++;
    }
    
    if(recibeValor.join('') == Pnumero){
        document.write("Es Numero Palindromo");
    }else{
        document.write("No es Numero Palindromo");
    }
}

Valor(numero);

