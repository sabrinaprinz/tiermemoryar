"use strict";var preparams={addCollisionListeners:!0,switchModelsRain:!0,raining:!1,buildWithMtl:!0},modelsSun=[["model.obj","materials.mtl"],["model.obj","materials.mtl"],["model.obj","materials.mtl"],["model.obj","materials.mtl"]],modelsRain=[["model.obj","materials.mtl"],["model.obj","materials.mtl"],["model.obj","materials.mtl"],["model.obj","materials.mtl"]];function checkRain(){preparams.raining=!1,setCorrectModels()}function setCorrectModels(){var e;e=preparams.raining?modelsRain:modelsSun;var l=document.querySelectorAll("a-marker");console.log(l);for(var o=0;o<l.length;o++)console.log(l[o])}checkRain();