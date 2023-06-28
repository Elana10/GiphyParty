console.log("Let's get this party started!");

const form = document.querySelector("#form");
form.addEventListener("submit", async function(e){
    e.preventDefault()
    const input = document.querySelector("#search")
    const inputVal = input.value;
    
    if(inputVal !== ''){
        const img = await searchGiphy(inputVal);
    
    addImg(img);

    input.value = '';
    }
})

async function searchGiphy(word){
    // const res = await axios.get('api.giphy.com/v1/gifs/search', { params: {api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', q: word}});
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${word}s&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    return res.data.data[0].images.original.url
}

async function addImg(url){
    const newImg = document.createElement('img')
    const display = document.querySelector('#imagesHere')
    newImg.src = url;
    display.appendChild(newImg)
}

const removeBtn = document.querySelector("#removeBtn");
const display = document.querySelector('#imagesHere')
removeBtn.addEventListener("click", function(){
    while (display.firstChild){
        display.removeChild(display.firstChild);
    }
});