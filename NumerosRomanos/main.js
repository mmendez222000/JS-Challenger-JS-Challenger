function convert(valor){

    const conversion = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let acum = 0;
    let val = 0;

    for(let i = 0; i < valor.length; i++){

        val = conversion[valor.substring(i,i+1)];
        val1 = conversion[valor.substring(i+1,i+2)];

        if(val1 > val){
            acum = acum + (val1 - val);    
            i++;
        }else{
            acum = acum + val;
        }
    }

    return acum;
}

const numRomano = 'MCMXCIV';
//const numRomano = 'LVIII';
//const numRomano = 'CXV';

console.log(convert(numRomano));


