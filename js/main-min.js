"use strict";var params={currentlyVisibleMarkers:[],moreThanTwoVisible:!1,foundPairs:0,hideAllElements:!1,all3DElements:[],audioPath:"audio/",assetsPath:"assets/",currentPairMatching:!1,skippedInitColisionHit:!1,initHits:0,models:[],reachedEnd:!1},memorypairs=[["marker1_1","marker1_2",!1,"frog.mp3"],["marker2_1","marker2_2",!1,"frog.mp3"]];function addMarkerName(e){params.currentlyVisibleMarkers.push(e)}function removeMarkerName(a){var e,r=params.currentlyVisibleMarkers.filter(function(e){return e!==a});params.currentlyVisibleMarkers=r}function updateGame(){updateHowManyVisible(),checkPair(),updatePairsFound()}function updateHowManyVisible(){2<params.currentlyVisibleMarkers.length?(params.moreThanTwoVisible=!0,hideAllElements()):(params.hideAllElements&&showAllElements(),params.moreThanTwoVisible=!1)}function updatePairsFound(){var a=0,e;memorypairs.forEach(function(e){e[2]&&a++}),document.getElementById("pairsFound").innerHTML=" ".concat(a," of ").concat(memorypairs.length),a===memorypairs.length&&(params.reachedEnd||(params.reachedEnd=!0,setTimeout(function(){$("#endOfTheGame").hide().css("opacity","1").fadeIn(800)},1500)))}function checkPair(){if(2===params.currentlyVisibleMarkers.length)var e=params.currentlyVisibleMarkers[0],a=params.currentlyVisibleMarkers[1]}function modelsHit(e){if(params.initHits++,params.initHits!==memorypairs.length||params.skippedInitColisionHit){if(params.skippedInitColisionHit){for(var a,r=e.path[1].id,t=0,n=0;n<memorypairs.length;n++){var i=memorypairs[n];if(i[0]===r||i[1]===r){t=n;break}}console.log("XXXXXXXXXX",t),memorypairs[t][2]||(memorypairs[t][2]=!0,celebrateMatch(),playSound(memorypairs[t][3]))}updatePairsFound()}else params.skippedInitColisionHit=!0}function setOpacityCard(s,m){document.querySelectorAll("a-marker").forEach(function(e){if(e.id===s){var a=e.getElementsByTagName("*"),r=!0,t=!1,n=void 0;try{for(var i=a[Symbol.iterator](),o;!(r=(o=i.next()).done);r=!0){var l;o.value.components.material.material.opacity=m}}catch(e){t=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(t)throw n}}}})}function celebrateMatch(){$("#matchTitle").hide().css("opacity","1").fadeIn(800).fadeOut(800)}function addSound(){audioplayer=document.createElement("AUDIO"),audioplayer.src=params.audioPath+"frog.mp3",audioplayer.loop=!1,audioplayer.play(),audioplayer.pause()}function playSound(e){void 0!==e&&(audioplayer.src=params.audioPath+e,audioplayer.play())}function hideAllElements(){params.hideAllElements=!0,params.all3DElements.forEach(function(e){e.setAttribute("visible",!1)})}function showAllElements(){params.hideAllElements=!1,params.all3DElements.forEach(function(e){e.setAttribute("visible",!0)})}function addMarkerListeners(){var e;document.querySelectorAll("a-marker").forEach(function(e){e.addEventListener("markerFound",function(e){letMarkerId=e.target.id,addMarkerName(letMarkerId),updateGame()}),e.addEventListener("markerLost",function(e){letMarkerId=e.target.id,removeMarkerName(letMarkerId),updateGame()})}),document.querySelectorAll("a-marker").forEach(function(e){var a=e.getElementsByTagName("*"),r=!0,t=!1,n=void 0;try{for(var i=a[Symbol.iterator](),o;!(r=(o=i.next()).done);r=!0){var l=o.value;params.all3DElements.push(l)}}catch(e){t=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(t)throw n}}}),console.clear(),updatePairsFound()}function hideTitle(){$("#titleWrapper").fadeOut("slow")}function loadAframe(){document.querySelector("a-node").load()}function startGame(){addSound(),loadAframe(),addMarkerListeners(),hideTitle()}var preparams={addCollisionListeners:!0,switchModelsRain:!0,raining:!1,buildWithMtl:!1},modelsSun=[["Hund_Vorne.obj","materials.mtl",[2,0,0],"dog1"],["Hund_Hinten.obj","materials.mtl",[2,0,0],"dog2"],["model.obj","materials.mtl",[0,0,0],"cat1"],["model.obj","materials.mtl",[0,0,0],"cat2"]],modelsRain=[["model.obj","materials.mtl",[0,0,0]],["model.obj","materials.mtl",[0,0,0]],["model.obj","materials.mtl",[0,0,0]],["model.obj","materials.mtl",[0,0,0]]];function checkRain(){preparams.raining=!1,setCorrectModels(),addCollisions()}function generateModelHtml(e,a,r,t,n){var i,o="";if(isEven(e)){var l=params.models[e+1][3];o="collision-".concat(n,' aabb-collider="objects: .').concat(l,'"')}return i=preparams.buildWithMtl?'<a-obj-model class="'.concat(n,'" src="').concat(params.assetsPath).concat(a,'" mtl="').concat(params.assetsPath).concat(r,'" position="').concat(t[0]," ").concat(t[1]," ").concat(t[2],'" ').concat(o,"></a-obj-model>"):'<a-obj-model class="'.concat(n,'" src="').concat(params.assetsPath).concat(a,'" position="').concat(t[0]," ").concat(t[1]," ").concat(t[2],'" ').concat(o,"></a-obj-model>")}function setCorrectModels(){params.models=returnCurrentModels();for(var e=document.querySelectorAll("a-marker"),a=0;a<params.models.length;a++){var r=params.models[a],t=generateModelHtml(a,r[0],r[1],r[2],r[3]);e[a].innerHTML=t}}function returnCurrentModels(){var e;return e=preparams.raining?modelsRain:modelsSun}function addCollisions(){console.log("set collisions");for(var e=0;e<params.models.length;e++)if(isEven(e)){var a,r="collision-"+params.models[e][3];AFRAME.registerComponent(r,{init:function e(){this.el.addEventListener("hitstart",function(e){console.log(e),modelsHit(e)}),this.el.addEventListener("hit",function(e){}),this.el.addEventListener("hitend",function(e){console.log("hitend")})}})}}function init(){checkRain()}function isEven(e){return 0===(e=Number(e))||!(!e||e%2)}init();