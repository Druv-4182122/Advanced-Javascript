// let Master = "4182122"
// console.log(Master);


// let A = 23
// let B = 45

// if(A === B)
// {
//     console.log("Equal");
// }
// else
// {
//     console.log("Not Equal");
// }

// let array = [0,1,2,3,4,5,6,7,8,9,10];
// let length = array.length

// for(i=0; i<length; i++)
// {
//     let crntv = array[i]
//     let even = crntv % 2 === 0
//     if(even)
//     {
//         console.log(crntv)
//     }    
// }

// function calc(l,v)
// {
//     console.log("The area of the rectangle is",l * v)
// }

// calc(5,7)
// calc(9,5)

function objss  ()
{
    let count = 0
    return function()
    {
        count++
        console.log(count)
    }
}

let variablee = objss()

function add(a,b)
{
    console.log(a + b)
}

// add(4,5)

module.exports = 
{
    objss,
    add,
    variablee
}
