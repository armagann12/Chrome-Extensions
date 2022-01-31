const a  = document.getElementById("apply")
a.addEventListener("click", func)

function func(){
    const b = document.getElementById("speed").value
    console.log(b)

//Using Storage method
//
//
//chrome.storage.local.set({b: b})

//Using Sending Message method / communicating between script and popup
//
//
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: b}, function(response) {
      console.log(response.farewell);
    });
  });

}

//onclick does not work you have to use Event Listeners


//DOM manupultions


//value direk get element elemti getirio
// .value yazılan value!!!!!!!!!!!!!!!!


//ALL done just communicate between them a.k.i user input used in content