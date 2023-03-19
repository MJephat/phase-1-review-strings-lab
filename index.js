// creating a variable and assign it to a value.
const currentUser = "John Brisco";

// adding two stings to make 1 longer through interpolation.
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

//changinging from lower case to upper case(use js method)
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//shortening greeting 
const shortGreeting = `Welcome, ${currentUser[0]}!`;

console.log( welcomeMessage);
console.log( excitedWelcomeMessage);
console.log( shortGreeting);

