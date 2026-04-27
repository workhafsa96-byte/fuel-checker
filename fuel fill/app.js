function FuelChecker() {
    let fuel = parseFloat(document.getElementById("fuelInput").value);
    let message = document.getElementById("message");

    if (isNaN(fuel)) {
        message.innerHTML = "Please enter fuel!";
    }
    else if (fuel < 0.25) {
        message.innerHTML = "⛽ Please refill the fuel";
    } 
    else {
        message.innerHTML = "✅ No need to refill";
    }
    console.log(fuel);
}