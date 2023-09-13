try{
    const hello = "World";
    hello = "home";
}catch(err){
    console.log(err); // TypeError: Assignment to constant variable
    console.log(err.name); //TypeError
    console.log(err.message); //Assignment to constant variable.
    console.log(err.stack); // TypeError: Assignment to constant variable

    console.table(err); //as a Table

    // console.error(err); //works in node.js not browsers have to check
    // console.warn(err); //works in node.js not browsers have to check
}finally{
    console.log(`Finally this will no matter \n
    whether the try and catch run or not`);
}
console.log("==========================================================");
try{
    throw new Error("JS In-Built custom Error method");
}catch(err){
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}
console.log("==========================================================");
try{
    throw new customError("I created this custom error");
}catch(err){
    console.log(err.stack);
}
function customError(message){
    this.message = message;
    this.name = "errorCreatedByMe";
    this.stack = `${this.name}:${this.message}`;
    return this.stack;
}
console.log("Summa Testing ===================================");
let a = customError("testing ============================== The End");
console.log(a);
