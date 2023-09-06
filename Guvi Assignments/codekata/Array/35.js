let year = "2004 1999 2019 2009 2014".split(" ");
let party = "JDU JDU CON JDU CON".split(" ");
let elec = {};
for (var i=0; i<year.length;i++){
    elec[year[i]] = party[i];
}
let key = Object.keys(elec);
for (var k=0;k<key.length;k++){
    if(elec[key[k]] === elec[key[k+1]] || elec[key[k+1]] === undefined){
        continue;
    }else{
        console.log(key[k+1]);
        break;
    }
}