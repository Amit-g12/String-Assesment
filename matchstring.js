//Match the Strings
//You are given two strings S1 and S2, task is to print  YES,if both strings are same else print NO.


var String_Match = (S1,S2) => 
{
  if(S1 === S2){
       return("YES");
     } 
     else{
       return("NO");
     }   
};
 
console.log(String_Match('Prepbytes','Prepbytes'));