const cadena = "abbcccddddeeeeeeedcba";

function valdiar(arr){
  let arr2 = [];
  let contador = 1;
  let resultado;
  let max = 1;

  for(let i=0; i < arr.length; i++){
    const letraActual = arr[i];
    const LetraSig = arr[i+1]; 
    
    if(letraActual === LetraSig){
      contador++
      //arr2.push(contador);
      max = Math.max(max, contador);
    }else{
      contador = 1;
    }
    return max;
  }

  resultado = arr2.reduce((prev, item)=>{return Math.max(prev,item)});

  document.write(resultado);
  console.log(resultado);
}

valdiar(cadena);


