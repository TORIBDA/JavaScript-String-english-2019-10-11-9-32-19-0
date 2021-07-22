// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = "'".concat(name.toUpperCase(), "'");
console.log(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var newSentenceValue='';
var splittedWords = sentence.split(" ");
for (var x = 0; x < splittedWords.length; x++) 
{
     splittedWords[x] = splittedWords[x][0].toUpperCase() + splittedWords[x].substr(1);
     if(x < splittedWords.length-1)
     {
     	newSentenceValue += splittedWords[x] + ' ';
     }
     else
     {
     	newSentenceValue += splittedWords[x];
     }
}
console.log(newSentenceValue);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.substr(1);
console.log(money);