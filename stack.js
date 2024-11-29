let data=[];
let currentSize=data.length;
let max=5;

function push(newVal){

    // if(currentSize>=max){

    //     alert("you can not add" +newVal)
    // }

    data[currentSize]=newVal

   currentSize+=1;

   console.log(data)
}


function pop(){

    if (currentSize>0){

        currentSize-=1;
        data.length=currentSize;
    }else{
        alert("stack is alredy empty")
    }
}


//console.log(alert)



push(20)
push(30)
push(40)
push(50)
push(60)
push(70)
pop()
pop()
pop()