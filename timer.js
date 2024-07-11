//Task 1
function setTimer() {
    let timer = document.getElementById("setSeconds").value
    const setCountdown = setInterval( () => {
        if (timer <= 0) {
            alert("Timer expired");
            clearInterval(setCountdown);
        } else {
            const countdownNumber = document.getElementById("countdown");
            countdownNumber.textContent = timer;
            console.log(timer);
            timer -= 1
        }
    }, 1000);
}

//Task 2
function displayAlert () {
    console.log("Beginning delay")
    setTimeout(() => {
        alert("WELCOME TO THE PAGE!")
    }, 6000);
}
document.addEventListener("DOMContentLoaded", displayAlert());

//Task 3
function repeatNotification() {
    document.addEventListener("keydown", function keyCheck(event) {
        console.log(event.key)
        if (event.key === "Escape") {
            console.log("Ending repeat notifications")
            clearInterval(displayNot);
        }
    })
    const displayNot = setInterval( () => {
        alert("Press the Escape key to dismiss repeat notifications.")
        
    }, 4000);
}
document.addEventListener("DOMContentLoaded", repeatNotification());