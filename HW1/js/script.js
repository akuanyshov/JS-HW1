// 1

const firstName = "Азат";
const lastName = "Куанышов";
const age = 22;
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age}`);

// 2
const city = "Атырау";
console.log("Я родом из города " + city);

// 3
let password = "qwerty123";
let hasAccess = password !== "";
console.log("Password:", password);
console.log("Has access:", hasAccess);

// 4
let isMember = false;
console.log(isMember.toString(), typeof isMember);

// 5
let cartItems = 0;
let isCartEmpty = Boolean(cartItems);
console.log("Cart items:", cartItems);
console.log("Is cart empty:", isCartEmpty);


// 6
const averageScore = 89.75695;
console.log(averageScore.toFixed(1));

// 7
let grettingMessage = "      Приветствуем вас в мире программирования!        ";
console.log(grettingMessage.trim());
console.log(grettingMessage.toUpperCase());
console.log(grettingMessage.includes("программирования"));
