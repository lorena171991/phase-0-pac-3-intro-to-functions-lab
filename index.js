function shout(string) {
    return "Hello".toUpperCase();
}
function whisper(string) {
    return "Hello".toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
   if (string.toLowerCase()===string) {
    return "I can\'t hear you!"
   }
   if (string.toUpperCase()===string) {
    return "YES INDEED!"
   }
   if (string === "Let\'s have dinner together!") {
    return "I would love to!"
   }
}