function *genx(){
    let a = 0;
    while(true){
        yield a++;
    }
}

let res = genx();

console.log(res.next().value);
console.log(res.next().value);