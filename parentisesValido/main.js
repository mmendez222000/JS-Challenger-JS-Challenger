let input = '()';

function Validador(valores){
  let arr = ['(',')','[',']','{','}'];
  let arr1 = [];
  let valor = ''

  for(let i = 0; i < valores.length; i++){
    valor = valores.substring(i,i+1);
    
    arr1[i] = arr.indexOf(valor)+1;
  }

  if(arr1.length == 2){
    let comparar = arr1[1] - arr1[0]

    if(comparar == 1){
      document.write('Correcto');
    }else{
      document.write('Incorrecto');
    }
  }
 
}

Validador(input);