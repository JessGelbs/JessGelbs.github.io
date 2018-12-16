document.querySelector("#click-me").onclick = calSolution;

function calSolution() {

    let age = document.querySelector('#age').value;
    let maxAge = document.querySelector('#max-age').value;
    let drink = document.querySelector('#item').value;
    let numPerDay = document.querySelector('#num-per-day').value;

    let drinksPerYear = numPerDay * 365;
    let yearsLeft = maxAge - age;
    let totalDrinks = drinksPerYear * yearsLeft;

    console.log(totalDrinks)


    document.querySelector('#solution').innerHTML = totalDrinks;
    document.querySelector('#drink').innerHTML = drink;
}
