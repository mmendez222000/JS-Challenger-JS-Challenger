function valor(Pcadena){
    
    let cadena =  Pcadena.split("").reverse().join("");
    let valor1 = '';
    let valor2 = '';

    for(i = 0; i < Pcadena.length; i++) { 

        valor1 = Pcadena.substring(0,Pcadena.length - i);
        valor2 = cadena.substring(0 + i,cadena.length);
    
        if (valor1 === valor2){
            return valor1;            
        }else if(Pcadena.substring(i,i+1) === Pcadena.substring(i+1,i+2)){
            return Pcadena.substring(i,i+1) + Pcadena.substring(i+1,i+2);
        }
    }
}

console.log(valor("pabad"));
//console.log(valor("cbbd"));
//console.log(valor("a"));
//console.log(valor("ac"));
