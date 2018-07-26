const fs = require("fs");

function erroDeLeitura(erro){
    if(erro){
        console.log("Erro identificado")
        console.log(erro);
    }
    else{
        console.log("Arquivo lido com sucesso")
    }
}

let texto = fs.readFile('teste.txt', erroDeLeitura);

console.log("Função executada com sucesso")

