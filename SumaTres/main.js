//forma optima
let a = [-1,0,1,2,-1,-4];

const nums = a.sort((a,b)=>a-b);
const triplets = [];

for(let i = 0; i < nums.length -2; i++){
    const n1 = nums[i];
    let left = i+1;
    let right = nums.length-1;
    if(n1 != nums[i-1]){
        
    }


}


//document.write(nums)


//forma no optima
/*let array = [-1,0,1,2,-1,-4];

    let triplets = [];

    const isAdded = function (arr) {
        return triplets.some(function (a) {
            return a[0] == arr[0] && a[1] == arr[1];
        });
    };

    array.forEach(
        (item1, index1) => {
            const n1 = array[index1];
            array.forEach(
                (item2, index2) => {
                    const n2 = array[index2];
                    if((index1 < index2) ){
                        array.forEach(
                            (item3, index3) => {
                                const n3 = array[index3];
                                if((index2 < index3) ){
                                    
                                    if(n1 + n2 + n3 === 0){
                                        const arr = [n1, n2, n3].sort((a,b)=>a - b);        
                                        //triplets.push(arr);
                                        if(!isAdded(arr)){
                                            triplets.push(arr);
                                          }
                                    }
                                }
                            }
                        );    


                    }
                }
            );
            
        }
    );

document.write(triplets);*/




