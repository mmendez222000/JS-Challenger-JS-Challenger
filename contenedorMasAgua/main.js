let litros = [1,2,1];

function contenedor(valores){
  let valorOrigen = 0;
  let calcular = [];
  let ingesarValor = 0;
  let resultado = 0;

  for(let i = 0; i < valores.length; i++){
    valorOrigen = valores[i];
    for(let j = i + 1;  j < valores.length; j++){
      if(valorOrigen <= valores[j]){
        ingesarValor = valorOrigen * (j - i);
        calcular.push(ingesarValor);
      }else{
        ingesarValor = valores[j] * (j - i);
        calcular.push(ingesarValor);
      }
    }
  }
  resultado = calcular.reduce((prev, item)=>{return Math.max(prev,item);},Number.MIN_VALUE);
  document.write(resultado);
}

contenedor(litros);