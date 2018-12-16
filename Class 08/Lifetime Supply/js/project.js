document.querySelector("#click-me").onclick = calSolution;

function calSolution() {

    let age = '#age';
    let maxAge = '#max-age';
    let drink = '#item';
    let numPerDay = '#num-per-day';

    let drinksPerYear = numPerDay * 365;
    let yearsLeft = maxAge - age;
    let totalDrinks = drinksPerYear * yearsLeft;

    console.log(`${drinksPerYear} * ${yearsLeft}`)


    document.querySelector('#solution').innerHTML = totalDrinks;
    document.querySelector('#item').innerHTML = drink;
}
