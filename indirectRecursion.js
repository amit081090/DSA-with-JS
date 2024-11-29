let money = 100;
let totalApple=0;

function buyApple(x){

    if(x>0){
        console.warn(` i have Rs${x} and ${totalApple}`)

        buyMore(x)
}else{
    console.warn("i dont have more money",totalApple)
}
}

function buyMore(x){
 totalApple++
 buyApple(x-5)

}

buyApple(money);