let exchangeRateElement = document.querySelector(".js-exchangeRate");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let currency = document.querySelector(".js-currency");
let currencySign = document.querySelector(".js-currencySign");

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

function exchangeCalc() {
    const plnElement = document.querySelector(".js-pln");
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Formularz został wysłany");

        const exchangeRate = exchangeRateElement.value;

        let result = plnElement.value * exchangeRate;
        result = result.toFixed(2);
        console.log(result);
        resultElement.innerText = result;

    });
}

exchangeCalc();