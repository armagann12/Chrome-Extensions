console.log("hadssssssssss")
console.log("AAAAAAAAA")

//Returns a HTML Collection Array
// >HTMLCollection[video.video-stream.html5-main-video]
let col = document.getElementsByTagName("video")

//Returns the whole element with the tag name video
//<video tabindex = "" class = "video video-stream html5-main-video" ..... ></video>

//Also this can be done in Jquery with just $("video")
let player = col.item(0)

//Set the playbackRate with the value that we get from the user
player.playbackRate = 0.5



