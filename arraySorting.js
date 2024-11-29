let arr1=[5,4,8,9,6,2]

let sort=[]
for(let i=0;i<arr1.length;i++){

    if(arr1[i]>arr1[i+1]){

        sort[i]=arr1[i]
    }else{

        sort[i]=arr1[i+1]

    }
}

console.log(sort)