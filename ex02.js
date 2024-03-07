var penultimo = 0;
var ultimo = 1;
var num = 0;

var valorFib = 233;

while (num <= valorFib){
    num = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = num;
    if(num == valorFib){
        console.log("Numero informado pertence a Fibonnaci");
        break;
    }
    else if(num > valorFib)
        console.log("Numero informado não pertence a Fibonnaci");
}


