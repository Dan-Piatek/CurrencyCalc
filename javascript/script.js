let plnElement = document.querySelector(".js-pln");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let usdSign = document.querySelector(".js-usd");
let euroSign = document.querySelector(".js-euro");
let gbpSign = document.querySelector(".js-gbp");
let currency = document.querySelector(".js-currency");
let currencySign = document.querySelector(".js-currencySign");

console.log(plnElement);
console.log("witam");

currency.addEventListener("input", () => {
    if (currency.value === "Dolar Amerykański") {
        (currencySign.innerText = " $");
    } else {
        if (currency.value === "Euro") {
            (currencySign.innerText = " €");
        } else {
            (currencySign.innerText = " £");
        }
    }
})

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formularz został wysłany");

    let pln = plnElement.value;
    let exchangeRate = exchangeRateElement.value;

    let result = pln * exchangeRate;
    result = result.toFixed(2);
    console.log(result);
    resultElement.innerText = result;

});