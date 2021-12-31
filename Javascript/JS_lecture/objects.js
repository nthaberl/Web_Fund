// UNORDERED DATA STRUCTURES

// INDEX - VALUES
// arrays are ordered index values, all data in array should be same data type
var array = ["a", "b", "c", "d"]


// KEYS - VALUES
// objects are unordered data structures that use key-value pairs, can hold any type of data
var userInfo = {
    "firstName" : "Natascha",
    "lastName" : "Haberl",
    "password" : "awesomepassword12345",
    "age" : 31,
    "interests" : ["sports", "music", "games"]
}

// ACCESS

console.log(userInfo["lastName"]);
console.log(userInfo.lastName);
console.log(userInfo["age"]);
console.log(userInfo.age);

console.log(userInfo["interests"][2])
console.log(userInfo.interests[2])

// CREATING KEY-VALUE PAIRS
userInfo["dob"] = "09/18/1990"

// can not use dot notation to add key-value pairs

userInfo.interests.push("D&D");

