let myDiv=document.getElementById("div");
let myBtn=document.getElementById("btn");
let myQuote=document.getElementById("Quote");
let saider=document.getElementById("saidBy");
let mySpan=document.getElementById("qSpan");
let myParagraph=document.getElementById("paragraph");

var arrOfQuote=["Don't live the same year 75 times and call it a life.","It is hard to fail,but it is worse never to have triednto succeed.","Do it with passion or not at all."]
var arrOfSaider=["Robin Sharma","Theodore Roosevet","Rosa Carey"]

var i=0;

myBtn.onclick=function(){
    myParagraph.textContent =arrOfQuote[i];
    saider.textContent=arrOfSaider[i];
    i++;
    if (i==(arrOfQuote.length)){
        i=0;
    };
    
};

