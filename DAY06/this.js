const user ={
    username : "steven",
    price : 199,
    welcomeMessage : function (){
        console.log(`${this.username} , welcome to our website`)
    }
}
// this keyword is used to reference the variable in the current context or scope
user.welcomeMessage()

// Note : this keyword return empty object when executed outside the context
console.log(this);

//where as when the same this keyword returns window object when it is executed in the browser console


function one(){
    let username = "steve"
    console.log(this.username)
}

one() // this keyword does not work in functions, when it is executed it returns undefined