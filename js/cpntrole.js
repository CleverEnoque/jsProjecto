
let contador = 0;

let input = document.getElementById("inputtarefa");
let btnadd = document.getElementById("btn-add");
let main = document.getElementById("arealist");

function add_tarefa(){
    let valorinput = input.value;
    //se nao for vazio, nulo ou indefinido precorer a funcao for
    if((valorinput !== "") && (valorinput !== null) &&
    (valorinput !== undefined)){

        ++contador;

        let newitem = ` <div id="${contador}" class="item">
        <div onclick = "marcar_tarefa(${contador})" class="item-nome">
            ${valorinput}
        </div>
        <div class="item-botao">
            <button class="delete" onclick = "deletar(${contador})"> <img src="imagens/trash.svg" alt="" srcset=""> Apager</button>
        </div>
    </div>
    ` 
        main.innerHTML += newitem;
        input.value = "";
        input.focus();      
    }
}
function marcar_tarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class')
    console.log(classe)

    if(classe=="item"){
        item.classList.add('clicado')
        item.parentNode.appendChild(item)

    }
    else{
        item.classList.remove('clicado')
    }

}
    

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
} 

input.addEventListener("keyuo", function (event) {
    if(event.keycode === 10){
        event.preventDefault();
         btnadd.click();
    }  
                  
});

