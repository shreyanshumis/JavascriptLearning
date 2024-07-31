const coding = ["js", "ruby", "java", "py", "cpp"]

coding.forEach( function (val) {
    console.log(val);
} ) 
//since it's callback function, it doesnt have name ^
//it will automatically execute all values

//using arrow function
coding.forEach( (val) => {
    console.log(val)
})

//another way

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) //gave func reference.

//a scenario - array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName); //took a value out of array of objects
} )

