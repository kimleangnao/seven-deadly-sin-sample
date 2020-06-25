
var soundOn = document.querySelector(".sound-on");
var soundOff = document.querySelector(".sound-off");
var audioNew = new Audio("./audio/SD.mp3");

var checkTarvan = document.querySelector(".characters");

/*character switching on click*/
var indexMeliodas = document.querySelector(".index-meliodas");
var indexBan = document.querySelector(".index-ban");
var indexDiane = document.querySelector(".index-diane");
var indexKing = document.querySelector(".index-king");
var indexGowther = document.querySelector(".index-gowther");
var indexMerlin = document.querySelector(".index-merlin");

var cPO =  document.querySelector(".character-portrait-one");
var cPT =  document.querySelector(".character-portrait-two");
var cPTh =  document.querySelector(".character-portrait-three");




/*characters page*/
var characterCheck = document.querySelector(".characters-all");

var checkCategory = document.querySelector(".category");

var categoryRed = document.querySelector(".category-red");
var categoryGreen = document.querySelector(".category-green");
var categoryBlue = document.querySelector(".category-blue");

var responseText;


/*Informations*/
var tabs = document.querySelector(".tabs");
var infoForTabSelect = document.querySelector(".informations-for-tab-select");

var htptg = document.querySelector(".htptg");
var htpop = document.querySelector(".htpop");
var wata = document.querySelector(".wata");
var cs = document.querySelector(".cs");
var pvp = document.querySelector(".pvp-tab");
var guild = document.querySelector(".guild");
var sm = document.querySelector(".sm");


/*nav-controller*/
var navController = document.querySelector(".nav-controller");

var navForEverything = document.querySelector(".nav-for-everything");
var controlNav = 0;
navController.addEventListener("click", function navControllerCallback(){
    
    
    if(controlNav % 2 == 0){
        navForEverything.style.display = "block";
    } else {
        console.log("run1")
        navForEverything.style.display = "none";
    }
    controlNav += 1;
  
});









/*ajax function for information page*/
var responseHttpInfo
function callHttpInfo(){
    var httpInfo = new XMLHttpRequest();
    httpInfo.onreadystatechange = function httpInfoStateChange(){
        if(this.readyState == 4 && this.status == 200){
            responseHttpInfo = JSON.parse(this.responseText);
        }
    }
    httpInfo.open("GET", "./informations.json", true);
    httpInfo.send();
}


/*Information*/
if (tabs){
    callHttpInfo();
    htptg.addEventListener("click", function htptgCallback(){
        let holdHtptga = "";
        for(let i = 0 ; i < responseHttpInfo.info.length; i++){
            if (responseHttpInfo.info[i].title == "How to play the game?"){
                console.log("found:!"+responseHttpInfo[i])
                holdHtptga += "<h1 class='h1-informations'>" +responseHttpInfo.info[i].title+ "</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text1+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text2+"</p>";
                holdHtptga += "<h1 class='h2-informations'>" +responseHttpInfo.info[i].title2+ "</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text3+"</p>";
                holdHtptga += "<h1 class='h2-informations'>" +responseHttpInfo.info[i].title3+ "</h1>";
                holdHtptga+= " <p class='information-text'>" +responseHttpInfo.info[i].text4+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text5+"</p>";
                holdHtptga += "<h1 class='h2-informations'>" +responseHttpInfo.info[i].title4+"</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text6+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text7+"</p>";
                holdHtptga += "<h1 class='h2-informations'>" +responseHttpInfo.info[i].title5+"</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text8+"</p>";
                holdHtptga += "<h1 class='h2-informations'>" +responseHttpInfo.info[i].title6+"</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text9+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text10+"</p>";
            }
        }
        infoForTabSelect.innerHTML = holdHtptga;
    });
    htpop.addEventListener("click", function htpopCallback(){
        let holdHtptga = "";
        for(let i = 0 ; i < responseHttpInfo.info.length; i++){
            if (responseHttpInfo.info[i].title == "How to play on pc?"){
                console.log("found:!"+responseHttpInfo[i])
                holdHtptga += "<h1 class='h1-informations'>" +responseHttpInfo.info[i].title+ "</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text1+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text2+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text3+"</p>";
            }
        }
        infoForTabSelect.innerHTML = holdHtptga;
    });
    wata.addEventListener("click", function wataCallback(){
        let holdHtptga = "";
        for(let i = 0 ; i < responseHttpInfo.info.length; i++){
            if (responseHttpInfo.info[i].title == "What are the attributes?"){
                holdHtptga += "<h1 class='h1-informations'>" +responseHttpInfo.info[i].title+ "</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text1+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text2+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text3+"</p>";
            }
        }
        infoForTabSelect.innerHTML = holdHtptga;
    });
    cs.addEventListener("click", function csCallback(){
        let holdHtptga = "";
        for(let i = 0 ; i < responseHttpInfo.info.length; i++){
            if (responseHttpInfo.info[i].title == "Character Stats"){
                holdHtptga += "<h1 class='h1-informations'>" +responseHttpInfo.info[i].title+ "</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text1+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text2+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text3+"</p>";
            }
        }
        infoForTabSelect.innerHTML = holdHtptga;
    });
    pvp.addEventListener("click", function pvpCallback(){
        let holdHtptga = "";
        for(let i = 0 ; i < responseHttpInfo.info.length; i++){
            if (responseHttpInfo.info[i].title == "PvP"){
                holdHtptga += "<h1 class='h1-informations'>" +responseHttpInfo.info[i].title+ "</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text1+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text2+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text3+"</p>";
            }
        }
        infoForTabSelect.innerHTML = holdHtptga;
    });
    guild.addEventListener("click", function(){
        let holdHtptga = "";
        for(let i = 0 ; i < responseHttpInfo.info.length; i++){
            if (responseHttpInfo.info[i].title == "Guild"){
                holdHtptga += "<h1 class='h1-informations'>" +responseHttpInfo.info[i].title+ "</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text1+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text2+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text3+"</p>";
            }
        }
        infoForTabSelect.innerHTML = holdHtptga;
    });
    sm.addEventListener("click", function smCallback(){
        let holdHtptga = "";
        for(let i = 0 ; i < responseHttpInfo.info.length; i++){
            if (responseHttpInfo.info[i].title == "Story Mode"){
                holdHtptga += "<h1 class='h1-informations'>" +responseHttpInfo.info[i].title+ "</h1>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text1+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text2+"</p>";
                holdHtptga += " <p class='information-text'>" +responseHttpInfo.info[i].text3+"</p>";
            }
        }
        infoForTabSelect.innerHTML = holdHtptga;
    });
}




/*character function*/
if(characterCheck){
    var httpAjax = new XMLHttpRequest();
    httpAjax.onreadystatechange = function runwhenchange(){
        if(this.readyState == 4 && this.status == 200){
            var holdDiv = "";
            responseText = JSON.parse(this.responseText)
            for(let i = 0; i< responseText.datas.length; i++){
                holdDiv += "<img src='"+responseText.datas[i].portrait+"' class='character-all-frame "+responseText.datas[i].type+"' />"
            }
        }
        characterCheck.innerHTML = holdDiv;
    }
    httpAjax.open("GET", "./ability.json", true);
    httpAjax.send();
}

if(checkCategory){
    categoryRed.addEventListener("click", function callbackred(){
        console.log(responseText)
        var holdDivRed = "";
        for(let i = 0; i< responseText.datas.length; i++){
            console.log("run in side!")
            if(responseText.datas[i].type == "Strength"){
                console.log(responseText.datas)
                holdDivRed += "<img src='"+responseText.datas[i].portrait+"' class='character-all-frame "+responseText.datas[i].type+"' />"
            }
        }
        characterCheck.innerHTML = holdDivRed;
    });
    categoryGreen.addEventListener("click", function callbackred(){
        console.log(responseText)
        var holdDivRed = "";
        for(let i = 0; i< responseText.datas.length; i++){
            console.log("run in side!")
            if(responseText.datas[i].type == "Health"){
                console.log(responseText.datas)
                holdDivRed += "<img src='"+responseText.datas[i].portrait+"' class='character-all-frame "+responseText.datas[i].type+"' />"
            }
        }
        characterCheck.innerHTML = holdDivRed;
    });
    categoryBlue.addEventListener("click", function callbackred(){
        console.log(responseText)
        var holdDivRed = "";
        for(let i = 0; i< responseText.datas.length; i++){
            console.log("run in side!")
            if(responseText.datas[i].type == "Speed"){
                console.log(responseText.datas)
                holdDivRed += "<img src='"+responseText.datas[i].portrait+"' class='character-all-frame "+responseText.datas[i].type+"' />"
            }
        }
        characterCheck.innerHTML = holdDivRed;
    });
}







soundOn.addEventListener("click", function(){
    audioNew.volume=0.1;
    audioNew.play();
    soundOn.style.display = "none";
    soundOff.style.display = "block";
});
soundOff.addEventListener("click", function(){
    soundOn.style.display = "block";
    soundOff.style.display = "none";
    audioNew.pause();
});


if (checkTarvan){
    indexMeliodas.addEventListener("click", function(){
        cPO.src="./images/index/meliodas-1.png";
        cPT.src="./images/index/meliodas-2.png"
        cPTh.src="./images/index/meliodas-3.png"
    });
    indexBan.addEventListener("click", function(){
        cPO.src="./images/index/ban-1.png";
        cPT.src="./images/index/ban-2.png"
        cPTh.src="./images/index/ban-3.png"
    });
    indexDiane.addEventListener("click", function(){
        cPO.src="./images/index/diane-1.png";
        cPT.src="./images/index/diane-2.png"
        cPTh.src="./images/index/diane-3.png"
    });
    indexKing.addEventListener("click", function(){
        cPO.src="./images/index/king-1.png";
        cPT.src="./images/index/king-2.png"
        cPTh.src="./images/index/king-3.png"
    });
    indexGowther.addEventListener("click", function(){
        cPO.src="./images/index/gowther-1.png";
        cPT.src="./images/index/gowther-2.png"
        cPTh.src="./images/index/gowther-3.png"
    });
    indexMerlin.addEventListener("click", function(){
        cPO.src="./images/index/merlin-2.png";
        cPT.src="./images/index/merlin-2.png"
        cPTh.src="./images/index/merlin-3.png"
    });    
}