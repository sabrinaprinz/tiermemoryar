/* eslint-disable */

// This runs before Aframe to set the right models and check for rain.
// ========== General Settings ========== //
let preparams = {
    addCollisionListeners: true,
    switchModelsRain: true,
    raining: false,
    buildWithMtl: true,
}

let modelsSun = [
    ['model.obj', "materials.mtl"],
    ['model.obj', "materials.mtl"],
    ['model.obj', "materials.mtl"],
    ['model.obj', "materials.mtl"],
]

let modelsRain = [
    ['model.obj', "materials.mtl"],
    ['model.obj', "materials.mtl"],
    ['model.obj', "materials.mtl"],
    ['model.obj', "materials.mtl"],
]

function checkRain(){
    ///
    preparams.raining = false;
    setCorrectModels();
}

function setCorrectModels(){
    let models;
    if (!preparams.raining){
        models = modelsSun;
    } else {
        models = modelsRain;
    }

    let markers = document.querySelectorAll('a-marker');
    console.log(markers);
    for (let i = 0; i < markers.length; i++) {
        console.log(markers[i]);
        
    }

}


{/* <a-obj-model src="assets/model.obj" mtl="assets/materials.mtl"></a-obj-model> */}
//<a-obj-model src="crate.obj" mtl="crate.mtl"></a-obj-model>

// ==========  ========== //

checkRain();