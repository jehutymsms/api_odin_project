const img = document.querySelector('img'),
    button = document.querySelector('button'),
    input = document.querySelector('input')

fetch('https://api.giphy.com/v1/gifs/translate?api_key=Re8JS3jj5HnRyaC0Gs1odAg1cxCjXmvP&s=cats')
.then(function(response) {
    return response.json()
})
.then(function(response) {
    img.src = response.data.images.original.url
})
.catch(function(err) {
});

button.addEventListener('click', function(event){
    let defaultSearch = 'cats'
    if(input.value != ''){
        defaultSearch = input.value
    }
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Re8JS3jj5HnRyaC0Gs1odAg1cxCjXmvP&s=${defaultSearch}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        img.src = response.data.images.original.url
    })
    .catch(function(err) {
        console.log('search did not return anything')
    });
    event.preventDefault()
})