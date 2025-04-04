// JavaScript एक dynamic language है। इसका मतलब है कि आप runtime पर variables के types को बदल सकते हो।
//  TypeScript, जो कि JavaScript का एक superset है, में static typing होती है। लेकिन मूल JavaScript में types dynamic होते हैं।



const AccountId=14525;
let accountEmail="Vividh5@gmail.com";
var accountPassword="13235";
accountCity="chandigarh";
let accountState;

/*  let accountState;
 when you variable declare or not the assign declare then it would be UNDEFINED
 */

// AccountId=2;  // beacause it is const not change the AccountId


accountEmail="vividh8@gmail.com";
accountPassword="545454";
accountCity="SAS";

console.log(AccountId);

/*
prefer not use to VAR in JavaScript
because of issue in block scope or functional scope
*/



console.table([AccountId,accountEmail, accountPassword, accountCity,accountState]);