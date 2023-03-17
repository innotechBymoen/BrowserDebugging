let username = "best_user";
let user_age = 30;
let is_member = true;

if(username == 'admin' || (user_age >= 30 && is_member === true)) {
    console.log("Special Greeting");
} else {
    console.log("Standard Greeting");
}

console.log(`Greetings ${username}`);
console.log(`You are: ${user_age}`);

let max_volume = 10;
let current_volume = 7;

console.log(max_volume / current_volume);
console.log(max_volume / current_volume * 100);