var input = document.querySelector('.search')
var capital = document.querySelector('.capital')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var temp = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var humidity = document.querySelector('.humidity span')
var img = document.querySelector('body')


function changeWeatherUI(weather) {
    capital.innerHTML = weather.name
    country.innerHTML = weather.sys.country
    time.innerHTML = new Date().toLocaleString()
    shortDesc.innerHTML = weather.weather[0].main
    visibility.innerHTML = weather.visibility + ' m'
    wind.innerHTML = weather.wind.speed + ' m/s'
    humidity.innerHTML = weather.main.humidity+ ' %'
    const degree = Math.round(weather.main.temp - 273.15)
    temp.innerHTML = degree
    if(degree >= 25) {
        img.classList.add('hot')
        img.classList.remove('cold')
    }
    if(degree < 25) {
        img.classList.add('cold')
        img.classList.remove('hot')
    }
}

async function getWeather(input) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d44a5c4e24449315e818659aa01c444f`
    const res = await fetch(url)
    const data = await res.json()
    changeWeatherUI(data)
}

getWeather('Ha noi')

input.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        getWeather(e.target.value)
    }
})

