var input = document.getElementById('inputBox');
var button = document.getElementById('translateBtn');

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    alert("something broke!, try again later.");
}

button.addEventListener("click", () => {
    var inputText = input.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        document.getElementById('outputBox').innerHTML = translatedText;
    })
    .catch(errorHandler)
})