function main() {
    watchSubmit();
}

function watchSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        let displayNumber = $('#userNumber').val();
        $('ul').empty();
   getRandomDogs(displayNumber);
})
}

function getRandomDogs(number) {
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson =>
        displayResults(responseJson.message));
}

function displayResults(URLS) {
    return URLS.forEach(link =>  $('ul').append(`<li><img src="${link}" alt="Italian Trulli"></li>`))
   
}

$(main)