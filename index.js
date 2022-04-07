const img = document.querySelector('img'),
    button = document.querySelector('button'),
    input = document.querySelector('input');

getCats()

async function getCats(){
    let defaultSearch = 'cats';
    if(input.value != ''){
        defaultSearch = input.value;
    };
    try{
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Re8JS3jj5HnRyaC0Gs1odAg1cxCjXmvP&s=${defaultSearch}`),
        catData = await response.json();

    img.src = catData.data.images.original.url
    }catch(err){
        console.log('search did not return anything')
    }
};

button.addEventListener('click', function(event){
    getCats()
    event.preventDefault();
});