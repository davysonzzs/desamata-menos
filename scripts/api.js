//JS PARA API

const api = "https://api.open-meteo.com/v1/forecast?latitude=-4.0528&longitude=-39.4544&hourly=temperature_2m&current=temperature_2m";

 async function davys() {
fetch(api)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API");
    }
    return response.json();
  })
  .then(data => {
    console.log("Dados completos da API:", data);
    
    if (data.current && data.current.temperature_2m !== undefined) {
      console.log("Temperatura atual:", data.current.temperature_2m, "°C");
    } else {
      console.log("Dados de temperatura atual não disponíveis.");
    }
  })
  .catch(error => {
    console.error("Erro na requisição:", error);
  });
 }

 davys()