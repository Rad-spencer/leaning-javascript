const accountId = 15937972
let accountemail = "raj@google.com"
var accountpassword = "12345"
accountcity = "jaipur"


//accountId = 3 // not allowed
accountemail = "ha@goooogle.com"
accountpassword = 34232352
accountcity = "bengaluru"
let accountstate;



/* perfer not ot use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table ([accountId, accountemail, accountpassword, accountcity,accountstate])