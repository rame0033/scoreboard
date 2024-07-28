let guestScore = document.getElementById("guestEl")
let homeScore = document.getElementById("homeEl")

let homeSco = 0
let guestSco = 0

// BUTTONS FOR HOME SCOREBOARD
function hom3add1(){
    homeSco += 1
    homeScore.innerText = homeSco
    console.log("Home score: " + homeSco)
}

function hom3add2(){
    homeSco += 2
    homeScore.innerText = homeSco
    console.log("Home score: " + homeSco)
}

function hom3add3(){
    homeSco += 3
    homeScore.innerText = homeSco
    console.log("Home score: " + homeSco)
}

// BUTTONS FOR GUEST SCOREBOARD
function guesTadd1(){
    guestSco += 1
    guestScore.innerText = guestSco
    console.log("Guest score: " + guestSco)
}

function guesTadd2(){
    guestSco += 2
    guestScore.innerText = guestSco
    console.log("Guest score: " + guestSco)
}

function guesTadd3(){
    guestSco += 3
    guestScore.innerText = guestSco
    console.log("Guest score: " + guestSco)
}


// Reset the game when "New Game" btn is being pressed
function reSet(){
    homeSco = 0
    homeScore.innerText = homeSco
    guestSco = 0
    guestScore.innerText = guestSco
    console.log("Game reset")
}