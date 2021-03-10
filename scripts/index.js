const h1 = document.querySelector('#titulo')
const a = document.querySelector('article a.botao')
//inner text serve para mudar o texto de uma tag
h1.innerText = "Outro Titulo interno"
//addevent vai adicionar um evendo ao clicar e o prevent vai prevenir que o padrão aconteca, no caso da tag a seria a navegacao. ai inves de navegar, ira disparar um alert
a.addEventListener('click', function(event){
    event.preventDefault()
    alert('fui clicado!')
})