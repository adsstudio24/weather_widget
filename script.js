async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) return alert("Введіть місто!");
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    const data = await response.json();
    document.getElementById("weather").innerText = `🌡️ Температура: ${data.main.temp}°C`;
}
