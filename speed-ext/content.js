//Returns a HTML Collection Array
// >HTMLCollection[video.video-stream.html5-main-video]
let col = document.getElementsByTagName("video")

//Returns the whole element with the tag name video
//<video tabindex = "" class = "video video-stream html5-main-video" ..... ></video>

//Also this can be done in Jquery with just $("video")
let player = col.item(0)

//Set the playbackRate with the value that we get from the user




//Using Storage method
//
//
/*
chrome.storage.local.get("b", function(data){
    console.log(data.b)
    player.playbackRate = data.b
})
*/

//Using Sending Message method / communicating between script and popup
//
//
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      player.playbackRate = request.greeting
    }
  );

