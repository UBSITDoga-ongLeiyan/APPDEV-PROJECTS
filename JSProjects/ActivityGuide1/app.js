//Components for Item Number 1
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    //populate variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value
    let x = `Hello ${name}, I see that you are from ${address} and you are also pursuing your degree ${major} and you can be contacted using ${telephone}.`
    document.getElementById("output").innerHTML = x
})

//Components for Item Number 2
function calculateProfit() {
    const sales = document.getElementById('salesInput').value;
    const profit = sales * 0.23;
    const profitResult = document.getElementById('result');
    profitResult.textContent = `The projected profit from total sales of ${sales} is ${profit}.`;
}


//Components for Item Number 3
function calculateDistance() {
    const speed = 60;

    const time1 = parseInt(document.getElementById("time1").value);
    const time2 = parseInt(document.getElementById("time2").value);
    const time3 = parseInt(document.getElementById("time3").value);

    const distance1 = speed * time1;
    const distance2 = speed * time2;
    const distance3 = speed * time3;

    document.getElementById("result1").innerHTML = `The car will travel ${distance1} miles in ${time1} hours.`;
    document.getElementById("result2").innerHTML = `The car will travel ${distance2} miles in ${time2} hours.`;
    document.getElementById("result3").innerHTML = `The car will travel ${distance3} miles in ${time3} hours.`;
}


//Components for Item Number 4
function calculateMPG() {
    const milesDriven = document.getElementById("milesDriven").value;
    const gallonsUsed = document.getElementById("gallonsUsed").value;

    const mpg = milesDriven / gallonsUsed;

    document.getElementById("result4").innerHTML = `The car's MPG is ${mpg}.`;
}


//Components for Item Number 5
function convertTemperature() {
    const celsiusTemp = parseFloat(document.getElementById("celsiusTemp").value);

    const fahrenheitTemp = (9 / 5) * celsiusTemp + 32;

    document.getElementById("result5").innerHTML = `${celsiusTemp}°C is equal to ${fahrenheitTemp.toFixed(2)}°F`;
}


//Components for Item Number 6
function calculateCalories(){
    const cookiesEaten = parseInt(document.getElementById("cookiesEaten").value)

    const totalCalories = (cookiesEaten / 40) * 10 * 300;

    document.getElementById("result6").innerHTML = `Total calories consumed: ${totalCalories}.`;
}


//Components for Item Number 7
function calculatePercentages() {
    const males = parseInt(document.getElementById("males").value);
    const females = parseInt(document.getElementById("females").value);

    const totalStudents = males + females;

    const percentageMales = (males / totalStudents) * 100;
    const percentageFemales = (females / totalStudents) * 100;

    document.getElementById("result7").innerHTML = `Percentage of Males: ${percentageMales}%<br>Percentage of Females: ${percentageFemales}%`;
}