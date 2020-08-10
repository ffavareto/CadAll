// declaração de variáveis e constantes
const cpf = document.getElementById("cpf");
const rg = document.getElementById("rg");
const data = document.getElementById("data");
const cep = document.getElementById("cep");
const numero = document.getElementById("numero");

// função para permitir apenas caracteres numéricos
function Numeros(e){
    var charCode = e.charCode ? e.charCode : e.keyCode; // caractere pressionado

    if(charCode != 8 && charCode != 9){ // != backspace e tab
        if(charCode < 48 || charCode > 57){ // < 0 ou > 9
            return false;
        }
    }
}

function formataCPF(){
    if(cpf.value.length == 3) this.value += ".";
    if(cpf.value.length == 7) this.value += ".";
    if(cpf.value.length == 11) this.value += "-";
}

function formataRG(){
    if(rg.value.length == 2) this.value += ".";
    if(rg.value.length == 6) this.value += ".";
    if(rg.value.length == 10) this.value += "-";
}

function formataData(){
    if(data.value.length == 2) this.value += "/";
    if(data.value.length == 5) this.value += "/";
}


function formataCEP(){
    if(cep.value.length == 5) this.value += "-";
}

// eventos
cpf.addEventListener("input", formataCPF);
rg.addEventListener("input", formataRG);
data.addEventListener("input", formataData);
cep.addEventListener("input", formataCEP);