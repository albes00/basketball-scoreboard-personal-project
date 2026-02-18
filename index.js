let homeScoreCard = document.getElementById("home-score-card")
let awayScoreCard = document.getElementById("away-score-card")

let homeScore = 0
let awayScore = 0

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

function addAwayScoreBy1() {
    awayScore += 1
    awayScoreCard.textContent = awayScore
}

function addAwayScoreBy2() {
    awayScore += 2
    awayScoreCard.textContent = awayScore
}

function addAwayScoreBy3() {
    awayScore += 3
    awayScoreCard.textContent = awayScore
}

function resetScore() {
    homeScore = 0
    awayScore = 0
    homeScoreCard.textContent = homeScore
    awayScoreCard.textContent = awayScore
}