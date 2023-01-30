let string = "hello"
let boolean = true
let number = 42
let zero = 0
let falseStr = " "

console.log(string + number)
console.log("------------------------------")
console.log(number, "Line 78")
console.log(String(number))
console.log(boolean, typeof boolean)
console.log(number, typeof number)
console.log(typeof [3,4,5])
console.log("-----------------------------")

if(zero === 0){
    console.log("zero is false")
}

if(zero){
    console.log("zero is true")
} else {
    console.log("zero is false")
}

if(falseStr){
    console.log("this string contains", falseStr)
} else {
    console.log("this string is empty")
}

console.log(false)

let helloWorld = "Hello, world!"

if(helloWorld.toLowerCase().includes("Hello")){
    console.log("Hello, world! Contains 'hello'")
} else {
    console.log("Hello, World! does not contain 'hello'")
}

let fruits = ['apples', 'bananas', 'cherries' ]
let abcString = `The ABCs of fruit are ${fruits.join(', ').toLowerCase()}`

let noMoreCherries = abcString.split(',')
noMoreCherries.pop()
noMoreCherries = noMoreCherries.join(',').replace("C", "")
console.log(noMoreCherries)

console.log('-------------------------')

const madLib = (str,arr) => {
    for(i = 0; i < arr.length; i++){
        let randInt = Math.floor(Math.random() * arr.length)

        str = str.replace("X", arr[randInt])
        if(!str.includes('X')){
            break;
        }
    }
    return str
}

let sampleOne = "The X X fox jumped over the X X fence."
let arrayOne = ['quick', 'brown', 'tall', 'black', 'red', 'slow', 'dumb', 'white', 'stinky']

let newSentence = madLib(sampleOne,arrayOne)
console.log(newSentence)

console.log("-----------------------------")


