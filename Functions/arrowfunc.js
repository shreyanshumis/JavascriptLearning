//Arrow function and this keyword

const user = {
    username: "shrey",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to the website!`);
        console.log(this); //shows the current context - welcomeMessage in this case
    }

}

// user.welcomeMessage()
// user.username = "shrek"
// user.welcomeMessage()

// console.log(this); current context - empty object {}
//it's not an empty object in browser js, it's only empty in node environment

function chai(){
    let user = "hey"
    console.log(this.user); //undefined cuz it works only in objects and not in functions
}

chai()