//JS PARA API
const h1 = document.getElementById('temp')
const api = "https://api.open-meteo.com/v1/forecast?latitude=-4.0528&longitude=-39.4544&hourly=temperature_2m&current=temperature_2m";

async function davys() {
   const resposta = await fetch(api);

    if (!resposta.ok) {
      throw new Error("Erro ao buscar dados da API");
    } else {
      const obj = await resposta.json()
      console.log(obj)
      const temp1 = obj.current.temperature_2m
      console.log(temp1)
      h1.innerText = `a temperatura atual em General Sampaio: ${temp1}C°`
      return temp1
    }
 }

davys()
