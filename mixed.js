//array of random messages
const messagesArr = ["Hey, Hey man, or Hi.","How's it going? or How are you doing?"
,"What's up?, What's new?, or What's going on?"
,"How's everything ?, How are things?, or How's life?"
,"How's your day? or How's your day going?"
,"Long time no see or It's been a while"
,"Good morning, Good afternoon, or Good evening"]
//function that picks an random expression from the array
function generateRMsg(arr) {
    let randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
  }
  //console.log(generateRMsg(messagesArr))

function displayMsg (){
    console.log(generateRMsg(messagesArr))
}

displayMsg()