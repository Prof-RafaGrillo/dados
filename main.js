const url = ""

async function visualizarDados(){
    const res = await fetch(url)
    const dados = await res.json()
    regiao = 0
     resultado_dados = (dados[0]['resultados'][0]["series"][regiao]['serie'])
    resultado_regiao = (dados[0]['resultados'][0]["series"][regiao]["localidade"]['nome'])
    console.log(resultado_dados, resultado_regiao)
  
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos--container__texto')
    paragrafo.innerHTML ="Aqui será colocado os dados obtidos no site do IBGE"

    const container = document.getElementsById('graficos--container')

    container.appendChild(paragrafo)

}   


  visualizarDados()
  