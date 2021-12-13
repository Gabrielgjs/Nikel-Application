const nome = "Gabriel Jesus";
let nome2 = "";
let pessoaDefault = {
    nome: "Gabriel jesus",
    idade: "29",
    trabalho: "progamador"
}

let nomes = ["Marcelo Eltz", "Maria silva", "João abner"]; 
let pessoas =  [
    {
        nome: "Gabriel jesus",
        idade: "29",
        trabalho: "progamador"
    }, 
    {
        nome: "Manoeo silva",
        idade: "45",
        trabalho: "Cozinheiro"
    },
    {
        nome: "Daniele jesus",
        idade: "35",
        trabalho: "Investidora"
    }
]; 

function alterarNome() {
    nome2 ="Maria Silva";
    console.log("valor alterado: ")
    console.log(nome2);
}

function recebeAlteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome: ")
    console.log(nome2); 
}

function imprimirPessoa(pessoa) {
    console.log(pessoa)
    console.log("Nome:")
    console.log(pessoa.nome)

    console.log("idade:")
    console.log(pessoa.idade)

    console.log("trabalho:")
    console.log(pessoa.trabalho)
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}

function imprimirPessoas(){
    console.log("--------------------IMPRIMIR PESSOAS------------------")
    pessoas.forEach((item) =>{
        console.log("Nome:"); 
        console.log(item.nome);

        console.log("idade:")
        console.log(item.idade)

        console.log("trabalho:")
        console.log(item.trabalho)
    })
    console.log("--------------------##############------------------")
}

imprimirPessoas();

adicionarPessoa({
    nome: "Anderson Silva",
    idade: "41",
    trabalho: "Lutador"
})

console.log(pessoas)

//console.log(pessoas);

//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome: "Daniele jesus",
//     idade: "35",
//     trabalho: "Investidora"
// });

//recebeAlteraNome("joão abner");
//recebeAlteraNome("Maria SIlva");

//alterarNome();

