/* eslint-disable */

// ========== General Settings ========== //
let params = {
    currentlyVisibleMarkers: [],
    moreThanTwoVisible: false,
    foundPairs: 0,
    hideAllElements: false,
    all3DElements: [],
    audioPath: 'audio/'
}

// ========== Memory Pairs ========== //
let memorypairs = [
    ["marker1_1", "marker1_2", false, 'frog.mp3'],
    ["marker2_1", "marker2_2", false, 'frog.mp3'],
    ["marker3_1", "marker3_2", false, 'frog.mp3'],
    ["marker4_1", "marker4_2", false, 'frog.mp3'],
    ["marker5_1", "marker5_2", false, 'frog.mp3'],
    ["marker6_1", "marker6_2", false, 'frog.mp3'],
    ["marker7_1", "marker7_2", false, 'frog.mp3'],
    ["marker8_1", "marker8_2", false, 'frog.mp3'],
    ["marker9_1", "marker9_2", false, 'frog.mp3'],
    ["marker10_1", "marker10_2", false, 'frog.mp3']
]

// ========== Functions to Add and Remove Names in params.currentlyVisibleMarkers ========== //
function addMarkerName(name) {
    params.currentlyVisibleMarkers.push(name);
}

function removeMarkerName(name) {
    // remove marker in array, even if twice
    let array = params.currentlyVisibleMarkers;
    let newarr = array.filter(function (a) { return a !== name });
    params.currentlyVisibleMarkers = newarr
}


// ========== Update Functions ========== //
function updateGame() {
    updateHowManyVisible();
    checkPair();
    updatePairsFound();
}

function updateHowManyVisible() {
    if (params.currentlyVisibleMarkers.length > 2) {
        params.moreThanTwoVisible = true;
        //hide all elements
        hideAllElements();
    } else {
        if (params.hideAllElements) {
            showAllElements();
        }
        params.moreThanTwoVisible = false;
    }
}

function updatePairsFound() {
    let foundPairs = 0;

    memorypairs.forEach(pair => {
        if (pair[2]) { foundPairs++ }
    });

    let textElement = document.getElementById('pairsFound');
    textElement.innerHTML = ` ${foundPairs} of ${memorypairs.length}`;

    if (foundPairs === memorypairs.length) {
        alert('all matches found');
    }
}

function checkPair() {
    if (params.currentlyVisibleMarkers.length === 2) {
        let card1 = params.currentlyVisibleMarkers[0];
        let card2 = params.currentlyVisibleMarkers[1];

        //go through list of pairs and check if matching
        memorypairs.forEach(pair => {
            let card1Matching = pair.includes(card1);
            let card2Matching = pair.includes(card2);

            if (card1Matching && card2Matching && pair[2] !== true) { //celebrate only if both matching and not already matched
                console.log("It's a match!")
                celebrateMatch();
                pair[2] = true;

                // set each card opacity
                setOpacityCard(card1, 0.5);
                setOpacityCard(card2, 0.5);
            }
        });

    }
}

// ========== Match Functions ========== //

function setOpacityCard(cardId, opacity) {
    // find card with id
    document.querySelectorAll("a-marker").forEach((marker) => {
        if (marker.id === cardId) {
            let childrenElements = marker.getElementsByTagName("*");
            for (let item of childrenElements) {
                // found how to edit it here: https://aframe.io/docs/0.8.0/core/entity.html#components
                item.components.material.material.opacity = opacity
            }
        }
    });
}

function celebrateMatch() {
    $('#matchTitle').hide().css('opacity', '1').fadeIn(800).fadeOut(800);
}

// ========== Handle Sound ========== //
function addSound() {
    audioplayer = document.createElement("AUDIO");
    audioplayer.src = params.audioPath + "frog.mp3";
    audioplayer.loop = false;
    // handle audio
    audioplayer.play();
    audioplayer.pause();
}

function playSound(audioFilename) {
    audioplayer.src = params.audioPath + audioFilename;
    audioplayer.play();
}

// ========== 3 or more cards visible ========== //

function hideAllElements() {
    params.hideAllElements = true;
    params.all3DElements.forEach((el) => {
        el.setAttribute("visible", false);
    });
}

function showAllElements() {
    params.hideAllElements = false;
    params.all3DElements.forEach((el) => {
        el.setAttribute("visible", true);
    });
}

function addMarkerListeners() {
    // add found / lost eventlisteners for markers
    const markers = document.querySelectorAll("a-marker");
    markers.forEach((marker) => {
        marker.addEventListener("markerFound", (e) => {
            letMarkerId = e.target.id;
            // console.log(`found ${letMarkerId}`)
            addMarkerName(letMarkerId);
            updateGame()
        })

        marker.addEventListener("markerLost", (e) => {
            letMarkerId = e.target.id;
            // console.log(`lost ${letMarkerId}`)
            removeMarkerName(letMarkerId);
            updateGame()
        })
    });

    // save all 3d objects to params
    document.querySelectorAll("a-marker").forEach((marker) => {
        let childrenElements = marker.getElementsByTagName("*");
        for (let item of childrenElements) {
            params.all3DElements.push(item);
        }
    });

    console.clear();
    updatePairsFound();

}

// ========== Interface Stuff ========== //

function hideTitle () {
    $('#titleWrapper').fadeOut('slow');
}

function loadAframe() {
    document.querySelector('a-node').load()
}


function startGame() {
    addSound();
    loadAframe();
    addMarkerListeners();
    hideTitle();
}


// To Do:
// should found objects not be displayed or get opacity / other color / other model? 