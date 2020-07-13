function main() {
    watchSubmit();
}

function watchSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        let name = $('#userNumber').val();
        $('ul').empty();
   getRandomDogs(name.toLowerCase());
})
}

function getRandomDogs(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
.then(response =>{
    if(response.ok) {
    return response.json()}
        throw alert('Cannot find that breed');
})
    .then(responseJson =>
        displayResults(responseJson.message));
}

function displayResults(URLS) {
    return $('ul').append(`<li><img src="${URLS}" alt="Having trouble loading pupper"></li>`);
}

$(main)