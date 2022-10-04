const API_KEY = 'd7951562247533f4ceb579f10fcec55d'
axios.get('https://api.openweathermap.org/data/2.5/weather',{
    params: {
        lat: 44.34,
        lon: 10.99,
        appid : API_KEY
    }

})
  .then(response => console.log(response))