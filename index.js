const api = {
  key: "8475e875c7fb1efc3a442c138584051c",
  base: "api.openweathermap.org/data/2.5"
}
const search = document.getElementById("search")
const place = document.getElementById("place")
const date = document.getElementById("date")
const temp = document.getElementById("temperature")
const type = document.getElementById("weather-type")
const lh = document.getElementById("low-high")
// -----------------------------> LOCATION <------------------------------------

search.addEventListener("keyup", getdetails)

function getdetails(event){
  if(event.key == "Enter")
  {
    let xhr = new XMLHttpRequest
    let url = `https://${api.base}/weather?q=${search.value}&units=metric&appid=${api.key}`
    // console.log(url)
    xhr.open("GET", url, true)

    xhr.onload = function(){
      if(this.status == 200)
      {
        let data = JSON.parse(this.responseText)
        displayDetails(data)
        // console.log(this.responseText)
      }
    }

    xhr.send()
  }
}

function displayDetails(data){
  place.textContent = `${data.name}, ${data.sys.country}`
  temp.textContent = `${Math.round(data.main.temp)}°c`
  type.textContent = data.weather[0].main
  lh.textContent = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`
}
// search.addEventListener("keyup", (event) => {
//   if(event.key === "Enter")
//   {
//       place.textContent = search.value
//       search.value = ""
//       console.log("Enter key was pressed")
//   }
// })

// keycode is deprecated, you can use either only "key" or only "code" to check
// for a specific key pressed. And no need for the keycode of Enter which was 13.
// Also don't forget to use the event object. It can be named anything, but
// without it the "key" or "code" technique will not work.
// Also notice the role of event keyup. Inplace of keyup you can also use
// keydown.

// ------------------------------------------------------------------------------

// -------------------------> DATE ALTERATION <---------------------------------

let d = new Date()

function dateBuilder(d){
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"]
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
  // return d.getDate() d.getFullYear()   --> wrong syntax
  // no need for semi-colon at the end of each line
}

// console.log(typeof dateBuilder(d))     --> string
date.textContent = dateBuilder(d)

// -----------------------------------------------------------------------------

// let x = document.getElementsByTagName("body")
// console.log(x)
//
// document.addEventListener("mousemove", changeBackground)
//
// function changeBackground(evt){
//   console.log("You have clicked inside the body tag")

  // location.href = "https://www.google.com/" ---> directs the user to the href
  // console.log(window.location.href)         ---> gives the url of the current window
  // console.log(evt)                          ---> evt is the event object(contains all the info regarding the event)
  // console.log(evt.target)                   ---> here it has been named evt but it can be anything

  // ---> dynamic background <---
  // console.log(evt.clientX)

  // let coordX = evt.offsetX
  // let coordY = evt.offsetY
  // let coordZ = coordX + coordY
  // if (coordX > 255){
  //   coordX = Math.floor(coordX/4.3)
  // }
  //
  // if (coordY > 255){
  //   coordY = Math.floor(coordY/4.3)
  // }
  //
  // if (coordZ > 255){
  //   coordZ = Math.floor(coordZ/7)
  // }

  // console.log(coordY, "hi", "there")   --> multiple statements can be printed in a single console
  //
  // document.body.style.backgroundColor = `rgb(${coordX}, ${coordY}, ${coordZ})`
// }


// -----------------> CALLBACK FUNCTION AND CALLBACK HELL <---------------------

// let o = new Date()
// console.log(o.getSeconds())
//
// setTimeout( () => {
//   console.log("CAPTAIN")
//   let p = new Date()
//   console.log(p.getSeconds())
//
//   setTimeout( () => {
//     console.log("AMERICA")
//     let q = new Date()
//     console.log(q.getSeconds())
//
//     setTimeout( () => {
//       func("WINTER SOLDIER")
//       let  r= new Date()
//       console.log(r.getSeconds())
//     }, 4000)
//
//   }, 1000)
//
// }, 3000)
// //
// let func = str => console.log(str)                // Arrow function used
//
// -----------------------------------------------------------------------------

// -----------------------------> PROMISES <------------------------------------

// function greeting(name) {
//     return new Promise((resolve,reject) => {
//       if(name == "Shivam")
//         resolve(`Hi There ${name}`)
//       else
//         reject("Wrong Input!!!!")
//       })
// }
//
// greeting("Google")
// .then( (value) => console.log(value) )
// .catch( (value) => console.log(value) )
//
// // Above code will not work without the return keyword
//
// let name = "Shivam"
// let new_Promise = new Promise((resolve,reject) => {
//       if(name == "Shivam")
//         resolve(`Hi There ${name}`)
//       else
//         reject("Wrong Input!!!!")
// })
//
// new_Promise
// .then( (value) => console.log(value) )
// .catch( (value) => console.log(value) )
//
// // Why the second console.log(value) is getting printed before the first one?
//
// //------------------------------------------------------------------------------
//
// //------------------------------> AJAX AND XML <--------------------------------
//
// let btn = document.getElementById("button")
// btn.addEventListener("click", loadText)
//
// // function loadText()
// // {
//     // let xhr = new XMLHttpRequest()        // XHR OBJECT
//     // console.log(xhr)
//     //
//     // xhr.open("GET", "text.json", true)    // OPEN - TYPE, URL, ASYNC/SYNC
//     //
//     // // xhr.onprogress = function(){
//     // //   console.log("READYSTATE: ", this.readyState)
//     // // }
//     //
//     // xhr.onload = function(){
//     //   console.log("READYSTATE:", this.readyState)
//     //   if(this.status == 200)
//     //   {
//     //     let emp = JSON.parse(this.responseText)
//     //     let members = emp.members
//     //     let output = ""
//     //     // document.getElementById("fake") =
//     //     for(let i in members)
//     //     {
//     //        let p = members[i].powers
//     //        output += `<ul>
//     //        <b>${members[i].name}</b>`
//     //           for(let j in p)
//     //           {
//     //             output += `<li> ${p[j]} </li>`
//     //           }
//     //         output+= `</ul><br>`
//     //     }
//     //     document.getElementById("fake").innerHTML = output
//     //   }
//     // }
//     //
//     // xhr.onerror = function(){
//     //   console.log("Sorry! Some Error Occurred.....")
//     // }
//     //
//     // // xhr.onreadystatechange = function(){
//     // //   console.log("READYSTATE: ", this.readyState)
//     // //   if(this.readyState == 4 && this.status == 200)
//     // //     console.log("READYSTATE: ", this.readyState)
//     // // }
//     //
//     // xhr.send()
//
// // }
//
// function loadText(){
//   let xhr = new XMLHttpRequest
//
//   xhr.open("GET", "https://api.github.com/users", true)
//
//   xhr.onload = function(){
//     let users = JSON.parse(this.responseText)
//     let output = ""
//     for(let i in users)
//     {
//       output += `<div class="single_user">
//                     <img src="${users[i].avatar_url} width="200px" height="200px">
//                     <ul>
//                     <li>Name: ${users[i].login}</li>
//                     <li>ID  : ${users[i].id}</li>
//                     </ul><br>
//                  </div>
//                  <br>
//       `
//     }
//     document.getElementById("github").innerHTML = output
//   }
//
//   xhr.send()
// }

// learn the use of "this" keyword

//------------------------------------------------------------------------------
