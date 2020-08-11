// constantes de elementos da DOM
const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const rg = document.getElementById("rg");
const data = document.getElementById("data");
const cep = document.getElementById("cep");
const cidade = document.getElementById("cidade");
const rua = document.getElementById("rua");
const numero = document.getElementById("numero");
const bairro = document.getElementById("bairro");
const salvar = document.getElementById("salvar");
const limpar = document.getElementById("limpar");

// variáveis para validação de campos
var minLength = 0
var maxLength = 0;

var invalidos = [];
var todosInvalidos = "";
var i = 0;

var vazios = 0;

// função para impedir a inserção de caracteres numéricos no input
function Numeros(e){
    var charCode = e.charCode ? e.charCode : e.keyCode; // caractere pressionado

    if(charCode != 8 && charCode != 9){ // != backspace e tab
        if(charCode < 48 || charCode > 57){ // < 0 ou > 9
            return false;
        }
    }
}

// função para inserir . e - no CPF
function formataCPF(){
    if(cpf.value.length == 3) this.value += ".";
    if(cpf.value.length == 7) this.value += ".";
    if(cpf.value.length == 11) this.value += "-";
}

// função para inserir . e - no RG
function formataRG(){
    if(rg.value.length == 2) this.value += ".";
    if(rg.value.length == 6) this.value += ".";
    if(rg.value.length == 10) this.value += "-";
}

// função para separar a data com /
function formataData(){
    if(data.value.length == 2) this.value += "/";
    if(data.value.length == 5) this.value += "/";
}

// função para inserir - no CEP
function formataCEP(){
    if(cep.value.length == 5) this.value += "-";   
}

// função para invalidar campos
function trocaEstilo(){
    switch(this.name){ // definição de parâmetros
        case "Nome":
           minLength = 3;
           maxLength = 50;
           break;

        case "CPF":
           minLength = 14;
           maxLength = 14;
           break;

        case "RG":
           minLength = 12;
           maxLength = 12;
           break;

        case "Data":
           minLength = 10;
           maxLength = 10;
           break;

        case "CEP":
           minLength = 9;
           maxLength = 9;
           break;

        case "Cidade":
           minLength = 3;
           maxLength = 40;
           break;

        case "Rua":
           minLength = 3;
           maxLength = 50;
           break;

        case "Número":
           minLength = 1;
           maxLength = 7;
           break;

        case "Bairro":
           minLength = 3;
           maxLength = 30;
           break;
    }

    // mudança de estilo do campo
    if(this.value.length < minLength || this.value.length > maxLength){
        this.style.borderColor = "red";
        this.style.backgroundColor = "#FFB6C1";

        invalidos.push({nome: this.name});
    }

    // normalização de estilo de campo válido
    else{
        this.style.borderColor = "white";
        this.style.backgroundColor = "white";

       // remoção de campos validados do alerta
       for(i = 0; i < invalidos.length; i++){
           if(invalidos[i].nome == this.name) invalidos.splice(i, 1);
       }

       vazios += 1;
    }
}

// função para exibir campos inválidos em alerta
function validaForm(){
    todosInvalidos = "";

    if(vazios < 9){
        alert("Preencha todos os campos!");
    }

    else if(invalidos.length > 0){
        for(i = 0; i < invalidos.length; i++){
            todosInvalidos += "\n"+ invalidos[i].nome;
        }
    
        alert("Preencha esses campos corretamente: "+todosInvalidos);
    }

    else{
        alert("Cadastro efetuado com sucesso!");
    }
}

function limpaForm(){
    vazios = 0;
}

// eventos para formatar campos
cpf.addEventListener("input", formataCPF);
rg.addEventListener("input", formataRG);
data.addEventListener("input", formataData);
cep.addEventListener("input", formataCEP);

// eventos para mudar o estilo de campos invalidos
nome.addEventListener("change", trocaEstilo);
cpf.addEventListener("change", trocaEstilo);
rg.addEventListener("change", trocaEstilo);
data.addEventListener("change", trocaEstilo);
cep.addEventListener("change", trocaEstilo);
cidade.addEventListener("change", trocaEstilo);
rua.addEventListener("change", trocaEstilo);
numero.addEventListener("change", trocaEstilo);
bairro.addEventListener("change", trocaEstilo);

// eventos para validar o envio
salvar.addEventListener("click", validaForm);
limpar.addEventListener("click", limpaForm);
