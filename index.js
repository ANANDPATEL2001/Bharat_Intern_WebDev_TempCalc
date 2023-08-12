const celsiusField = document.querySelector("#celsius");
const fahrenheitField = document.querySelector("#fahrenheit");
const kelvinField = document.querySelector("#kelvin");

const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp_type");
const current_time = document.querySelector("#current-time");

// Window Loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
    fahrenheitField.innerHTML = "";
    kelvinField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    temp_Conversion();

    // Adding Loading Feature
    convertBtn.innerHTML = "<span><i class='fa-solid fa-spinner'></i>Converting ...</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
    }, 1000)
})


function temp_Conversion() {
    let inputValue = degree.value;

    // const time = new Date()
    // console.log(time)
    const new_time = Date().toString();
    current_time.innerHTML = new_time.substring(0, 25)

    setTimeout(() => {

        if (tempType.value === "celsius") {
            celsiusField.innerHTML = `${inputValue} &deg;c`;

            const celsiusToFahrenheit = (inputValue * (9 / 5)) + 32;
            fahrenheitField.innerHTML = `${celsiusToFahrenheit.toFixed(3)} &deg;c`;

            const celsiusToKelvin = (inputValue * (1)) + 273.15;
            kelvinField.innerHTML = `${celsiusToKelvin.toFixed(3)} &deg;c`;
        }

        else if (tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;c`;

            // const fahrenheitToFahrenheit = inputValue;
            fahrenheitField.innerHTML = `${inputValue} &deg;c`;

            const fahrenheitToKelvin = (inputValue - 32) * (5 / 9) + 273.15;
            kelvinField.innerHTML = `${fahrenheitToKelvin.toFixed(3)} &deg;c`;
        }

        else if (tempType.value === "kelvin") {
            const kelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;c`;

            const kelvinToFahrenheit = ((inputValue - 273.15) * (9 / 5)) + 32;
            fahrenheitField.innerHTML = `${kelvinToFahrenheit.toFixed(3)} &deg;c`;

            // const kelvinToKelvin = inputValue;
            kelvinField.innerHTML = `${inputValue} &deg;c`;
        }
    }, 1200)
}












// const calculateTemp = () => {
//     const inputTemp = document.getElementById("degree").value;

//     const tempSelected = document.getElementById("temp_type");
//     const valueTemp = temp_type.options[tempSelected.selectedIndex].value;

//     // Celsius to Fahrenheit
//     const celToFah = (cel) => {
//         let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
//         return fahrenheit;
//     }

//     // Celsius to Kelvin
//     const celToKel = (cel) => {
//         let kelvin = (cel + 273.12).toFixed(1);
//         return kelvin;
//     }

//     if (valueTemp == "fahrenheit") {
//         document.getElementById("final_result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
//     }

//     else {
//         document.getElementById("final_result").innerHTML = celToKel(inputTemp) + "&#176; Kelvin";
//     }
// }






