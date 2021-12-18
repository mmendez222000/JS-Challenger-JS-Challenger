let arr = "abbcccddddeeeeedcba";
let arr2 = [];
let contador = 1;

for(let i=0; i < arr.length; i++){
  const letraActual = arr[i];
  const LetraSig = arr[i+1]; 
  
  if(letraActual === LetraSig){
    contador++
    arr2.push(contador);
  }else{
    contador = 1;
  }
}

let resultado = arr2.reduce((prev, item)=>{return Math.max(prev,item)});

document.write(resultado);
console.log(resultado);
