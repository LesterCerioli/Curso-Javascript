

//quando queremos comparar apenas o valor, apenas
let a = 10;
const b = "20";

console.log(a == b);

//quamdo queremos comparar o valor e o seu contexto como por exemplo se são uma string e também quanto ao valor numérico
//em Javascript um número pode ser uma letra e para isto usamos parâmetros
//pois o Javascript é fracame tipado e neste caso usamos recursos específicos
//no caso do C# podemos declarar os tipos de dados pois C# é fortemente tipado



//operador de atribuição
console.log(a = b);

//operador de comparação
console.log(a !== b);
console.log(a != b);
console.log(a === b);

//operadores lógicos

//usando AND

console.log(a == b && typeof b == 'string');


//usando OR
console.log(a == b || typeof b == 'string');

let cor = "verde";
if (cor == "verde"){
    console.log("Siga")

//senão
}else {
    console.log("pare");
}


//no caso de um semáforo aonde temos diversas condições

let cor = "verde";
if (cor == "verde"){
    console.log("Siga");

//senão
}else if (cor == "amarelo") {
    console.log("atenção");
}


}else if (cor == "vermelho") {
    console.log("pare");
}
