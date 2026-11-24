const foodorder = new Promise((resolve,reject)=>{
    let foodReady =true;
    if(foodReady){
        resolve("food is ready")
    }
    else{ 
        reject("food is not ready")
    }

})
foodorder 
     .then((result)=>console.log(result))
     .catch((error)=>console.log(error))
