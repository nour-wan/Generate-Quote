let myDiv=document.getElementById("div");
let myBtn=document.getElementById("btn");
let myQuote=document.getElementById("Quote");
let saider=document.getElementById("saidBy");
let mySpan=document.getElementById("qSpan");
let myParagraph=document.getElementById("paragraph");

var arrOfQuote=["أَفْطَرَ الحَاجِمُ وَالمَحْجُومُ","اللَّهُمَّ إِنَّكَ سألْتَنا مِنْ أنْفُسِنا مَا لَا نَمْلِكُهُ إلَّا بِكَ،فأعْطنا مِنْكَ مَا يُرْضِيكَ عَنَّا","أُمِرْتُ أَن أُقاتلَ النَّاسَ حَتَّى يَشْهَدُوا أَن لَا إِلَه إلّا اللَّهُ وأنِّي رَسُولُ اللّهِ،فَإِذا قالُوها عَصَمُةا مِنِّي دِماءَهُمْ وأمْوَالهُمْ إلّا بِحَقِّها وحِسابُهُمْ على اللَّهِ","امْسَحُوا عَلى الْخُفَّيْنِ"]
var arrOfSaider=["عن ثوبان","عن أبي هريرة","عن أبي هريرة","أحمد عن بلال"]

var i=0;

myBtn.onclick=function(){
    
    myParagraph.textContent =arrOfQuote[i];
    saider.textContent=arrOfSaider[i];
    i++;
    if (i==(arrOfQuote.length)+1){
        i=0;
        myParagraph.textContent =" أَبْرِدُوا بِالظُّهْرِ،فَِإِنَّ شِدَّةَ الحَرِّ مِنْ فَيْحِ جَهَنّمَ";
        saider.textContent="عن المغيرة بن شعبة";
    };
    
};

