/* eslint-disable */

// IMPORTANT Readme //
// 1. memorypairs and models need to have the same number and be even

// ========== General Settings ========== //
let params = {
    currentlyVisibleMarkers: [],
    moreThanTwoVisible: false,
    foundPairs: 0,
    hideAllElements: false,
    all3DElements: [],
    audioPath: 'audio/',
    assetsPath: 'assets/',
    currentPairMatching: false,
    skippedInitColisionHit: false, // this is to prohibit hit event on init
    initHits: 0,
    models: [],
    reachedEnd: false,
}

// ========== Memory Pairs ========== //
let memorypairs = [
    ["marker1_1", "marker1_2", false, 'frog.mp3'],
    ["marker2_1", "marker2_2", false, 'frog.mp3'],
    // ["marker3_1", "marker3_2", false, 'frog.mp3'],
    // ["marker4_1", "marker4_2", false, 'frog.mp3'],
    // ["marker5_1", "marker5_2", false, 'frog.mp3'],
    // ["marker6_1", "marker6_2", false, 'frog.mp3'],
    // ["marker7_1", "marker7_2", false, 'frog.mp3'],
    // ["marker8_1", "marker8_2", false, 'frog.mp3'],
    // ["marker9_1", "marker9_2", false, 'frog.mp3'],
    // ["marker10_1", "marker10_2", false, 'frog.mp3']
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
    checkPair(); // checking now functions mostly through hit
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
        if (!params.reachedEnd) {
            params.reachedEnd = true;
            setTimeout(() => {
                $('#endOfTheGame').hide().css('opacity', '1').fadeIn(800);
            }, 1500);
        }

    }
}

function checkPair() {
    if (params.currentlyVisibleMarkers.length === 2) {
        let card1 = params.currentlyVisibleMarkers[0];
        let card2 = params.currentlyVisibleMarkers[1];

        // this is now done in Hit
        //go through list of pairs and check if matching
        // memorypairs.forEach(pair => {
        //     let card1Matching = pair.includes(card1);
        //     let card2Matching = pair.includes(card2);

        //     if (card1Matching && card2Matching && pair[2] !== true) { //celebrate only if both matching and not already matched
        //         console.log("It's a match!")
        //         celebrateMatch();
        //         pair[2] = true;

        //         // set each card opacity
        //         setOpacityCard(card1, 0.5);
        //         setOpacityCard(card2, 0.5);
        //     }
        // });
    }
}

function modelsHit(event) {
    params.initHits++;

    if (params.initHits === memorypairs.length && !params.skippedInitColisionHit) {
        params.skippedInitColisionHit = true;
        return; //skip the last one too
    }

    if (params.skippedInitColisionHit) {
        let marker = event.path[1];
        let markerid = marker.id;
        let index = 0;

        // loop through pairs and find correct index
        for (let i = 0; i < memorypairs.length; i++) {
            const pair = memorypairs[i];
            if (pair[0] === markerid || pair[1] === markerid) {
                index = i;
                break;
            }
        }

        console.log("XXXXXXXXXX", index);

        // if index not found yet trigger matchmade
        if (!memorypairs[index][2]) {
            memorypairs[index][2] = true;
            celebrateMatch();
            playSound(memorypairs[index][3])
        }
    }

    updatePairsFound();

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
    // catch error if no src
    if (typeof audioFilename !== "undefined") {
        audioplayer.src = params.audioPath + audioFilename;
        audioplayer.play();
    }
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

function hideTitle() {
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

// console.clear();

// ============================== INIT ============================== //
// This runs before Aframe to set the right models and check for rain.

// ========== General Pre Settings ========== //
let preparams = {
    addCollisionListeners: true,
    switchModelsRain: true,
    raining: false,
    buildWithMtl: false,
}

let modelsSun = [
    ['Hund_Vorne.obj', "materials.mtl", [2, 0, 0], "dog1"], // obj, material, position, refClass
    ['Hund_Hinten.obj', "materials.mtl", [2, 0, 0], "dog2"],
    ['model.obj', "materials.mtl", [0, 0, 0], "cat1"],
    ['model.obj', "materials.mtl", [0, 0, 0], "cat2"],
]

let modelsRain = [
    ['model.obj', "materials.mtl", [0, 0, 0]],
    ['model.obj', "materials.mtl", [0, 0, 0]],
    ['model.obj', "materials.mtl", [0, 0, 0]],
    ['model.obj', "materials.mtl", [0, 0, 0]],
]

function checkRain() {
    preparams.raining = false;
    setCorrectModels();
    addCollisions();
}

function generateModelHtml(i, objName, mtlName, position, refClass) {
    let string;
    let registerCollisionComponentString = '';
    if (isEven(i)) {
        let nextModelClass = params.models[i + 1][3];
        registerCollisionComponentString = `collision-${refClass} aabb-collider="objects: .${nextModelClass}"`;
    }

    if (preparams.buildWithMtl) {
        string = `<a-obj-model class="${refClass}" src="${params.assetsPath}${objName}" mtl="${params.assetsPath}${mtlName}" position="${position[0]} ${position[1]} ${position[2]}" ${registerCollisionComponentString}></a-obj-model>`;
    } else {
        string = `<a-obj-model class="${refClass}" src="${params.assetsPath}${objName}" position="${position[0]} ${position[1]} ${position[2]}" ${registerCollisionComponentString}></a-obj-model>`;
    }
    return string;
}

function setCorrectModels() {
    params.models = returnCurrentModels();

    let markers = document.querySelectorAll('a-marker');

    for (let i = 0; i < params.models.length; i++) {
        const modelArray = params.models[i];
        let modelHtmlString = generateModelHtml(i, modelArray[0], modelArray[1], modelArray[2], modelArray[3]);
        markers[i].innerHTML = modelHtmlString;
    }
}

function returnCurrentModels() {
    let models;
    if (!preparams.raining) {
        models = modelsSun;
    } else {
        models = modelsRain;
    }
    return models;
}

function addCollisions() {
    console.log('set collisions');

    // go through all models
    for (let i = 0; i < params.models.length; i++) {
        if (isEven(i)) {
            const model = params.models[i];
            let collisionRef = "collision-" + model[3];

            AFRAME.registerComponent(collisionRef, {
                init: function () {
                    this.el.addEventListener('hitstart', (e) => {
                        console.log(e)
                        modelsHit(e);
                    })
                    this.el.addEventListener('hit', (e) => {
                        // console.log(e)
                    })
                    this.el.addEventListener('hitend', (e) => {
                        console.log('hitend')
                        // console.log(e)
                    })
                }
            })
        }

    }






    //   foo1 aabb-collider="objects: .dog2"
}

function init() {
    checkRain();
}
init();


// ============ HELPER FUNCTIONS =========== //

function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n % 2));
}