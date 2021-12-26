/*let V_arregloEntrada = [2,8,5,9];

function mostrarDatos(arregloEntrada){
    
    const maximo = 99;
    const minimoDigito = 0;
    const maximoDigito = 9;
    let cantidadDigito = arregloEntrada.length;
    let arregloRetorno = [];
    let obtieneValor = 0;
    let obtieneValor2 = '';
    let obtieneValor3 = 0;
    let error = "0";

    if(cantidadDigito >= minimoDigito && cantidadDigito <= maximo){
        for(i = 0; i < cantidadDigito; i++){
            if(arregloEntrada[i] >= minimoDigito && arregloEntrada[i] <= maximoDigito){
                obtieneValor = arregloEntrada[i];
                obtieneValor2 += obtieneValor;
            }else{
                error = "No cumple con los requisitos: digito permitido de " + minimoDigito + " a " + maximoDigito;
            }
        }
    }else{
        error = "No cumple con los requisitos: valor permitido de 1 al " + maximo;
    }

    if(error == "0"){
        obtieneValor3 = parseInt(obtieneValor2) + 1;
    
        for(i = 0; i < cantidadDigito; i++){
            arregloRetorno[i] = String(obtieneValor3).substring(i,i+1);
            document.write(arregloRetorno[i]);
        }
    }else{
        document.write(error);
    }

    
}

mostrarDatos(V_arregloEntrada);
*/

const array = [1,3,9];

function sumarUno(arr){
    let num = arr.join("");
    num++;
    let result = Array.from(String(num), Number);
    return result;
}

console.log(sumarUno(array));



