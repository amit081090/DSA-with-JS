let arr1=[1,2,3,4,5,6,7]
let arr2=[8,9,10,11,12,13]

let arr3=[];

for (let i=0;i<arr1.length;i++){

 arr3[i]=arr1[i];
}

for (let i=0;i<arr2.length; i++){
    
    arr3[arr1.length+i]=arr2[i]

}

 console.warn(arr3);