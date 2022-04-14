let inputEl = document.getElementById("text-el1")
let inputElTwo = document.getElementById("text-el2")
let inputElThree = document.getElementById("text-el3")
let inputElFour = document.getElementById("text-el4")

let chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "+", "="]
function generate() {
  for (let i = 0; i < 16; i++ ) {
    let random1 = Math.floor(Math.random()*chars.length) 
    let random2 = Math.floor(Math.random()*chars.length)
    let random3 = Math.floor(Math.random()*chars.length)
    let random4 = Math.floor(Math.random()*chars.length)
    console.log(random2)
    let pass1 = chars[random1]
    let pass2 = chars[random2]
    let pass3 = chars[random3]
    let pass4 = chars[random4]
    inputEl.textContent += pass1
    inputElTwo.textContent += pass2
    inputElThree.textContent += pass3
    inputElFour.textContent += pass4
    console.log(pass[i])
  }
}

function generate() {
  inputEl.textContent = ""
  inputElTwo.textContent = ""
  inputElThree.textContent = ""
  inputElFour.textContent = ""
  for (let i = 0; i < 16; i++ ) {
       let random1 = Math.floor(Math.random()*chars.length) 
       let random2 = Math.floor(Math.random()*chars.length)
      let random3 = Math.floor(Math.random()*chars.length)
      let random4 = Math.floor(Math.random()*chars.length)
      console.log(random2)
      let pass1 = chars[random1]
      let pass2 = chars[random2]
      let pass3 = chars[random3]
      let pass4 = chars[random4]
      inputEl.textContent += pass1
      inputElTwo.textContent += pass2
      inputElThree.textContent += pass3
      inputElFour.textContent += pass4
    }
}


//   let random2 = Math.floor(Math.random()*26)
//   let random3 = Math.floor(Math.random()*10)
//   let random4 = Math.floor(Math.random()*26)
//   let random5 =Math.floor(Math.random()*26)
//   let password = [bigChars[random], smallChars[random2], specialChars[random3], //bigChars[random5]]
//   inputEl.textContent = password[0] + password[1] + password[2] + password[3]