var textTranslate=document.querySelector("#text-area");
var btnTranslate=document.querySelector("#btn-translate");
var textOutput=document.querySelector("#txt-output");

var serverURL="	https://api.funtranslations.com/translate/chef.json";

function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}

btnTranslate.addEventListener("click",function clickEventHandler(){
    var text=textTranslate.value;
fetch(getTranslationURL(text))
.then(response=>response.json())
.then(json=>{
    var translatedText=json.contents.translated;
    textOutput.innerText=translatedText;
    console.log(json.contents.translated);
})
.catch(console.log("error occured"+Error))
})



