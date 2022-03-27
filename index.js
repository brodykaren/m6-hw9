

// //form submit//

var form = document.querySelector('form')
var header = document.querySelector('h1')
var feelsLike = document.querySelector('.feel_like')
var temp = document.querySelector('.temp')
var nameInput = document.querySelector('#weather-search')
// var agentInput =document.querySelector ('input [type=number]')

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    fetch ('https://api.openweathermap.org/data/2.5/weather?appid=44898065de269c19bb043c83dfe3f430&units=imperial&q=' + nameInput.value)
    .then(response=> response.json())
    .then(data=>{
        console.log(data)
        header.innerText = "Welcome to "  + data.name
        feelsLike.innerText = "Feels Like: " + data.main.feels_like
        temp.innerText = "Current: " + data.main.temp
    })
})



// var usersEl =document.getElementById ('weather')
// var btn = document.querySelector ('button')

// form.onsubmit = function(e) {

//     e.preventDefault ()
//     console.log (locationInput.value)




// var usersEl =document.getElementById ('weather')
// var btn = document.querySelector ('button')

// btn.onclick = function () {

// console.log ('clicked!')

// } )

// }


// // console.log ('Here!')