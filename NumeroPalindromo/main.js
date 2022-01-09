function palindromo(str){
    valor = str+'';
    result = valor.split('').reverse().join('');

    if(valor === result){
        console.log(result);
        return true;
    }else{
        return false;
    }
}

palindromo(121);

/*let numero = 9229;

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
        //return true;
        document.write("Es Numero Palindromo");
    }else{
        //return false;
        document.write("No es Numero Palindromo");
    }
}

Valor(numero);
*/