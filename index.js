let messages = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes, definitely", 
    "You may rely on it", 
    "As I see it, yes", 
    "Most likely", 
    "Outlook good", 
    "Yes", 
    "Signs point to yes", 
    "Reply hazy, try again", 
    "Ask again later", 
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again", 
    "Don't count on it", 
    "My reply is no", 
    "My sources say no", 
    "Outlook not so good", 
    "Very doubtful"
]

let ball = document.querySelector(".ball")

let ballEl = document.getElementById("ball-el")

function getMessage() {

    ball.classList.add("shake")


    let randomNu = Math.floor(Math.random()*messages.length)
    ballEl.textContent = messages[randomNu]

    setTimeout(function() {
        ball.classList.remove("shake")
    }, 300)
}

let lastShake = 0

window.addEventListener("devicemotion", function(event) {
    let { x, y, z } = event.accelerationIncludingGravity

    let force = Math.sqrt(x*x + y*y + z*z)

    if (force > 25 && Date.now() - lastShake > 1000) {
        lastShake = Date.now()
        getMessage()
    }
})

ball.addEventListener("click", function() {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission()
    }
}, { once: true })