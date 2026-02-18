let homeScoreCard = document.getElementById("home-score-card")
let guestScoreCard = document.getElementById("guest-score-card")

let homeScore = 0
let guestScore = 0

function addHomeScoreBy1() {
    homeScore += 1
    homeScoreCard.textContent = homeScore
}

function addHomeScoreBy2() {
    homeScore += 2
    homeScoreCard.textContent = homeScore
}

function addHomeScoreBy3() {
    homeScore += 3
    homeScoreCard.textContent = homeScore
}

function addGuestScoreBy1() {
    guestScore += 1
    guestScoreCard.textContent = guestScore
}

function addGuestScoreBy2() {
    guestScore += 2
    guestScoreCard.textContent = guestScore
}

function addGuestScoreBy3() {
    guestScore += 3
    guestScoreCard.textContent = guestScore
}

function resetScore() {
    homeScore = 0
    guestScore = 0
    homeScoreCard.textContent = homeScore
    guestScoreCard.textContent = homeScore
}