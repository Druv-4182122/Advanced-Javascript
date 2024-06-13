// const { add, variablee } = require(".");        // it imports files from index.js

// add(56,55)
// variablee()
// variablee()





// this is a question to find print out odd numbers from the array.
// let array = [1,2,3,4,5,6,7,8,9,10]
// let length = array.length

// for(let i = 0; i < length; i++)
//     {
//         let calculated_v = array[i]
//         let even = calculated_v % 2 === 1      
        // if you change it like let even = calculated_v % 2 === 0 then it'll print out even numbers from the array
    //     if(even)
    //         {
    //             console.log(calculated_v);
    //         }
    // }






//this is the question to find out the oldest vampire from the array of objects
// let Vampires = [
//     {Name : "Joseph", Age : 211},
//     {Name : "Jasmine", Age : 279},
//     {Name : "Jonathan", Age : 210},
// ]
//checking
// function findOldAge(old)
// {
//     let olderVampire = old[0]
//     for(let i = 1; i < old.length; i++)
//         {
//             let newSearchVampire = old[i]
//             if(newSearchVampire["Age"] > olderVampire.Age)   // if you change it like if(newSearchVampire["Age"] < olderVampire.Age) then it'll find out the youngest vampire from the array
//                 {
//                     olderVampire = newSearchVampire
//                 }
//         }
//     return olderVampire
// }

// console.log(findOldAge(Vampires));





// this is a question to take a array of strings which contains numbers and converts it to integer which means the numbers are no longer a string datatype 
// let arrrray = ['9','8','4','5']
// let finalArr = []
// for(let i = 0; i < arrrray.length; i++)
//     {
//         let newArrrr = parseInt(arrrray[i])
//         finalArr.push(newArrrr)
//     }
// console.log(finalArr);    





// this is a question to sort the object in ascending order based on specific property
// let objj = [
//     {Name:'Jasmine', Age:169},
//     {Name:'Joseph', Age:458},
//     {Name:'John', Age:258},
//     {Name:'Jonathan', Age:123}
// ]

// let sortedArr = objj.sort((a,b) => a.Age - b.Age)
// if you change it like let sortedArr = objj.sort((a,b) => b.Age - a.Age) then it'll sort it in descending order
// console.log(sortedArr);





// this is a question which slices the array [0] index and [5] index
// let arraay = [0,1,2,3,4,5]
// let length = arraay.length

// function trim(arr)
// {
//     let trimmedArray = arraay.slice(1, length - 1)
//     return trimmedArray
// }

// let TrimmedArray = trim(arraay)
// console.log(TrimmedArray);




// this is a question which calculates the total cost from the below Cart
// let Cart = {
//     "Milk": 
//     {
//         Quantity:4,
//         Cost:120
//     },
//     "Book": 
//     {
//         Quantity:5,
//         Cost:200
//     },
//     "Pen": 
//     {
//         Quantity:20,
//         Cost:30
//     }
// }

// function Calc(obj)
// {
//     let keys = Object.keys(obj)
//     let sum = 0
//     for(let i = 0; i < keys.length; i++)
//         {
//             let current_key = keys[i]
//             keys_db = Cart[current_key]
//             let total = keys_db.Cost * keys_db.Quantity
//             sum = sum + total
//         }
//     return sum    
// }
// console.log("Your Total amount is",Calc(Cart),"rs");

// console.log("I Guess its working");





// this is a function which copies from the other function
// let original = {
//     Nike: {
//         Quality: ["Good","Premium","TopNotch"]
//     },
//     Puma: {
//         Quality: ["Legend","Glossy","OldSchool"]
//     }
// }

// function copyFunction(obj)
// {
//     let newObj = obj
//     return newObj
// }

// let copy = copyFunction(original)
// console.log(copy);





// this is a function that calculates the average marks from the object
// let Topper = {
//     Maths: {
//         marks:8
//     },
//     Science: {
//         marks:7
//     },
//     Physics: {
//         marks:9
//     }
// }

// function FindAverageMarks(obj)
// {
//     let sum = 0
//     let Subjects = 0
//     let Keys = Object.keys(obj)
//     for(let i = 0; i < Keys.length; i++)
//         {
//             let Current_keys = Keys[i]
//             let Calcc = Topper[Current_keys].marks

//             sum = sum + Calcc
//             Subjects++
//         }
//     let average = sum / Subjects
//     return average
// }

// console.log("The Average of the subjects is",FindAverageMarks(Topper));





// this function increments everytime we call it.
// function Invocation()
// {
//     let BeingCalled = 0
//     return function()
//     {
//         BeingCalled++
//         console.log(BeingCalled);
//     }
// }

// let increment = Invocation()

// increment()
// increment()
// increment()
// increment()
// increment()
// increment()
// increment()
// increment()
// increment()
// increment()

// let examplee = (a,b) => 
//     {
//         return console.log(a * b);
//     }

// examplee(7,7)





// function that sorts in descending order 
// let Price = [
//     {Name:"AmulMilk", cost:200},
//     {Name:"AnandMilk", cost:369},
//     {Name:"PowerderedMilk", cost:500},
// ]

// let Desc = Price.sort((a,b) => b.cost - a.cost)
// console.log(Desc);





// this function prints only that string from the array which has more than 5 characters
// let strings = ["This", "is", "not", "incredible", "because", "i dont know"]
// let filterOutShortString = (str) => 
//     {
//         let LongStrings = []
//         for(let i = 0; i < str.length; i++)
//             {
//                 let CurrentString = str[i]
//                 if(CurrentString.length > 5)
//                     {
//                         LongStrings.push(CurrentString)
//                     }
//             }
//         return LongStrings
//     }

// console.log(filterOutShortString(strings));





//example of class and constructor used for creating templates and can be used countless times
// class Deck
// {
//     constructor(Name,Type)
//     {
//         this.Name = Name
//         this.Type = Type
//     }

//     tryy()
//     {
//         console.log("It Worked !!!", this.Type);
//     }
// }

// let Bowler = new Deck("Bowler", "Epic")
// let Witch = new Deck("Witch", "Epic")
// let RamRider = new Deck("Ram Rider", "Legendary")
// let Arrows = new Deck("Arrows", "Common")
// let HiddenTesla = new Deck("Hidden Tesla", "Common")
// let Pheonix = new Deck("Pheonix", "Legendary")
// let MiniPekka = new Deck("Mini Pekka", "Rare")
// let Rocket = new Deck("Rocket", "Rare")

// console.log(Bowler);
// console.log(Witch);
// console.log(RamRider);
// console.log(Arrows);
// console.log(HiddenTesla);
// console.log(Pheonix);
// console.log(MiniPekka);
// console.log(Rocket);

// Pheonix.tryy()


//class that can use the properties of parent class
// class OverPowered extends Deck
// {
//     constructor(Name,Type,Counter)
//     {
//         super(Name,Type)
//         this.Counter = Counter
//     }

//     tryy2()
//     {
//         console.log("This Works Too !!!",this.Type);
//     }

   
// }

// let MegaKnight = new OverPowered("MegaKnight","Legendary","MiniPekka")
// console.log(MegaKnight);
// let LittlePrince = new OverPowered("Little Prince","Champion","Bowler")
// console.log(LittlePrince);
// LittlePrince.tryy2()




/*initializing a class which creates a template used to calculate
 the area of any rectangle */

// class Rectangle
// {
//     constructor(Width,Height,Name)
//     {
//         this.Width = Width
//         this.Height = Height
//         this.Name = Name
//     }

//     calc()
//     {
//         let Area = this.Width * this.Height
//         console.log("The area of the", this.Name, "is",Area);
//     }
// }

// let rect1 = new Rectangle(5,10,"rect1")
// console.log(rect1);
// rect1.calc()

// let rect2 = new Rectangle(8,10,"rect2")
// console.log(rect2);
// rect2.calc()


// class Circle
// {
//     constructor(Radius)
//     {
//         this.Radius = Radius
//     }
// }

// let new_circle = new Circle(5.5)
// console.log(new_circle);






// let sleep = ms => new Promise(r => setTimeout(r,ms))

// async function Run()
// {
//     await sleep(5000)
//     console.log("Roronoa Zoro");
// }

// Run()

// async function errorr()
// {
//     try
//     {
//         const res = await fetch("https://the-one-api.dev/v2/book")
//         const data = await res.json()
//         console.log(data);
//     }
//     catch(err)
//     {
//         console.log("Error Fetching Data");
//     }
// }
// errorr()






// const greeting = Name => {
//     console.log("Hi Nice to meet you", Name);
// }
// greeting("Druv")

// let Personalities =["Scary","Unknown","Bold"]
// let isPersonalitySafe = Personalities.includes("Unknown") ? false : true
// if(Personalities.includes("Unknown"))
//     {
//         isPersonalitySafe = false
//     }
// else
// {
//     isPersonalitySafe = true
// }
// console.log(isPersonalitySafe);



// ternary operator "?" we can do the same if else statement in one line using ternary operator





// let newObject = {
//     name: "Druv",
//     age: 21
// }

// if we want to log the values of name and age we would do like this

// console.log(newObject.name, newObject.age);

// or like this

// let name = newObject.name
// let age = newObject.age
// console.log(name,age)



// instead of the above queries we can do this in one line without calling both name and age seperately

// const {name,age} = newObject
// console.log(name,age);




// let myName = "Druv"
// let mySurname = "Nagpal"
// console.log("Hello my name is", myName, "and my surname is", mySurname);
// here we need to break the string inOrder to include the variable so we can simplify this like this
// it is called template literal string, this uses `` instead of ""

// console.log(`Hello my name is ${myName} and my surname is ${mySurname}`);





// this ... is called Spread Operator is used to copy an object or an array 
// let aObject = {
//     favouriteCharacter : "Roronoa Zoro"
// }

// let bObject = {
//     ...aObject,
//     favouriteVillian: "Doflamingo"
// }
// console.log(bObject);







// Reduce, map, filter, goes beyond my brain





// for of loop 

// let cArray = [25,47,69,99,51,9]

// for (let current_value of cArray){
//     console.log(current_value);
// }

//this is much easier than this 

// for(let i = 0;i<cArray.length;i++){
//     let current_value = cArray[i]
//     console.log(current_value);
// }

// or this

// cArray.forEach((curr_value) => {console.log(curr_value);} )

// squares of the above array
// let squaress = current_value => {
//     for(let i = 0; i < cArray.length; i++){
//         current_value = cArray[i] * cArray[i]
//         console.log(current_value);   
//     }
// }
// squaress(cArray)





