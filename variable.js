// To Print an statement in js we use this
console.log("Hello World!")
// beacuse of hositing i can change the value from here
accountPassword = "100"
// Variable & constant
const accountId = 1
let accountEmail = "anuj.negi@uber.com"
var accountPassword;
accountCity = "dehradun"
let accountState; // at that time the value will be undefined

// accountCity = "dehradun" not a good practice beacuse it will defined in the global context

// accountId = 2 -> assingment in constnat varibale is not allowed if you try do that you will get an error

// accountEmail = "anuj.negi@meta.com" if you do that the accountEmail will updated to anuj.negi@meta.com

accountCity = "USA"

// consle.table is used to show var in form of table
console.table([accountId, accountEmail, accountPassword, accountCity])
