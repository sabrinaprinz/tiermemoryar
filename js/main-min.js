"use strict";var params={currentlyVisibleMarkers:[],moreThanTwoVisible:!1,foundPairs:0,hideAllElements:!1,all3DElements:[]},memorypairs=[["marker1_1","marker1_2",!1],["marker2_1","marker2_2",!1],["marker3_1","marker3_2",!1],["marker4_1","marker4_2",!1]];function addMarkerName(e){params.currentlyVisibleMarkers.push(e)}function removeMarkerName(r){var e,a=params.currentlyVisibleMarkers.filter(function(e){return e!==r});params.currentlyVisibleMarkers=a}function updateGame(){updateHowManyVisible(),checkPair(),updatePairsFound()}function updateHowManyVisible(){2<params.currentlyVisibleMarkers.length?(params.moreThanTwoVisible=!0,hideAllElements()):(params.hideAllElements&&showAllElements(),params.moreThanTwoVisible=!1)}function updatePairsFound(){var r=0,e;memorypairs.forEach(function(e){e[2]&&r++}),document.getElementById("pairsFound").innerHTML=" ".concat(r," of ").concat(memorypairs.length),r===memorypairs.length&&alert("all matches found")}function checkPair(){if(2===params.currentlyVisibleMarkers.length){var t=params.currentlyVisibleMarkers[0],n=params.currentlyVisibleMarkers[1];memorypairs.forEach(function(e){var r=e.includes(t),a=e.includes(n);r&&a&&!0!==e[2]&&(console.log("It's a match!"),celebrateMatch(),e[2]=!0,setOpacityCard(t,.5),setOpacityCard(n,.5))})}}function setOpacityCard(o,m){document.querySelectorAll("a-marker").forEach(function(e){if(e.id===o){var r=e.getElementsByTagName("*"),a=!0,t=!1,n=void 0;try{for(var l=r[Symbol.iterator](),i;!(a=(i=l.next()).done);a=!0){var s;i.value.components.material.material.opacity=m}}catch(e){t=!0,n=e}finally{try{a||null==l.return||l.return()}finally{if(t)throw n}}}})}function celebrateMatch(){$("#matchTitle").hide().css("opacity","1").fadeIn(800).fadeOut(800)}function hideAllElements(){params.hideAllElements=!0,params.all3DElements.forEach(function(e){e.setAttribute("visible",!1)})}function showAllElements(){params.hideAllElements=!1,params.all3DElements.forEach(function(e){e.setAttribute("visible",!0)})}function init(){var e;document.querySelectorAll("a-marker").forEach(function(e){e.addEventListener("markerFound",function(e){letMarkerId=e.target.id,addMarkerName(letMarkerId),updateGame()}),e.addEventListener("markerLost",function(e){letMarkerId=e.target.id,removeMarkerName(letMarkerId),updateGame()})}),document.querySelectorAll("a-marker").forEach(function(e){var r=e.getElementsByTagName("*"),a=!0,t=!1,n=void 0;try{for(var l=r[Symbol.iterator](),i;!(a=(i=l.next()).done);a=!0){var s=i.value;params.all3DElements.push(s)}}catch(e){t=!0,n=e}finally{try{a||null==l.return||l.return()}finally{if(t)throw n}}}),console.clear(),updatePairsFound()}init();