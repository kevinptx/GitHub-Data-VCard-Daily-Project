// get data first, then look at it to see how it looks then learn how to access what you want from that data.

//grap the ulNode (tag) or call it listContainer
let ulNode = document.querySelector("ul")
console.log(ulNode)
//this creates a new object to use. It is a constructor
let req = new XMLHttpRequest()
//in the request you want to read some data and read it from URL
req.open("GET", "https://api.github.com/users/kevinptx")
//on this EventListener, once data loaded, call this function
req.addEventListener("load", githubData)
req.send()

//this is called function hoisting. you're creating a variable you're going to write a string in.
function githubData() {
  let data = JSON.parse(this.responseText)
  //without knowing shape of data, you can't work with it so console.log(data)!
  console.log(data)
//you can act like you're in a HTML file.
  let dataString = `
    <li>Name:${data.name}</li>
    <li>Github URL ${data.url}</li>
    <li>Email:${data.email}</li>
    <li>Company:${data.company}</li>
    <li>Website:${data.blog}</li>
  `

  ulNode.innerHTML = dataString


let imageDiv = document.querySelector(".avatar")
 imageString = `
<img src=${data.avatar_url}>
  `
  imageDiv.innerHTML = imageString
}
