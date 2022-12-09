let scoreEl = document.getElementById("score-home")
let score = 0 

function add1Point() {
   score += 1
   scoreEl.textContent = score
}

function add2Points() {
   score += 2
   scoreEl.textContent = score
}

function add3Points() {
   score += 3
   scoreEl.textContent = score
}

let scoreEl2 = document.getElementById("score-guest")
let scoreG = 0 

function add1PointG() {
   scoreG += 1
   scoreEl2.textContent = scoreG
}

function add2PointsG() {
   scoreG += 2
   scoreEl2.textContent = scoreG
}

function add3PointsG() {
   scoreG += 3
   scoreEl2.textContent = scoreG
}