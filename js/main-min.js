"use strict";var preparams={addCollisionListeners:!0,checkForWeather:!1,raining:!1,rainIds:[803,801,802],appIdWeatherApi:"9ddf1493dd103f1245f6d568075bc589",buildWithMtl:!1},params={currentlyVisibleMarkers:[],moreThanTwoVisible:!1,foundPairs:0,hideAllElements:!1,all3DElements:[],audioPath:"audio/",assetsPath:"assets/",currentPairMatching:!1,skippedInitColisionHit:!1,initHits:0,models:[],reachedEnd:!1,badJokerPlayed:[],goodJokerPlayed:[],goodJokerActive:!1,goodJokerActiveId:"",officialMemorypairsLength:0},modelsSun=[["Hund_Vorne.obj","materials.mtl",[0,0,0],"dog1","normal"],["Hund_Hinten.obj","materials.mtl",[0,0,0],"dog2","normal"],["Katze_Vorne.obj","materials.mtl",[0,0,0],"cat1","normal"],["Katze_Hinten.obj","materials.mtl",[0,0,0],"cat2","normal"],["tapir_vorne.obj","materials.mtl",[0,0,0],"tapir1","normal"],["tapir_hinten.obj","materials.mtl",[1.3,0,0],"tapir2","normal"],["tukan_vorne.obj","materials.mtl",[0,0,0],"tukan1","normal"],["tukan_hinten.obj","materials.mtl",[1.3,0,0],"tukan2","normal"],["affen_vorne.obj","materials.mtl",[0,0,0],"affe1","normal"],["affen_hinten.obj","materials.mtl",[1.3,0,0],"affe2","normal"],["bär_vorne.obj","materials.mtl",[0,0,0],"bär1","normal"],["bär_hinten.obj","materials.mtl",[1.3,-.05,0],"bär2","normal"],["fuchs_vorne.obj","materials.mtl",[0,0,0],"fuchs1","normal"],["fuchs_hinten.obj","materials.mtl",[1.3,-.04,0],"fuchs2","normal"],["giraffe_vorne.obj","materials.mtl",[0,0,0],"giraffe1","normal"],["giraffe_hinten.obj","materials.mtl",[1.3,0,0],"giraffe2","normal"],["koala_vorne.obj","materials.mtl",[0,0,0],"koala1","normal"],["koala_hinten.obj","materials.mtl",[1.3,0,0],"koala2","normal"],["schaf_vorne.obj","materials.mtl",[0,0,0],"schaf1","normal"],["schaf_hinten.obj","materials.mtl",[1.3,0,0],"schaf2","normal"],["löwe_vorne.obj","materials.mtl",[0,0,0],"löwe1","normal"],["löwe_hinten.obj","materials.mtl",[1.3,0,0],"löwe2","normal"],["joker_01.obj","materials.mtl",[1.5,0,0],"goodJoker1","goodJoker"],["joker_02.obj","materials.mtl",[1.5,0,0],"goodJoker2","goodJoker"],["joker_03.obj","materials.mtl",[1.5,0,0],"badJoker1","badJoker"],["joker_04.obj","materials.mtl",[1.5,0,0],"badJoker2","badJoker"]],modelsRain=[["Hund_Vorne.obj","materials.mtl",[0,0,0],"dog1","normal"],["Hund_Hinten.obj","materials.mtl",[0,0,0],"dog2","normal"],["Katze_Vorne.obj","materials.mtl",[0,0,0],"cat1","normal"],["Katze_Hinten.obj","materials.mtl",[0,0,0],"cat2","normal"],["tapir_vorne.obj","materials.mtl",[0,0,0],"tapir1","normal"],["tapir_hinten.obj","materials.mtl",[1.3,0,0],"tapir2","normal"],["tukan_vorne.obj","materials.mtl",[0,0,0],"tukan1","normal"],["tukan_hinten.obj","materials.mtl",[1.3,0,0],"tukan2","normal"],["affen_vorne.obj","materials.mtl",[0,0,0],"affe1","normal"],["affen_hinten.obj","materials.mtl",[1.3,0,0],"affe2","normal"],["bär_vorne.obj","materials.mtl",[0,0,0],"bär1","normal"],["bär_hinten.obj","materials.mtl",[1.3,-.05,0],"bär2","normal"],["fuchs_vorne.obj","materials.mtl",[0,0,0],"fuchs1","normal"],["fuchs_hinten.obj","materials.mtl",[1.3,-.04,0],"fuchs2","normal"],["giraffe_vorne.obj","materials.mtl",[0,0,0],"giraffe1","normal"],["giraffe_hinten.obj","materials.mtl",[1.3,0,0],"giraffe2","normal"],["koala_vorne.obj","materials.mtl",[0,0,0],"koala1","normal"],["koala_hinten.obj","materials.mtl",[1.3,0,0],"koala2","normal"],["schaf_vorne.obj","materials.mtl",[0,0,0],"schaf1","normal"],["schaf_hinten.obj","materials.mtl",[1.3,0,0],"schaf2","normal"],["löwe_vorne.obj","materials.mtl",[0,0,0],"löwe1","normal"],["löwe_hinten.obj","materials.mtl",[1.3,0,0],"löwe2","normal"],["joker_01.obj","materials.mtl",[1.5,0,0],"goodJoker1","goodJoker"],["joker_02.obj","materials.mtl",[1.5,0,0],"goodJoker2","goodJoker"],["joker_03.obj","materials.mtl",[1.5,0,0],"badJoker1","badJoker"],["joker_04.obj","materials.mtl",[1.5,0,0],"badJoker2","badJoker"]],memorypairs=[["marker1_1","marker1_2",!1,"frog.mp3","normal"],["marker2_1","marker2_2",!1,"frog.mp3","normal"],["marker3_1","marker3_2",!1,"frog.mp3","normal"],["marker4_1","marker4_2",!1,"frog.mp3","normal"],["marker5_1","marker5_2",!1,"frog.mp3","normal"],["marker6_1","marker6_2",!1,"frog.mp3","normal"],["marker7_1","marker7_2",!1,"frog.mp3","normal"],["marker8_1","marker8_2",!1,"frog.mp3","normal"],["marker9_1","marker9_2",!1,"frog.mp3","normal"],["marker10_1","marker10_2",!1,"frog.mp3","normal"],["marker11_1","marker11_2",!1,"frog.mp3","normal"],["marker12_1","marker12_2",!1,"goodJoker.mp3","goodJoker"],["marker13_1","marker13_2",!1,"badJoker.mp3","badJoker"]];function addMarkerName(a){params.currentlyVisibleMarkers.push(a)}function removeMarkerName(r){var a,e=params.currentlyVisibleMarkers.filter(function(a){return a!==r});params.currentlyVisibleMarkers=e}function updateGame(){updateHowManyVisible(),checkPair(),updatePairsFound()}function updateHowManyVisible(){2<params.currentlyVisibleMarkers.length?(params.moreThanTwoVisible=!0,hideAllElements()):(params.hideAllElements&&showAllElements(),params.moreThanTwoVisible=!1)}function updatePairsFound(){var r=0,a;memorypairs.forEach(function(a){a[2]&&"normal"===a[4]&&r++}),document.getElementById("pairsFound").innerHTML=" ".concat(r," of ").concat(params.officialMemorypairsLength),r===params.officialMemorypairsLength&&(params.reachedEnd||(params.reachedEnd=!0,setTimeout(function(){$("#endOfTheGame").hide().css("opacity","1").fadeIn(800)},1500)))}function checkPair(){var a=params.currentlyVisibleMarkers.length;if(2==a||1==a)for(var r=[params.currentlyVisibleMarkers[0],params.currentlyVisibleMarkers[1]],e=0;e<r.length;e++){var o=r[e],t;if(void 0!==o)checkForSpecialCard(document.getElementById(o).dataset.cardtype,o)}if(2===a){var n=params.currentlyVisibleMarkers[0],l=params.currentlyVisibleMarkers[1];if(params.goodJokerActive){var i=params.goodJokerActiveId,m;m=i==n?l:n,memorypairs.forEach(function(a){var r;a.includes(m)&&!0!==a[2]&&(console.log("It's a match!"),celebrateMatch(),a[2]=!0,playSound(a[3]))}),params.goodJokerActive=!1}}}function checkForSpecialCard(a,r){var e,o;"badJoker"===a&&(arrayContains(r,params.badJokerPlayed)||(showBadJoker(),params.badJokerPlayed.push(r)));"goodJoker"===a&&(arrayContains(r,params.goodJokerPlayed)||(params.goodJokerActive=!0,params.goodJokerActiveId=r,params.goodJokerPlayed.push(r),1==params.currentlyVisibleMarkers.length&&playSound("goodJoker.mp3")))}function modelsHit(a){if(params.initHits++,params.initHits!==params.officialMemorypairsLength||params.skippedInitColisionHit){if(params.skippedInitColisionHit){for(var r,e=a.path[1].id,o=0,t=0;t<memorypairs.length;t++){var n=memorypairs[t];if(n[0]===e||n[1]===e){o=t;break}}var l=params.currentlyVisibleMarkers[0],i=params.currentlyVisibleMarkers[1],m=a.path[0].className,s=!1,d=document.getElementById(l).firstChild.className,c=document.getElementById(i).firstChild.className;d!==m&&c!==m||(s=!0),console.log(d,c,m),!memorypairs[o][2]&&s&&setTimeout(function(){var a=!1;l!=params.currentlyVisibleMarkers[0]&&l!=params.currentlyVisibleMarkers[1]||(a=!0);var r=!1;i!=params.currentlyVisibleMarkers[0]&&i!=params.currentlyVisibleMarkers[1]||(r=!0),console.log(l,i,params.currentPairMatching[0],params.currentPairMatching[1]),a&&r&&(memorypairs[o][2]=!0,celebrateMatch(),playSound(memorypairs[o][3]),updatePairsFound())},500)}}else params.skippedInitColisionHit=!0}function setOpacityCard(m,s){document.querySelectorAll("a-marker").forEach(function(a){if(a.id===m){var r=a.getElementsByTagName("*"),e=!0,o=!1,t=void 0;try{for(var n=r[Symbol.iterator](),l;!(e=(l=n.next()).done);e=!0){var i;l.value.components.material.material.opacity=s}}catch(a){o=!0,t=a}finally{try{e||null==n.return||n.return()}finally{if(o)throw t}}}})}function celebrateMatch(){$("#matchTitle").hide().css("opacity","1").fadeIn(800).fadeOut(800)}function showBadJoker(){$("#badJoker").hide().css("opacity","1").fadeIn(800).fadeOut(800),playSound("badJoker.mp3")}function addSound(){audioplayer=document.createElement("AUDIO"),audioplayer.src=params.audioPath+"frog.mp3",audioplayer.loop=!1,audioplayer.play(),audioplayer.pause()}function playSound(a){void 0!==a&&(audioplayer.src=params.audioPath+a,audioplayer.play())}function hideAllElements(){params.hideAllElements=!0,params.all3DElements.forEach(function(a){a.setAttribute("visible",!1)})}function showAllElements(){params.hideAllElements=!1,params.all3DElements.forEach(function(a){a.setAttribute("visible",!0)})}function addMarkerListeners(){var a;document.querySelectorAll("a-marker").forEach(function(a){a.addEventListener("markerFound",function(a){letMarkerId=a.target.id,addMarkerName(letMarkerId),updateGame()}),a.addEventListener("markerLost",function(a){letMarkerId=a.target.id,removeMarkerName(letMarkerId),updateGame()})}),document.querySelectorAll("a-marker").forEach(function(a){var r=a.getElementsByTagName("*"),e=!0,o=!1,t=void 0;try{for(var n=r[Symbol.iterator](),l;!(e=(l=n.next()).done);e=!0){var i=l.value;params.all3DElements.push(i)}}catch(a){o=!0,t=a}finally{try{e||null==n.return||n.return()}finally{if(o)throw t}}}),updatePairsFound()}function hideTitle(){$("#titleWrapper").fadeOut("slow")}function loadAframe(){document.querySelector("a-node").load()}function startGame(){addSound(),loadAframe(),addMarkerListeners(),hideTitle()}function checkRain(){if(params.checkForWeather){var a=function a(){navigator.geolocation?navigator.geolocation.getCurrentPosition(r):console.log("Geolocation is not supported by this browser.")},e="",r=function a(r){e="https://api.openweathermap.org/data/2.5/weather?lat="+r.coords.latitude+"&lon="+r.coords.longitude+"&appid="+preparams.appIdWeatherApi;var o=void 0;$.ajax({dataType:"json",url:e,data:function a(r){},success:function a(r){o=r,console.log("The weather outside is "+o.weather[0].main+".");var e=o.weather[0].id;preparams.raining=arrayContains(e,preparams.rainIds),console.log("Is Raining:",preparams.raining),setCorrectModels(),setCorrectTotalCount(),setStartButtonDisabledUntilLoaded()}})};a()}else preparams.raining=!1,console.log("Didn't check for Rain. So Sunny"),setCorrectModels(),addCollisions(),setCorrectTotalCount(),setStartButtonDisabledUntilLoaded()}function generateModelHtml(a,r,e,o,t){var n,l="";if(isEven(a)){var i=params.models[a+1][3];l="collision-".concat(t,' aabb-collider="objects: .').concat(i,'"')}return n=preparams.buildWithMtl?'<a-obj-model class="'.concat(t,'" src="').concat(params.assetsPath).concat(r,'" mtl="').concat(params.assetsPath).concat(e,'" position="').concat(o[0]," ").concat(o[1]," ").concat(o[2],'" ').concat(l,"></a-obj-model>"):'<a-obj-model class="'.concat(t,'" src="').concat(params.assetsPath).concat(r,'" position="').concat(o[0]," ").concat(o[1]," ").concat(o[2],'" ').concat(l,"></a-obj-model>")}function setCorrectModels(){params.models=returnCurrentModels();for(var a=document.querySelectorAll("a-marker"),r=0;r<params.models.length;r++){var e=params.models[r],o=generateModelHtml(r,e[0],e[1],e[2],e[3]);a[r].innerHTML=o,a[r].dataset.cardtype=e[4]}}function setCorrectTotalCount(){for(var a=0,r=0;r<memorypairs.length;r++){var e;"normal"==memorypairs[r][4]&&a++}params.officialMemorypairsLength=a}function returnCurrentModels(){var a;return a=preparams.raining?modelsRain:modelsSun}function addCollisions(){console.log("set up collision event-listeners");for(var a=0;a<params.models.length;a++)if(isEven(a)){var r,e="collision-"+params.models[a][3];console.log(e),AFRAME.registerComponent(e,{init:function a(){this.el.addEventListener("hitstart",function(a){console.log("hitstart"),console.log(a),modelsHit(a)}),this.el.addEventListener("hit",function(a){}),this.el.addEventListener("hitend",function(a){})}})}}function setStartButtonDisabledUntilLoaded(){params.startButton=document.getElementById("startButton"),params.startButton.disabled=!0,params.modelsToLoad=document.querySelectorAll("a-obj-model");for(var a=params.amountLoadedModels=0;a<params.modelsToLoad.length;a++){var r;params.modelsToLoad[a].addEventListener("model-loaded",function(){params.amountLoadedModels++,params.amountLoadedModels===params.modelsToLoad.length?(params.startButton.disabled=!1,params.startButton.innerHTML="Starte das Spiel"):params.startButton.innerHTML="Lade Model ".concat(params.amountLoadedModels,"/").concat(params.modelsToLoad.length)})}}function init(){params.memorypairs=memorypairs,checkRain()}function isEven(a){return 0===(a=Number(a))||!(!a||a%2)}function arrayContains(a,r){return-1<r.indexOf(a)}init();