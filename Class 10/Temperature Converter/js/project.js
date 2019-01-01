document.querySelector('#calculate').onclick = calSolution

function calSolution() {

    let temperature = document.querySelector('#fahrenheit').value;

    let degrees = (temperature-32)/1.8;
    let degreesCelsius = degrees.toFixed(1);  

    console.log(degreesCelsius)

    document.querySelector('#celsius').innerHTML= degreesCelsius;

    let currentTemperature = degreesCelsius;

    if (currentTemperature <=6.1) {
        document.body.style.backgroundImage = 'url(images/winter.jpeg)'
    }   else if (currentTemperature >=13.8) {
            document.body.style.backgroundImage = 'url(images/spring.jpeg)'
    }   else if (currentTemperature <= 18.3) {
        document.body.style.backgroundImage = 'url(images/fall.jpeg)'
    }   else if (currentTemperature >= 26.6) {
        document.body.style.backgroundImage = 'url(images/summer.jpeg)'
    }

}