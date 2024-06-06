let userRole="admin";

let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:",accessLevel);

let isLoggedin= true;
let userMessage;

if (isLoggedin){
    if (userRole === "admin"){
        userMessage = "Welcome admin!";
    } else {
        userMessage="Welcome User";
    }
} else {
    userMessage="Please log in!";
}

console.log("User Message:", userMessage);

let userType= "subscriber" ;
let userCategory;

switch (userType) {
    case "admin":
        userCategory="Administrator";
        break;

    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
    userCategory="subscriber";
    break;

    default:
        userCategory="unKnown";
}

console.log ("User Category:",userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated? "Authenticated" : "Not authenticated";

console.log("Authentication Status:",authenticationStatus);