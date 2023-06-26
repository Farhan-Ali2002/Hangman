
let guessCountry = ""
let randomCountry = ""
let guesses = 0
const wrongList = []
const fieldsRepresentList = []
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon"]
function guess() {
   


    for (let i = 0; i < country_list.length; i++) {
       country_list[i] = country_list[i].toLowerCase()
      
    }
let size = country_list.length;

let index = Math.floor(Math.random() * size);
randomCountry = country_list[index]
for (let i = 0; i < randomCountry.length; i++) {
  fieldsRepresentList[i] = "0"
  
}
// randomCountry = "Bosnia &amp"


getTextFields(country_list[index].length)
// getTextFields(randomCountry.length)
    
}

document.addEventListener('keypress', (event) => {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
if (name.charCodeAt(0) >= 97 && name.charCodeAt(0) <= 122) {
  guessCharacter(name)
}
  
}, false);

function getTextFields(size){
   
    

    
    var container = document.getElementById("fields-container");

   
    for (var i = 0; i < size; i++) {
      
      var input = document.createElement("input");

      
      input.type = "text";
      input.id = "field"+i.toString()
      input.readOnly = true;
      input.style.border = "none"
      input.style.width = "20px"
      input.style.margin = "2px"
      input.style.borderBottom = "2px solid black"
      input.maxLength = 1;

      // input.addEventListener("keypress", handleInput);
    //   input.onchange = handleInput()
      container.appendChild(input);
      
    }
    const specialIndexList = []
    for (let i = 0; i < randomCountry.length; i++) {
      if (randomCountry[i] === " " || randomCountry[i] === "&") {
        specialIndexList.push(i);
      }
      
      
    }
    if (specialIndexList.length!=0) {
    
      for (let j = 0; j < specialIndexList.length; j++) {
        
        document.getElementById("field"+ specialIndexList[j].toString()).value = randomCountry[specialIndexList[j]]
        fieldsRepresentList[specialIndexList[j]] = randomCountry[specialIndexList[j]]
      }
    }



   
  
var btn = document.getElementById("btn1")
btn.style.visibility = "hidden"

//  document.getElementById("guess-field").hidden = false

//  document.getElementById("guess-button").hidden = false



}
// function handleInput(event) {
//     console.log("yes i am working")

    
//     var container = document.getElementById("fields-container")
    
//     var currentInput = event.target;
//     var maxLength = 1;
//  let char  = currentInput.value
//  guessCountry += char
//     if (currentInput.value.length >= maxLength) {
//       // Find the index of the current input field
//       var currentIndex = Array.from(container.children).indexOf(currentInput);

//       // Move focus to the next input field if available
//       var nextIndex = currentIndex + 1;
//       if (nextIndex < container.children.length) {
//         var nextInput = container.children[nextIndex];
        
//         nextInput.focus();
//       }
//     }
    
//   }

function guessCharacter(guesschar){
  
  
  // for (let i = 0; i < randomCountry.length; i++) {
  //   const element = randomCountry[i];
  //   let index = 
    
  // }
// let indexofguess = randomCountry.indexOf(guesschar)
const indexes = []
for (let i = 0; i < randomCountry.length; i++) {
  if (randomCountry[i] === guesschar) {
    indexes.push(i);
  }
  
  
}
if (indexes.length!=0) {

  for (let j = 0; j < indexes.length; j++) {
    
    document.getElementById("field"+ indexes[j].toString()).value = guesschar

    fieldsRepresentList[indexes[j]] = guesschar
  }

  if ((fieldsRepresentList.includes("0"))) {
    console.log("continue the game")

    
  }
  else{
    document.getElementById("gameover").hidden = false
    document.getElementById("win").hidden = false

  }


  
  



  



  
}
else{

  

  
  
if (!(wrongList.includes(guesschar))){
  var body = document.getElementById("body")
  console.log(Array.from(body.children))
  body.children[guesses].classList.remove("hide")
  console.log(body.children[guesses])
  guesses= guesses+1
  wrongList.push(guesschar)
  var containerwrong = document.getElementById("wrong-elements")
  var wrong = document.createElement("span");
  wrong.innerHTML = guesschar+" "
  
  containerwrong.appendChild(wrong)
  if (guesses==6) {
    console.log("gameover")
    // document.getElementById("guess-field").hidden = true

    // document.getElementById("guess-button").hidden = true

    document.getElementById("gameover").hidden = false

    document.getElementById("game" ).innerHTML = "The country was "+ randomCountry

     document.getElementById("game" ).hidden = false
  }

}
}
 
// document.getElementById("guess-field").value = ""


}

  // function compareGuess(){
  //   if (guessCountry.length == randomCountry.length) {
  //       if (guessCountry!=randomCountry){
  //         if (guesses == 5) {
  //           let line = getElementById("spine")
  //           line.
            
  //         }

            
  //       }
        
  //   }

  // }
  
