async function getJSON() {
    city = document.getElementById('city').value;
    state = document.getElementById('state').value;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${api_key}`)
        .then(data => data.json())
        .then(rawData => {
            //current temp
            let temp = rawData.main.temp;
            var temp_f = Math.floor(temp - 273.15) * 9 / 5 + 32
            console.log(temp_f);
            document.getElementById(`current`).innerHTML = 'Current Temp: ';
            document.getElementById(`temp`).innerHTML = temp_f + '°F';

            //high temp
            let high = rawData.main.temp_max;
            var high_f = Math.floor(high - 273.15) * 9 / 5 + 32;
            console.log(high_f);
            document.getElementById(`high`).innerHTML = high_f + '°F';

            //low temp
            let low = rawData.main.temp_min;
            var low_f = Math.floor(low - 273.15) * 9 / 5 + 32;
            console.log(low_f);
            document.getElementById(`low`).innerHTML = low_f + '°F';

            //forecast
            let forecast = rawData['weather'][0].description;
            console.log(forecast);
            document.getElementById(`forecast`).innerHTML = forecast;

            //humidity
            let humidity = rawData.main.humidity;
            console.log(humidity);
            document.getElementById(`humidity`).innerHTML = humidity + '%';

        })

        .catch(error => {
            if (error) {
                //display error message
                document.getElementById('error').innerHTML = 'Please enter a valid city and state';

                //remove error message after 10 seconds
                setInterval(function () {
                    document.getElementById("error").style.display = 'none';
                }, 5000); 
                
            }
        })
    //reset form fields
    document.getElementById("inputForm").reset();

}