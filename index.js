var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";

const text1 = "I am navv";
const text2 = "API fetching successfull!";
const text3 = "text 3 also fetched!"


function constructURL(text) {

    fetch(url.text)
        .then(response => response.json())
        .then(json => console.log(json));

}

function displayURL(text) {
    console.log(constructURL(url + text));
}