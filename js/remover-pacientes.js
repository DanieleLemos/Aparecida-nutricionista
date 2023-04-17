/* removendo apenas pacientes já estabelecidos na tabela

var paciente = document.querySelectorAll(".paciente");

paciente.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo click.");
        this.remove();
    })
}) 
*/

// Para remeover pacientes adicionados pelo form
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = PACIENTE = REMOVER
    
    paiDoAlvo.classList.add("fadeOut");
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500)
    // event.target.parentNode.classList.add("fadeOut");
    // event.target.parentNode.remove();
});