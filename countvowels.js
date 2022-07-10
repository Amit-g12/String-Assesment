//Count the Vowels

//You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.



var Count_Vowels= (S) => 
{
  let theString = S.toLowerCase(),
  letter,
  vowels_list = "aeiouAEIOU",
  count = 0;
  
  for ( let i = 0; i < S.length; i++ )
  {
    letter = theString.charAt(i);
    if (vowels_list.indexOf(letter) > -1)
    {
      count++;
    }
  }
  return count;    
};
 
console.log(Count_Vowels('Prepbytes'));