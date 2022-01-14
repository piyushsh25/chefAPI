const textTranslate=document.querySelector("#text-area");
const btnTranslate=document.querySelector("#btn-translate");
const textOutput=document.querySelector("#txt-output");

let serverURL="	https://api.funtranslations.com/translate/chef.json";

const getTranslationURL=(text)=>{
    return serverURL+"?"+"text="+text;
}

btnTranslate.addEventListener("click",function clickEventHandler(){
    let text=textTranslate.value;
fetch(getTranslationURL(text))
.then(response=>response.json())
.then(json=>{
    let translatedText=json.contents.translated;
    textOutput.innerText=translatedText;
    console.log(json.contents.translated);
})
.catch(console.log("error occured"+Error))
})