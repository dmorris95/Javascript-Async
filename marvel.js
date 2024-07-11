async function fetchCharacterData(name) {
    //api data
    //for the API key you need to get a public key from the Marvel website
    //for TS, it is a timestamp
    //for hashVal it an MD5 hash of timestamp+privatekey+publickey
    //the private and public keys are available on the Marvel API website
    let apiKey = "your_key";
    let ts = "your_timestamp";
    let hashVal = "your_md5hash";

    const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hashVal}&name=${name}`,
        );
    const characterData = await response.json();
    return characterData;
}

document.addEventListener("DOMContentLoaded", async () => {
    const characterData = await fetchCharacterData("iron man");
    const characterInfoElement = document.getElementById('iron-info');
    console.log(characterData);
    characterData.data["results"].forEach(element => {
        characterInfoElement.innerHTML = `
        <h2>${element.name}</h2>
        <img src="${element.thumbnail['path'] + '.' + element.thumbnail['extension']}" alt="Image of iron man" width=200px/>
        <br>
        <h4>Description</h4>
        <p>${element.description}</p>
        `;
    });
});

document.addEventListener("click", async () => {
    const characterData = await fetchCharacterData("captain america");
    const characterInfoElement = document.getElementById('america-info');
    console.log(characterData);
    characterData.data["results"].forEach(element => {
        characterInfoElement.innerHTML = `
        <h2>${element.name}</h2>
        <img src="${element.thumbnail['path'] + '.' + element.thumbnail['extension']}" alt="Image of captain america" width=200px/>
        
        <h4>Description</h4>
        <p>${element.description}</p>
        `;
    });
});
    