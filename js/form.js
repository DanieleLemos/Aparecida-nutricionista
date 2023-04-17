// adicionando novos pacientes na tabela

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();

        var form = document.querySelector("#form-adiciona");
        
        // extraindo informações do paciente do form
        var paciente = obtemPacienteDoFormulario(form);
        
        var erros = validaPaciente(paciente);
        console.log(erros);
        if (erros.length > 0){
            exibeMensagemDeErro(erros);
            return; 
        }

        adicionaPacienteNaTabela(paciente);

        form.reset(); 
        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
     // cria a Tr e a Td do paciente 
     var pacienteTr = montaTr (paciente);
    // adicionando o paciente na tabela 
     var tabela = document.querySelector("#tabela-pacientes");

     tabela.appendChild(pacienteTr);

}


function exibeMensagemDeErro(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
   
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro; 
        ul.appendChild(li);
        
    });
}

function obtemPacienteDoFormulario (form){

    var paciente ={
    nome:form.nome.value,
    peso:form.peso.value,
    altura:form.altura.value,
    gordura:form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente; 
}

function montaTr (paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd (dado,classe){

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td; 
}

function validaPaciente (paciente){
    
    var erros =[];
   
    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido.")
    }

    if (!validaAltura(paciente.altura)){
       erros.push("A altura é inválida");
    }

    if (paciente.nome.length == 0){
        erros.push("Favor incluir um nome.")
    }
   
    if (paciente.peso.length == 0){
        erros.push("Favor incluir um peso");
    }

    if (paciente.altura.length == 0){
        erros.push("Favor incluir uma altura");
    }

    if (paciente.gordura.length == 0){
        erros.push("Favor incluir uma % de gordura");
    }
    return erros; 
}

