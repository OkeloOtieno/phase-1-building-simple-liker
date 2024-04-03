// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const articleLikers = document.querySelectorAll(".like-glyph");
function showLike(event){
  const liker = event.target
  mimicServerCall('http://mimicServer.example.com')
  .then(()=>{
    if(liker.innerText === EMPTY_HEART){
      liker.innerText = FULL_HEART
      liker.className = 'activated-heart'
    }else{
      liker.innerText = EMPTY_HEART
      liker.className = ''
    }
  }).catch((err)=>{
    const modal = document.getElementById('modal')
    modal.className = ''
    modal.innerText = err
    setTimeout(()=>modal.className = 'hidden', 3000)
  })
}
for (const like of articleLikers) {
  like.addEventListener('click', showLike)
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
