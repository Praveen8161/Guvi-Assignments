let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    console.log(data[112]);
    let mappedData = data.map((value) => {return value.currencies});
    console.log(mappedData);

//     console.group("a. Get all the countries from Asia continent/region using Filter function");
//     let asiaCountries = data.filter((value) => {return value.continents[0] === "Asia"})
//     //console.log(asiaCountries);
//     for(var a of asiaCountries){
//          console.log(`Continent: ${a.continents}
//                       Nation: ${a.name.common}`);
//     }
//     console.groupEnd();

//     console.group("b. Get all the countries with a population of less than 2 lakhs using Filter function");
//     let populationLess = data.filter((value) => {return value.population < 200000});
//     //console.log(populationLess);
//     for(var p of populationLess){
//         console.log(`Nation: ${p.name.common}
//                      Population: ${p.population}`);
//     }
//     console.groupEnd();

//     console.group("c. Print the following details name, capital, flag using forEach function");
//     data.forEach((value) =>{
//         console.log(`Country Name: ${value.name.common}
//                      Capital: ${value.capital}
//                      Flag: ${value.flag}
//                      Flag Img: ${value.flags.png}`);
//     });
//     console.groupEnd();

//     console.group("d. Print the total population of countries using reduce function");
//     let totalPopulation = data.reduce((total,value) => {
//         return total + value.population;
//     },0);
//     console.log(`Total Population: ${totalPopulation}`);
//     console.groupEnd();

//     console.group("e. Print the country which uses US Dollars as currency");
//     let usNations = data.filter((value) =>{
//         if(value.hasOwnProperty("currencies")){
//             if(value.currencies.hasOwnProperty("USD")){
//                 return true;
//             }
//         }
//     });
//     for (var u of usNations){
//         console.log(`Nation: ${u.name.common}
//                      currency: ${u.currencies.USD.name}`);
//     }
//     console.groupEnd();
}

