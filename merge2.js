let arr1 =[1,2,3,4,5,6,7];
let arr2=[8,9,10,11];

let arr3=[];

while(arr3.length<=arr1 && arr3.length<=arr2){

    if(arr1[i]<arr2[i]){

        arr3=arr1[i]

    }else{

        arr3=arr2[i]
    }

}

console.log(arr3)