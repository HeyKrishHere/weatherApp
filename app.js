
const KEY = "5e50ae9fa40dd822292c105bed48fb3e";
const URL = "https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=5e50ae9fa40dd822292c105bed48fb3e&units=metric";

let city = document.querySelector(".input");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => getWeatherData(city.value));

async function getWeatherData(city) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
    let data = await res.json();
    console.log(data);

    let temp=data.main.temp;
    let humidity=data.main.humidity;
    let wind=data.wind.speed;
    let cityname=data.name;
    
    document.querySelector(".temp").innerHTML=`${temp}°C`;
    document.querySelector(".humidity").innerHTML=`${humidity}%`;
    document.querySelector(".city").innerHTML=`${cityname}`;
    document.querySelector(".wind").innerHTML=`${wind}km/h`;
};

