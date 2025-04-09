let score = "55abx"

console.log(typeof score)
console.log(typeof (score))

// let's suppose that the 55 is a string value and we want to convert it to number// 

let valueinNumber = Number(score)
console.log(typeof valueinNumber)
console.log(valueinNumber)

//to convert the value to number => Number(var) // 

// 33 = 33
//"33" = 33
//"33abx" = NaN
//true = 1; false = 0
//null = 0
//undefined = NaN
//"" = 0 //

// to convert the number to boolean 

let isLoggedin = 1 

let booleanisLoggedin = Boolean(isLoggedin)
console.log(booleanisLoggedin)
 
// 1=true, 0= false
// "" = false
//"shruti" = true 

let age = 21

let stringNumber = String(age)
console.log(stringNumber)
console.log(typeof stringNumber)

//to convert the value to string = String(var)


// operations.....................// 

let value = 3
let negvalue = -value 
console.log(negvalue)

// console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2%2)
//console.log(2**3) 2 power 3
//console.log(2/2)

let string1= ("hello")
let string2 = (" Shruti")
let string3 = string1 + string2

console.log(string3)

// console.log(1+"2")
// console.log("1"+ 2)
// console.log("1"+2+2) // if string is first then every value is treated as string
// console.log(1+2+"2") // if string is at the last then it will be treated as a string and for other operation will be performed
// console.log(1+2+"3"+3)
// console.log(1+2+"3"+4+5) // wherever string comes the value after is treated as string and before can the operation be done


console.log(+true)
console.log(+"")

let gamecounter = 100
++gamecounter          // gamecounter++ = 101
console.log(gamecounter)

// postfix = x++ it first assigns x to y (which is 5), then increments x to 6.

let x = 5
let y = x++ 
console.log(y) // 5
console.log(x) // 6

//prefix - It first increments x to 6, then assigns that value to y.

let x = 5
let y = ++x
console.log(x)
console.log(y)