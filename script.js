const words = ["awkward", "blizzard", "minecraft", "valorant", "clash of clans"];
const word = words[Math.floor(Math.random() * words.length)];
const bodyParts = [document.getElementById("head"),document.getElementById("waist"),document.getElementById("left_arm"),document.getElementById("right_arm"),document.getElementById("left_leg"),document.getElementById("right_leg")]
console.log(word);
let life = 6;
let wasfound = false;
const vowels = "aeiouAEIOU ";
let letters = ""
let temp = "";
for (let i = 0; i < word.length; i++)
{
    if (vowels.includes(word[i]))
    { 
        temp += word[i];
    }
    else
    {
        temp += "_";
    }
}

document.getElementById("container-word").innerHTML = temp;

document.getElementById("submit").addEventListener("click", function(){ 
    const letter = document.getElementById("input").value;
    document.getElementById("input").value = "";
    console.log(letter); 
    letters += letter;
    temp = "";
    for (let i = 0; i < word.length; i++)
    {
       if (vowels.includes(word[i]) || letters.includes(word[i]))
        { 
            temp += word[i];
        }
        else
        {
            temp += "_";
        }
        document.getElementById("container-word").innerHTML = temp;
    }
    if(!word.includes(letter))
    {
        life -= 1; 
        bodyParts[life].style.opacity = 0;
    }
    if(word === temp)
    {
        alert("YOU WON REFRESH TO PLAY AGAIN");
    }

    if (life == 0)
    {
        alert("GAME OVER YOU LOST REFRESH TO PLAY AGAIN");
    }
 });