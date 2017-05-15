const API_KEY= "9a3eddcad2699859b7b8f625c862908d"
const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?zip='

const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const weather = document.querySelector('.weather')
const zip = document.querySelector('.zip')

function getWeather(zipCode) {
  $.ajax({
    url:rootUrl+ zipCode + ',us&appid=' + API_KEY,
    success: function(response) {
      console.log(response)
      city.textContent = response.name
      temp.textContent = Math.round(response.main.temp * 9/5 -459.67)
      weather.textContent = response.weather[0].description
    }
  })
}

getWeather('33130')

zip.addEventListener('keypress', function (event) {
  if(event.keyCode === 13)  {
    getWeather(zip.value)
  }

})
