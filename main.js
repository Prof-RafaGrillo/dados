const url = ""

async function visualizarDados(){
    const res = await fetch(url)
    const dados = await res.json()
    regiao = 0
    resultado_dados = (dados[0]['resultados'][0]["series"][regiao]['serie'])
    resultado_regiao = (dados[0]['resultados'][0]["series"][regiao]["localidade"]['nome'])
    
  
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos--container__texto')
    paragrafo.innerHTML ="Aqui será colocado os dados obtidos no site do IBGE"
    console.log(paragrafo)
    const container = document.getElementsById('graficos--container')

    container.appendChild(paragrafo)

}   


visualizarDados()
  