
function factoryMethod(perName,perAge,perJob){
    return {
        perName,
        perAge,
        perJob,
        getDetails: function(){
            console.log(`
            Name of the person is ${perName}
            age is ${perAge}
            job is ${perJob}
            `);
        }
    }
}

let sathish = factoryMethod("sathis",24,"Full stack developer");

// console.log(sathish.perName);
// sathish.getDetails();
console.log(sathish);
sathish.color = "blue";
console.log(sathish);
console.log(factoryMethod());