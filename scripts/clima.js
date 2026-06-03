





// ══════════════ CLIMA REAL (Open-Meteo) ══════════════
async function fetchWeather(){
  const WX_CODES={0:'☀️ Céu limpo',1:'🌤️ Principalmente limpo',2:'⛅ Parcialmente nublado',3:'☁️ Nublado',45:'🌫️ Névoa',48:'🌫️ Névoa com gelo',51:'🌦️ Garoa leve',53:'🌦️ Garoa moderada',55:'🌧️ Garoa forte',61:'🌧️ Chuva leve',63:'🌧️ Chuva moderada',65:'🌧️ Chuva forte',71:'🌨️ Neve leve',80:'🌦️ Pancadas leves',81:'🌧️ Pancadas moderadas',82:'⛈️ Pancadas fortes',95:'⛈️ Trovoada',99:'⛈️ Trovoada com granizo'};
  try{
    const url='https://api.open-meteo.com/v1/forecast?latitude=-4.27&longitude=-41.78&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation&daily=precipitation_sum&timezone=America%2FFortaleza&forecast_days=1';
    const r=await fetch(url);
    const d=await r.json();
    const c=d.current;
    const temp=Math.round(c.temperature_2m);
    const hum=c.relative_humidity_2m;
    const wind=Math.round(c.wind_speed_10m);
    const rain=c.precipitation??0;
    const cond=WX_CODES[c.weather_code]??'🌡️ Clima variável';
    document.getElementById('wx-temp').textContent=temp+'°C';
    document.getElementById('wx-cond').textContent=cond;
    document.getElementById('wx-hum').textContent='💧 '+hum+'% Umidade';
    document.getElementById('wx-wind').textContent='💨 '+wind+' km/h';
    document.getElementById('wx-rain').textContent='🌧️ '+rain.toFixed(1)+' mm chuva hoje';
  }catch(e){
    document.getElementById('wx-cond').textContent='⚠️ Clima indisponível';
  }
}




module.exports =  fetchWeather;
