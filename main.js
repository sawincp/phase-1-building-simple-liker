// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// //------------------------------------------------------------------------------
// Response goes here:
//------------------------------------------------------------------------------

//grabs the heart icon
const articleHearts = document.querySelectorAll(".like-glyph")

//creates the callback function of clicking on heart
function callback(e){
  
  //creates variable to store event variable
  const heart = e.target;
  
  mimicServerCall("bogusUrl")
    .then(function(){
      if(heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart"
      }else {
        heart.innerText = EMPTY_HEART;
        heart.className =""
      }
    })
    .catch(function(error){
      const modal = document.getElementsByTagName("modal");
      modal.className = ""
      modal.innerText = error;
      setTimeout(() => modal.className = "hidden", 3000)
    })
  }
  
  //creates an event loop for every heart on screen. 
  for(const glyph of articleHearts){
    glyph.addEventListener("click", callback);
  }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
