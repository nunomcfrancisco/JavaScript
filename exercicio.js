let numArray = []
let x;
//function para contar o numero de vezes que um numero está no array
function inArray(num, elem){
    let count = 0;
    for(let i = 0; i < num.length; i++){
        if(num[i] === elem){
            count++;
        }
    }
    return count;
}
//function para preencher o array com base nos elementos já existentes excepto o primeiro elemento e qualquer
//outro elemento que se repita 3 vezes
function fillArray(){
    while(numArray.length!==10){
        numArray.includes(x=Math.floor((Math.random()*50)+1)) && x !== numArray[0] && inArray(numArray, x) < 3 ? numArray.push(x) : fillArray();
    }
}
//preencher o array com 5 numeros aleatorios garantindo que não se repetem
while(numArray.length!==5){
    if(!numArray.includes(x=Math.floor((Math.random()*50)+1))){
        numArray.push(x);
    }
}

fillArray(10);
console.log(numArray.sort(function(a,b){return a-b}));