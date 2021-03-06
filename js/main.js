/* eslint-disable */

// IMPORTANT Readme //
// 1. memorypairs and models need to have the same number and be even

// ========== General Pre Settings ========== //
let preparams = {
    addCollisionListeners: true,
    checkForWeather: true,
    raining: false,
    rainIds: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 600, 601, 602, 611, 612, 615, 616, 620, 621, 622],
    appIdWeatherApi: "1c61af36cec8024c37451ae95d81b031",
    buildWithMtl: false,
}

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
    badJokerPlayed: [],
    goodJokerPlayed: [],
    goodJokerActive: false,
    goodJokerActiveId: "",
    officialMemorypairsLength: 0, // count length without jokers
}

// ========== Memory Pairs ========== //
let modelsSun = [
    ['Hund_Vorne.obj', "materials.mtl", [0, 0, 0], "dog1", "normal"], // obj, material, position, refClass, specialCard
    ['Hund_Hinten.obj', "materials.mtl", [0, 0, 0], "dog2", "normal"],
    ['Katze_Vorne.obj', "materials.mtl", [0, 0, 0], "cat1", "normal"],
    ['Katze_Hinten.obj', "materials.mtl", [0, 0, 0], "cat2", "normal"],
    ['tapir_vorne.obj', "materials.mtl", [0, 0, 0], "tapir1", "normal"],
    ['tapir_hinten.obj', "materials.mtl", [1.3, 0, 0], "tapir2", "normal"],
    ['tukan_vorne.obj', "materials.mtl", [0, 0, 0], "tukan1", "normal"],
    ['tukan_hinten.obj', "materials.mtl", [1.3, 0, 0], "tukan2", "normal"],
    ['affen_vorne.obj', "materials.mtl", [0, 0, 0], "affe1", "normal"],
    ['affen_hinten.obj', "materials.mtl", [1.3, 0, 0], "affe2", "normal"],
    ['bär_vorne.obj', "materials.mtl", [0, 0, 0], "bär1", "normal"],
    ['bär_hinten.obj', "materials.mtl", [1.3, -0.05, 0], "bär2", "normal"],
    ['fuchs_vorne.obj', "materials.mtl", [0, 0, 0], "fuchs1", "normal"],
    ['fuchs_hinten.obj', "materials.mtl", [1.3, -0.04, 0], "fuchs2", "normal"],
    ['giraffe_vorne.obj', "materials.mtl", [0, 0, 0], "giraffe1", "normal"],
    ['giraffe_hinten.obj', "materials.mtl", [1.3, 0, 0], "giraffe2", "normal"],
    ['koala_vorne.obj', "materials.mtl", [0, 0, 0], "koala1", "normal"],
    ['koala_hinten.obj', "materials.mtl", [1.3, 0, 0], "koala2", "normal"],
    ['schaf_vorne.obj', "materials.mtl", [0, 0, 0], "schaf1", "normal"],
    ['schaf_hinten.obj', "materials.mtl", [1.3, 0, 0], "schaf2", "normal"],
    ['löwe_vorne.obj', "materials.mtl", [0, 0, 0], "löwe1", "normal"],
    ['löwe_hinten.obj', "materials.mtl", [1.3, 0, 0], "löwe2", "normal"],
    // joker
    ['joker_01.obj', "materials.mtl", [1.5, 0, 0], "goodJoker1", "goodJoker"],
    ['joker_02.obj', "materials.mtl", [1.5, 0, 0], "goodJoker2", "goodJoker"]
    ]
    

let modelsRain = [ // [ ] Check in meerestiereIndex.html
    ['dori_vorne.obj', "materials.mtl", [0, 0, 0], "dori1", "normal"], // obj, material, position, refClass, specialCard
    ['dori_hinten.obj', "materials.mtl", [0, 0, 0], "dori2", "normal"],
    ['delphin_vorne.obj', "materials.mtl", [0, 0, 0], "delphin1", "normal"],
    ['delphin_hinten.obj', "materials.mtl", [0, 0, 0], "delphin2", "normal"],
    ['frosch_vorne.obj', "materials.mtl", [0, 0, 0], "frosch1", "normal"],
    ['frosch_hinten.obj', "materials.mtl", [1.3, 0, 0], "frosch2", "normal"],
    ['hai_vorne.obj', "materials.mtl", [0, 0, 0], "hai1", "normal"],
    ['hai_hinten.obj', "materials.mtl", [1.3, 0, 0], "hai2", "normal"],
    ['krabbe_vorne.obj', "materials.mtl", [0, 0, 0], "krabbe1", "normal"],
    ['krabbe_hinten.obj', "materials.mtl", [1.3, 0, 0], "krabbe2", "normal"],
    ['lustigerAugenfisch_vorne.obj', "materials.mtl", [0, 0, 0], "lustigerAugenfisch1", "normal"],
    ['lustigerAugenfisch_hinten.obj', "materials.mtl", [1.3, -0.05, 0], "lustigerAugenfisch2", "normal"],
    ['schildkröte_vorne.obj', "materials.mtl", [0, 0, 0], "schildkröte1", "normal"],
    ['schildkröte_hinten.obj', "materials.mtl", [1.3, -0.04, 0], "schildkröte2", "normal"],
    ['seekuh_vorne.obj', "materials.mtl", [0, 0, 0], "seekuh1", "normal"],
    ['seekuh_hinten.obj', "materials.mtl", [1.3, 0, 0], "seekuh2", "normal"],
    ['seelöwe_vorne.obj', "materials.mtl", [0, 0, 0], "seelöwe1", "normal"],
    ['seelöwe_hinten.obj', "materials.mtl", [1.3, 0, 0], "seelöwe2", "normal"],
    ['tigerfisch_vorne.obj', "materials.mtl", [0, 0, 0], "tigerfisch1", "normal"],
    ['tigerfisch_hinten.obj', "materials.mtl", [1.3, 0, 0], "tigerfisch2", "normal"],
    ['wal_vorne.obj', "materials.mtl", [0, 0, 0], "wal1", "normal"],
    ['wal_hinten.obj', "materials.mtl", [1.3, 0, 0], "wal2", "normal"],

    // joker
    ['joker_03.obj', "materials.mtl", [1.5, 0, 0], "badJoker1", "badJoker"],
    ['joker_04.obj', "materials.mtl", [1.5, 0, 0], "badJoker2", "badJoker"],
    ['joker_01.obj', "materials.mtl", [1.5, 0, 0], "goodJoker1", "goodJoker"],
    ['joker_02.obj', "materials.mtl", [1.5, 0, 0], "goodJoker2", "goodJoker"]
]


let memorypairs = [
    ["marker1_1", "marker1_2", false, 'hund.mp3', "normal"],
    ["marker2_1", "marker2_2", false, 'katze.mp3', "normal"],
    ["marker3_1", "marker3_2", false, 'tapir.mp3' , "normal"],
    ["marker4_1", "marker4_2", false, 'tukan.mp3' , "normal"],
    ["marker5_1", "marker5_2", false, 'affe.mp3' , "normal"],
    ["marker6_1", "marker6_2", false, 'bär.mp3' , "normal"],
    ["marker7_1", "marker7_2", false, 'fuchs.mp3' , "normal"],
    ["marker8_1", "marker8_2", false, 'giraffe.mp3' , "normal"],
    ["marker9_1", "marker9_2", false, 'koala.mp3' , "normal"],
    ["marker10_1", "marker10_2", false, 'schaf.mp3', "normal"],
    ["marker11_1", "marker11_2", false, 'löwe.mp3', "normal"],
    ["marker12_1", "marker12_2", false, 'goodJoker.mp3', "goodJoker"],
    ["marker13_1", "marker13_2", false, 'badJoker.mp3', "badJoker"],
];

let rainingMemorypairs = [
    ["marker1_1", "marker1_2", false, 'dori.mp3', "normal"],
    ["marker2_1", "marker2_2", false, 'delfin.mp3', "normal"],
    ["marker3_1", "marker3_2", false, 'frosch.mp3' , "normal"],
    ["marker4_1", "marker4_2", false, 'hai.mp3' , "normal"],
    ["marker5_1", "marker5_2", false, 'krabbe.mp3' , "normal"],
    ["marker6_1", "marker6_2", false, 'augenfisch.mp3' , "normal"],
    ["marker7_1", "marker7_2", false, 'schildkröte.mp3' , "normal"],
    ["marker8_1", "marker8_2", false, 'seekuh.mp3' , "normal"],
    ["marker9_1", "marker9_2", false, 'seelöwe.mp3' , "normal"],
    ["marker10_1", "marker10_2", false, 'tigerfisch.mp3', "normal"],
    ["marker11_1", "marker11_2", false, 'wal.mp3', "normal"],
    ["marker12_1", "marker12_2", false, 'goodJoker.mp3', "goodJoker"],
    ["marker13_1", "marker13_2", false, 'badJoker.mp3', "badJoker"],
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
        if (pair[2] && pair[4] === "normal") { foundPairs++ }
    });

    let textElement = document.getElementById('pairsFound');
    textElement.innerHTML = ` ${foundPairs} of ${params.officialMemorypairsLength}`;

    if (foundPairs === params.officialMemorypairsLength) {
        if (!params.reachedEnd) {
            params.reachedEnd = true;
            setTimeout(() => {
                $('#endOfTheGame').hide().css('opacity', '1').fadeIn(800);
            }, 1500);
        }

    }
}

function checkPair() {
    let amount = params.currentlyVisibleMarkers.length;

    // check for special card
    if (amount == 2 || amount == 1) {
        let cardsNameArray = [params.currentlyVisibleMarkers[0], params.currentlyVisibleMarkers[1]];

        for (let i = 0; i < cardsNameArray.length; i++) {
            const cardNameId = cardsNameArray[i];
            if (typeof cardNameId !== 'undefined') {
                let typeOfCard = document.getElementById(cardNameId).dataset.cardtype;
                checkForSpecialCard(typeOfCard, cardNameId);

            }

        }

    }

    // check when two cards visible
    if (amount === 2) {
        let card1 = params.currentlyVisibleMarkers[0];
        let card2 = params.currentlyVisibleMarkers[1];

        if (params.goodJokerActive) {
            // if joker active and 2 cards visible
            // get the other card and set that paire correct

            // get card that isn't joker;
            let jokerID = params.goodJokerActiveId;
            let nonJokerId;

            if (jokerID == card1) {
                nonJokerId = card2;
            } else { nonJokerId = card1 }

            // now get the correct round pair to set to match
            memorypairs.forEach(pair => {
                let card1Matching = pair.includes(nonJokerId);

                if (card1Matching && pair[2] !== true) { //celebrate only if not already matched
                    console.log("It's a match!")
                    celebrateMatch();
                    pair[2] = true;
                    playSound(pair[3]);

                }
            });

            params.goodJokerActive = false;
        }

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

function checkForSpecialCard(name, cardNameId) {
    if (name === 'badJoker') {
        let alreadyPlayed = arrayContains(cardNameId, params.badJokerPlayed);
        if (!alreadyPlayed) {
            showBadJoker();
            params.badJokerPlayed.push(cardNameId);
        }
    };

    if (name === 'goodJoker') {
        let alreadyPlayed = arrayContains(cardNameId, params.goodJokerPlayed);
        if (!alreadyPlayed) {
            params.goodJokerActive = true;
            params.goodJokerActiveId = cardNameId;
            params.goodJokerPlayed.push(cardNameId);

            // play sound but only if joker first card
            if (params.currentlyVisibleMarkers.length == 1) {
                playSound('goodJoker.mp3');
            }
        }
    };
}

function modelsHit(event) {
    params.initHits++;

    if (params.initHits === params.officialMemorypairsLength && !params.skippedInitColisionHit) { //officialMemorypairsLength weil joker nicht zählen
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

        // THIS IS REALLY IMPORTANT!
        // until here, it's really buggy because the analysis triggers different markers at the same time.
        // to make sure, it allows trigger checkmade, check if models fit to markers
        let marker1 = params.currentlyVisibleMarkers[0];
        let marker2 = params.currentlyVisibleMarkers[1];
        let modelTriggeringMatch = event.path[0].className;

        //now check if the animal belongs to the visible marker
        let belongsToMarker = false;
        let marker1ChildClass = document.getElementById(marker1).firstChild.className;
        let marker2ChildClass = document.getElementById(marker2).firstChild.className;
        if (marker1ChildClass === modelTriggeringMatch || marker2ChildClass === modelTriggeringMatch){
            belongsToMarker = true;
        }
        console.log(marker1ChildClass, marker2ChildClass, modelTriggeringMatch)

        // if index not found yet trigger matchmade
        // if (!memorypairs[index][2] && belongsToMarker) {
        //     console.log(params.currentlyVisibleMarkers);
        //     memorypairs[index][2] = true;
        //     celebrateMatch();
        //     playSound(memorypairs[index][3])
        // }

        //check if markers still visible after 0.5 seconds. Then trigger match
        if (!memorypairs[index][2] && belongsToMarker) {
            setTimeout(() => {
                
                let marker1StillMatching = false;
                if (marker1 == params.currentlyVisibleMarkers[0] || marker1 == params.currentlyVisibleMarkers[1]){marker1StillMatching = true};
                let marker2StillMatching = false;
                if (marker2 == params.currentlyVisibleMarkers[0] || marker2 == params.currentlyVisibleMarkers[1]){marker2StillMatching = true}
                console.log(marker1, marker2, params.currentPairMatching[0], params.currentPairMatching[1])
                if (marker1StillMatching && marker2StillMatching){} else {return} ;

                memorypairs[index][2] = true;
                celebrateMatch();
                playSound(memorypairs[index][3]);
                updatePairsFound();
            }, 500);
        }

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

function showBadJoker() {
    $('#badJoker').hide().css('opacity', '1').fadeIn(800).fadeOut(800);
    playSound('badJoker.mp3')
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
            // console.log(e.target)
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

    // console.clear();
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

function checkRain() {
    if (preparams.checkForWeather) {


        var getLocation = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(createAPI);
            } else {
                console.log("Geolocation is not supported by this browser.");
                alert('No geolov')
            }
        };

        var ur = "";

        var createAPI = function (position) {
            ur = "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=" + preparams.appIdWeatherApi;
            var json = undefined;

            $.ajax({
                dataType: "json",
                url: ur,
                data: function (data) {
                },
                success: function (success) {
                    json = success;
                    console.log("The weather outside is " + json.weather[0].main + ".");
                    let weatherID = json.weather[0].id;
                    preparams.raining = arrayContains(weatherID, preparams.rainIds);
                      // preparams.raining = true;
                    console.log("Is Raining:", preparams.raining);

                    setCorrectModels();
                    setCorrectTotalCount();
                    setStartButtonDisabledUntilLoaded();
                }
            });
        };

        getLocation();
    } else {
        preparams.raining = false;
        console.log("Didn't check for Rain. So Sunny");
        setCorrectModels();
        addCollisions();
        setCorrectTotalCount();
        setStartButtonDisabledUntilLoaded();
    }
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
    // update memorypairs for correct sound if raining
    if (!preparams.raining) {
    } else {
        memorypairs = rainingMemorypairs;
    }

    params.models = returnCurrentModels();

    let markers = document.querySelectorAll('a-marker');

    for (let i = 0; i < params.models.length; i++) {
        const modelArray = params.models[i];
        let modelHtmlString = generateModelHtml(i, modelArray[0], modelArray[1], modelArray[2], modelArray[3]);
        markers[i].innerHTML = modelHtmlString;
        markers[i].dataset.cardtype = modelArray[4];
    }
}

function setCorrectTotalCount() {
    let count = 0;
    for (let i = 0; i < memorypairs.length; i++) {
        const cardType = memorypairs[i][4];
        if (cardType == "normal") {
            count++
        }
    }
    params.officialMemorypairsLength = count;
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
    console.log('set up collision event-listeners');

    // go through all models
    for (let i = 0; i < params.models.length; i++) {
        if (isEven(i)) {
            const model = params.models[i];
            let collisionRef = "collision-" + model[3];
            console.log(collisionRef);

            AFRAME.registerComponent(collisionRef, {
                init: function () {
                    this.el.addEventListener('hitstart', (e) => {
                        console.log('hitstart');
                        console.log(e)
                        modelsHit(e);
                    })
                    this.el.addEventListener('hit', (e) => {
                        // console.log(e)
                    })
                    this.el.addEventListener('hitend', (e) => {
                        // console.log('hitend')
                        // console.log(e)
                    })
                }
            })
        }

    }
}

function setStartButtonDisabledUntilLoaded() {
    params.startButton = document.getElementById('startButton');
    params.startButton.disabled = true;

    params.modelsToLoad = document.querySelectorAll('a-obj-model');
    params.amountLoadedModels = 0;
    // params.amountOfModelsToLoad = params.modelsToLoad.length;

    for (let i = 0; i < params.modelsToLoad.length; i++) {
        const element = params.modelsToLoad[i];
        element.addEventListener('model-loaded', function () {
            params.amountLoadedModels++;
            if (params.amountLoadedModels === params.modelsToLoad.length){
                
                 params.startButton.disabled = false;
                 params.startButton.innerHTML = 'Starte das Spiel';
                //  addCollisions();
            } else {
                 params.startButton.innerHTML = `Lade Model ${params.amountLoadedModels}/${params.modelsToLoad.length}`;
            }
        });

    }

}

function flipCanvas(){
// var canvas = document.getElementsByTagName('canvas');
// var canvasContext = canvas[0].getContext("webgl")
// console.log(canvasContext);
// canvasContext.scale(-1, 1); mirror needs different apporach

}

function init() {
    params.startButton = document.getElementById('startButton');
    params.startButton.disabled = true;
    params.memorypairs = memorypairs;
    checkRain();
    flipCanvas();
}
init();


// ============ HELPER FUNCTIONS =========== //

function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n % 2));
}

function arrayContains(needle, arrhaystack) {
    return (arrhaystack.indexOf(needle) > -1);
}