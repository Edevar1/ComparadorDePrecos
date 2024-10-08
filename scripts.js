/*
[x] Pegar os dados do Input, quando o botão for clicado

[] Ir até o servidor, e trazer os produtos

[] Colocar os produtos na tela
 
[] Criar o gráfico de preços

Parei o video em 23:28

*/

const searchForm = document.querySelector('#search-form')

searchForm.addEventListener ('submit', async function(event){
    event.preventDefault()
    const inputValue = event.target[0].value

    const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`)
    const products = (await data.json()).results.slice(0,10)


    console.log(products)
})