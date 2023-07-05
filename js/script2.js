let temp = "celsius";
let F = 86;
let C = 30;
let K = 303.15;

switch (temp) {
    case "fahrenheit":
        K = C + 273.15;
        C = ((F - 32) * 5) / 9;
        console.log(F, "°F");
        console.log(K, "°K");
        console.log(C, "°C");
        break;
    case "celsius":
        F = (C * 9) / 5 + 32;
        K = C + 273.15;
        console.log(C, "°C");
        console.log(F, "°F");
        console.log(K, "°K");
        break;
    case "kelvin":
        C = K - 273.15;
        F = (C * 9) / 5 + 32;
        console.log(K, "°K");
        console.log(C, "°C");
        console.log(F, "°F");
        break;
    default:
        console.log("");
}
