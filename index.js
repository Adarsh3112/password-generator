// \\ECFDF5
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passLength = 10;
let password = '';
let Words = document.getElementById("words"); 
// passwordhints//
let passHint1 = document.getElementById("pass-hints1");
let passHint2 = document.getElementById("pass-hints2");
let GenereatePass = document.getElementById("generate");
// pass hints ends here //

let modeChanging = document.getElementById("mode-changing");
let mainContainer = document.getElementById("container");
let firstHeading = document.getElementById("first-heading");
let sirstHeading = document.getElementById("second-heading");
let insecureText = document.getElementById("insecure");
let lining = document.getElementById("lines");

function modeChange(){
lining.style.opacity = "0.35";
mainContainer.style.background = "#ECFDF5";
firstHeading.style.color = "#2B283A";
insecureText.style.color = "#6B7280";
}
function generate(){
    for(let i = 0; i<passLength;i++){
        let randomPass = Math.floor(Math.random()*characters.length);
        let newRandom = characters[randomPass];
        passHint1.textContent += newRandom;

    }
   
    for(let i = 0; i<passLength;i++){
        let randomPass2 = Math.floor(Math.random()*characters.length);
        let newRandom2 = characters[randomPass2];
        passHint2.textContent += newRandom2;
    
}


}
