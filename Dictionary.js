const button = document.querySelector('#srch');
const form = document.querySelector("form");
const answer = document.querySelector("#txtarea");

button.addEventListener('click',(e)=>{
    e.preventDefault();
    data()
})
async function data(){
    answer.innerHTML="fetching..."
    const val = document.querySelector("#word").value;
    let x = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`)
    let  y = await x.json();
    console.log(x)
    console.log(y)
    console.log(y[0].phonetic)
    console.log(y[0].sourceUrls[0])
    console.log(y[0].meanings[0].definitions[0].definition)
    answer.innerHTML=`<p><b>word:</b> ${val} </p>
    <p>${y[0].meanings[0].partOfSpeech}</p>
    <p><strong>meaning:</strong> ${y[0].meanings[0].definitions[0].definition}</p>
    
    <div><a href="${y[0].sourceUrls[0]}" target="_blank" class="wiki" >Read More</a></div>`
}

