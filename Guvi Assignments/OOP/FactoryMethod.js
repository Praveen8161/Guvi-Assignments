function manufacturCars(name,engineSpec,seat,variant){
    return {
        name,
        engineSpec,
        seat,
        variant,
        startManufacturing : function(){
            console.log(`
                    Starting manufacturing ${name},
                    creating a engine of ${engineSpec},
                    creating a body for ${name},
                    attaching a seat of ${seat},
                    completed the chase of car ${name},         
            `)
        },
    };
}
const virtus = manufacturCars("virtus",1,"4 seat leather","petrol");
const vento = manufacturCars("vento",1.5,"4 seat foam","diesel");
virtus.color = "red";
console.log(virtus);
// console.log(manufacturCars());
virtus.startManufacturing();
// console.log(vento);
// vento.startManufacturing();
