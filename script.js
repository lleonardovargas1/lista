const input = document.getElementById('itemInput');  
const botao = document.getElementById('addbutton');
const lista = document.getElementById('itemList'); // aqui eu criei uma variável para o elemento que contém a lista de tarefas

function fernanda() {
    if (input.value.trim() === "") { //aqui eu verifico se o valor do input está vazio 
    // se ele estiver vazio ele exibe um alerta pedindo para o usuário digitar uma tarefa
        alert("Por favor, digite uma tarefa!"); 
        return; // esse return faz com que a função pare de ser executada no caso a função fernanda
  }

 
    const novoItem = document.createElement('div');
    novoItem.classList.add('item');  // aqui eu criei uma div com a classe item para eu usar em cada tarefa

    const textoTarefa = document.createElement('span'); // aqui eu criei um span para colocar o texto da tarefa para que ele ficasse dentro do meu novoItem
    // que no caso é a div que eu criei para cada tarefa e nao ficar solto ou embaixo do botao de deletar para nao "quebrar a linha e deixar feio"
    textoTarefa.textContent = input.value; // aqui eu coloquei o texto que o usuário digitou no input dentro do span que é o texto da tarefa
    textoTarefa.classList.add('texto-tarefa'); // aqui eu adicionei uma classe para o texto da tarefa para eu poder estilizar no css
    const botaoDeletar = document.createElement('button'); // aqui eu crie um botao de deletar no html para o usuário poder deletar a tarefa
    botaoDeletar.textContent = 'Deletar'; // aqui eu botei dentro do botao o texto deletar
    botaoDeletar.classList.add('delete-button'); // aqui eu criei uma classe para o botao deletar 
    botaoDeletar.addEventListener('click', () => { // aqui eu usei uma arrow function  e um evento de click para remover  o elemento 
    // filho que no caso e uma li nova que é uma  tarefa 

        lista.removeChild(novoItem);
         //  essa lista que no caso e a nossa div vai remover o nosso novoItem que no caso é a nossa  nova (div) que é a tarefa que foi criada
         //entao aqui é assim a nossa div que virou a const lista esta removendo uma div que no caso e a nossa const novoItem

    });

  
    novoItem.appendChild(textoTarefa);  // Aqui, nossa div (novoItem) vai adicionar um elemento filho que no caso é o textoTarefa.
    // O  nosso textoTarefa é o <span> que contém o texto da tarefa digitado pelo usuário no input.
   
    novoItem.appendChild(botaoDeletar); // aqui e a mesma coisa so que com o botao de deletar, nossa div (novoItem) vai adicionar um elemento filho que
    // no caso é o botaoDeletar que é o botao de deletar a tarefa que foi criada pelo usuário


    lista.appendChild(novoItem);


    input.value = ''; // aqui zera o valor que o usuário digitou no depois que ele clicar no botao addbutton
    // esse value é o valor do input que no caso é o texto que o usuário digitou
}

botao.addEventListener("click", fernanda); // quando nosso usuario clicar no botao  addbutton ele vai chamar a funcao 
//fernanda que é a nossa função que adiciona uma nova tarefa 