"use strict";
const words = ["pk", "karz", "dhoom", "tanu weds manu", "sholay", "student of the year", "flying jatt", "hera pheri", "boss", "sanju","hindi medium", "stree", "dangal", "zero","sultan", "kabir singh"];
const word = words[Math.floor(Math.random() * words.length)];
const bodyParts = [document.getElementById("head"),document.getElementById("waist"),document.getElementById("left_arm"),document.getElementById("right_arm"),document.getElementById("left_leg"),document.getElementById("right_leg")]
let life = 6;
let wasfound = false;
const vowels = "aeiouAEIOU ";
let letters = ""
let temp = "";
for (let i = 0; i < word.length; i++)
{
    if (vowels.includes(word[i]))
        temp += word[i];
    else
        temp += "_";
}
document.getElementById("container-word").innerHTML = temp;
document.getElementById("submit").addEventListener("click", () => { 
    let letter = document.getElementById("input").value;
    letter = letter.toLowerCase();
    document.getElementById("input").value = "";
    letters += letter[0];
    temp = "";
    for (let i = 0; i < word.length; i++)
    {
       if (vowels.includes(word[i]) || letters.includes(word[i]))
            temp += word[i];
        else
            temp += "_";
        document.getElementById("container-word").innerHTML = temp;
    }
    if(!word.includes(letter))
    {
        life -= 1; 
        bodyParts[life].style.opacity = 0;
    }
    if(word === temp)
        alert("YOU WON REFRESH TO PLAY AGAIN");
    if (life == 0)
        alert(`Game over the word was ${word} you lost refresh to play again`);
 });