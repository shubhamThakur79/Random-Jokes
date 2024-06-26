let jokeDiv = document.querySelector(".jokediv");
let btn = document.querySelector(".btn")
let emoji =document.querySelector(".emoji")
const url = "https://hindi-jokes-api.onrender.com/jokes?api_key=71726840f57d7ab917570f459220";
const apiKey = "71726840f57d7ab917570f459220";

jokeDiv.innerHTML = ""
btn.addEventListener("click", fetchjokes)
async function fetchjokes() {
  
    let response = await fetch(url, {
        headers: {
            'X-Api-Key': apiKey
        }
    })

    let data = await response.json();
    jokeDiv.innerHTML = `<p>${data.jokeContent }</p> <p class="credit">Credit: ${data.created_by}</p>`;
  


    console.log(data)
}



fetchjokes()


let url2="https://emojihub.yurace.pro/api/random";
async function fetchEmoji(){
  let responce = await fetch(url);
  let data = await responce.json();
  emoji.src=`${data}`
  console.log(data)
}
  

   