
        let data=[0,45,65,22,21,51,45,63,85]
        let find=145;
        let pos=undefined;

        for(let i=0;i<=data.length;i++){

            if(data[i]==find){
                pos=i
                break;
            }
        }

        console.log(pos)
  