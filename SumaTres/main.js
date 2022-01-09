/*function threeSum (a) {
    const nums = a.sort((a, b) => a - b);
    const triplets = [];
    console.log(nums)
    for (let i = 0; i < nums.length - 2; i++) {
      const n1 = nums[i];
      let left = i + 1;
      let right = nums.length - 1;
      if (n1 != nums[i - 1]) {
        while (left < right) {
          const n2 = nums[left];
          const n3 = nums[right];
          const sum = n1 + n2 + n3;
  
          if (sum === 0) {
            triplets.push([n1, n2, n3]);
  
            left++;
            right--;
          } else if (sum < 0) {
            left++;
          } else if (sum > 0) {
            right--;
          }
        }
      }
    }
    console.log(triplets);
    return triplets;
  };

  threeSum([-1,0,1,2,-1,-4]);
*/

//forma no optima
let array = [-1,0,1,2,-1,-4];

    let triplets = [];

    const isAdded = function (arr) {
        return triplets.some(function (a) {
            console.log(a[0])
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
    console.log(triplets);
document.write(triplets);




