// if the value is in string then match the case value with string.. as below the value is in number as const month =3 then case value becomes as case 1, case 2, case 3 and so on then in case of other like string put the same as in with "" as example if the const month = march then case value will be written as case January, case Feburary, case March, case April and so on and also remember that it is sensitive type so match the spealing and the upper and lower case in spealing
//switch (key) {
//     case value: 
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}