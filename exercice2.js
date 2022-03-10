const nb=0;
const text1="Techzara";
const text2="Javascript";
let motRepet="";
let result="";

if(nb<0){
    for(let i=nb;i<0;i++){
        motRepet=motRepet+text1
    }
    result=motRepet+text2
}else if(nb>0){
    for(let j=0;j<nb;j++){
        motRepet=motRepet+text2
    }
    result=text1+motRepet
}else{
    result=text1+text2
}

console.log(result)


