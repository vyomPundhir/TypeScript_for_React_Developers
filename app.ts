// The main job TypeScript does is:
// Define a strict type for each variable and use the same type throughout the coding.
// And it does this even if you donot define any explicit type.

let variable="hello"

// variable=456 ---> This cannot be done cause variable is string cannot give it a number type.

variable="hii" // This Can be done.
let age=18
// age="eighteen" --> this can be done.

let ageWidthType: number = 22; // agrWidthType variable created with number Type defined along with the initial value '22'.

// ageWidthType="eighteen" ---> Cannot do this.
ageWidthType=18 //This can be done

let testString: string
testString = "Vyom"

let testBoolean: boolean
testBoolean=true;

let testStringOrNumber: string | number
testStringOrNumber = 10
testStringOrNumber = "HEllo"
// Both string and number are possible.

// Arrays
let names = ["john", "james", "rose", "jack"]
// the above array is having only strings inside it. If I put Any other type inside it, It will give me an error.

// names.push(3) ----> this will give an error
names.push("mike") //this is possible.

let numbers=[1,2,3,4,5]
// numbers.push(false)
numbers.push(99)

let testStringArray: string[] //this is declared as an array which can have only strings.

// testStringArray=[1,2,3] --> cannot do this.
testStringArray=['one','two','three']

let testNumberArray : number[] //this is declared as an array which can have only numbers.
// testNumberArray=[true,"hi",23]
testNumberArray=[12,25,32]

let testStringOrNumberArray: (string | number)[] // the type of the items will be either string or number

testStringOrNumberArray=[1,5,6,"gvhg"]

// OBJECTS

let user={
  username:"vyom",
  age:23,
  isAdmin:false
}  // in this we don't have to decide the datatype because typescript is knows user is a object and has items of different respective types.
//But the types of the Values inside the object cannot be changed.

user.username="jane"//possible
// user.age="eighteen" ----> We cannot do this.

user.age=18
// user.isAdmin="no"
user.isAdmin=true

// user.phone="+123456"----> phone is actually not a key inside the object...this will give a warning.

let userObj: {
  username: string
  age: number
  isAdmin: boolean
} //values' types declared

userObj = {
  username:"John",
  age:23,
  isAdmin: false
} // if the types are declared then all properties should be used i.e.,we cannot just provide the initial values to username and age, we also have to provide value to the isAdmin property.
// but cannot add any other property.

let userObj2: {
  username: string
  age: number
  isAdmin: boolean
  phone?:string //shows this phone property is not required i.e., phone property can be or cannot be added.
}

userObj2 = {
  username:"Jack",
  age:18,
  isAdmin: true,
  phone:"+123456" // if we dont write this we will not get any warning or error as it is not a required field.
}

// Lets learn about ANY type --> If you don't provide any value or type, the type will be ANY.

let testAny; //this has an ANY type

testAny=12;
testAny="Hello"
testAny=true
testAny=[123,456,675]
testAny={}

let testAnyArray : any[] // array whose items have ANY type.
testAnyArray=[1,"two",false,[],{}]

// FUNCTIONS

let sayHi=()=>{
  console.log("hi,welcome")
}// this function is returning void but cannot return any other type.

let functionReturnString = ():string=>{
  return"lamaDev"
} // this is a function which will return string only 

let multiply = (num:number) =>{
  return num*2
} // here num is provided the specific type "number". We need not to specify the return type of the function. Hence, the above func is same as the one below. 
// let multiply = (num:number):number=>{
//   return num*2
// }

let sum =(num1: number, num2: number, another?:number)=>{
  return num1 + num2;
};
sum(2,3) // again "another" is not a required field.

let func = (user:{username:string, age:number, phone?:string})=>{
  console.log(user.username)
} // in this, there is no problem with the function, but if we want to add more arguments inside the function then it will be looking complex. In this case, The TYPE ALIASES ise used.

//TYPE ALIASES

type UserType = {
  username: string;
  age:number;
  phone?:string;
}

let betterFunction =(user:UserType) =>{
  console.log(user.username)
} // here we have user argument which has a type UserType.

type myFunc =(a:number, b:string)=>void // This is a Function signature, A prototype of a function and using this function we can create different functions.

let write : myFunc = (num,str)=>{
  console.log(num+"times"+str);
} // This is a function created using the function signature.

// we can also provide our options to the property of the function signature. For Example:

type UserType2 = {
  username: string;
  age: number;
  phone?:string;
  theme:"dark"|"light" //options are provided to the property "theme".
}

const userWithTheme : UserType2={
  username:"john",
  age:43,
  theme:"light" //The "theme" property can only have either "light" or "dark".
}

// INTERFACES --> just like type but the advanced version

interface IUser {
  username:string;
  email:string;
  age:number
} // this is how we create interface, NOTE:- there is no "=" sign after "IUser"...REMEMBER THIS***

interface IEmployee extends IUser{
  employeeId:number
} // this has everything the userinterface "IUser" has additionally has employeeId too.

const emp : IEmployee ={
  username:"tom",
  email:"tom@gmail.com",
  age:23,
  employeeId:1
};// here it is mandatory to write employeeId here because emp has IEmployee Interface.

const client: IUser={
  username:"tom",
  email:"tom@gmail.com",
  age:23
}; // but here client has IUser interface so emplyeeId is not needed.

// NOTE: If you need to extend any "type", then, just use "interface" or if you don't need just use "type".

// GENERICS --->

interface IAuthor {
  id: number,
  username: string
}// created a IAuthor named interface.

interface ICategory{
  id:number;
  title:string;
} // created a ICategory named interface.

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[]; // 

} // created a IPost named interface

interface IPostBetter <T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe : IPostBetter<String> ={
  id: 1,
  title: "Post Title",
  desc: "Post Desc",
  extra: ["str1", "str2", "str3"],
};

interface IPostEvenBetter <T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2 : IPostBetter<{id:number, username:string}> ={
  id: 1,
  title: "Post Title",
  desc: "Post Desc",
  extra: [{id:1,username:"john"}],
};

const testMe3 : IPostBetter<IAuthor> ={
  id: 1,
  title: "Post Title",
  desc: "Post Desc",
  extra: [{id:1,username:"john"}],
};

const testMe4 : IPostBetter<ICategory> ={
  id: 1,
  title: "Post Title",
  desc: "Post Desc",
  extra: [{id:1,title:"titlename"}],
};