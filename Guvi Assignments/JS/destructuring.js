//array & object destructure it is the only two methods that can be destrctured
//{  //Array Destructuring
console.group("Array destructing ==================================================");

const stuArr = ["praveen","balaji","arun","namatchi"]; // inputs

//default value in array
const [, , , ,testing = 45] = stuArr;
console.log(testing); // 45 //if there is a elements in array run out use default value for array destructure

//rest parameter
const [stu1,stu2,...StuRemaining] = stuArr;
console.log(stu1); //praveen
console.log(stu2); // balaji
console.log(StuRemaining); //[ 'arun', 'namatchi' ]

const [rest1,rest2] = StuRemaining; 
console.log(rest1); // arun
console.log(rest2); // namatchi

//Skipping Value
const [stuVal1,,stuVal2] = stuArr;
console.log(stuVal1); //Praveen
console.log(stuVal2); //Arun //Skipped Balaji the 2nd value

//another method nested destrcuture
const testArr = [1, 2, 5, 7, ["sanjay", 25], 6];
const [ , , , ,[mentorName,mentorAge]] = testArr;
console.log(mentorName,"and",mentorAge);  // }

console.groupEnd();

//{ Object Destructing
//can only destrcuture using key name 
console.group("Object destructing==================================================");
const personObj = {
    firstName : "sanjay",
    lastName : "guvi",
    position : "mentor",
    workPlace: "Remote",
    address : {state:"tamilNadu",country:"india"},  // inputs
};

const {firstName,lastName,pos} = personObj;
console.log(firstName); // sanjay
console.log(lastName); //guvi
console.log(pos); // undefined need to use same key name

//renaming the object Key Name 
console.group("Object destructing -- Renaming");
const {workPlace:jobType} = personObj; //doesn't change original object
console.log(jobType); //remote

//nested Object
const {address:{state,country},address} = personObj;
console.log(state);
console.log(country);
console.log(address);

// Default Value in Object
const {position,age = 25} = personObj;
console.log(position); // mentor
console.log(age); // 25 it was not in inputs but logged bacause of the dafault value




