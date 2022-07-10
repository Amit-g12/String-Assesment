//Reverse the String
///You are given a string S,Your task is to Reverse the string.string can contain both upppercase lowercase letters. 


var Reverse_String = (str) => 
{
 return str.split("").reverse().join("");    
};
 
console.log(Reverse_String('I am utkarsh raj'));