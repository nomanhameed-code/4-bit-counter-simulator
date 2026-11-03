
let count = 0;
let timer = null;

// Update webpage
function updateDisplay() {
    let binary = count.toString(2).padStart(4, "0");

    document.getElementById("binary").innerText = binary;
    document.getElementById("decimal").innerText = count;

    document.getElementById("led1").innerText = binary[0] == "1" ? "🟢" : "⚫";
    document.getElementById("led2").innerText = binary[1] == "1" ? "🟢" : "⚫";
    document.getElementById("led3").innerText = binary[2] == "1" ? "🟢" : "⚫";
    document.getElementById("led4").innerText = binary[3] == "1" ? "🟢" : "⚫";
}

// Up Counter
function upCounter() {
    count = (count + 1) % 16;
    updateDisplay();
}

// Down Counter
function downCounter() {
    count = (count - 1 + 16) % 16;
    updateDisplay();
}

// Reset Counter
function resetCounter() {
    count = 0;
    updateDisplay();
}

// Auto Clock
function startAuto(direction) {
    stopAuto();

    timer = setInterval(function() {
        if (direction === "up") {
            upCounter();
        } else {
            downCounter();
        }
    }, 1000);
}

// Stop Auto Clock
function stopAuto() {
    clearInterval(timer);
    timer = null;
}

// Initial Display
updateDisplay();
