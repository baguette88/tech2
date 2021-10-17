$(document).ready(function () {
    // getEvents()
})

console.log("script check1")

function getEvents() {

//   jQuery.ajaxPrefilter(function(options) {
//     if (options.crossDomain && jQuery.support.cors) {
//         options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//     }
// });

    let settings = {
        "async": true,
        
        "crossOrigin": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://api.bizzabo.com/api/events",
        "method": "GET",
        "Content-type": "application/x-www-form-urlencoded",
        "headers": {
            "accept": "application/vnd.bizzabo.v2.0+json",
            "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
            "Access-Control-Allow-Origin": "https://techjbb.netlify.app/",
     
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": POST,GET,PUT,DELETE,
        },
        "data": "{}"
    }

$.ajax({
    "url": "https://cors-anywhere.herokuapp.com/https://api.bizzabo.com/api/events",
    "type": "GET",
    "xhrFields" : {
        "accept": "application/vnd.bizzabo.v2.0+json",
        "authorization": "bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
        "Access-Control-Allow-Origin": "https://techjbb.netlify.app/",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500/",
   
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": POST,GET,PUT,DELETE,
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": ["GET", "OPTIONS", "POST"]

    },
    "crossDomain": "true",
    "headers": {
        "accept": "application/vnd.bizzabo.v2.0+json",
        "authorization": "Bearer" ,
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500/",
        "Access-Control-Allow-Origin": "https://techjbb.netlify.app/",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": Authorization, Lang,
        "Access-Control-Allow-Methods": POST,GET,PUT,DELETE,
    }
}).done(function (data) {
    // console.log(data);
});
}

  /////////////////////////////////////////////////////////////////////////////////////////////////
    let eventArr = [];
    let data = {eventArr};

    
    //  console.log("object obtained" + data.eventArr)
    

var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;  // REMOVING THIS LINE ELIMINATES CORS ERROR COMBINED W PROXY USE

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
   
    eventArr.push(this.responseText);




    
    console.log(eventArr)                        // eventArr is the data
    document.getElementById("readout1").innerHTML= data.eventArr
    document.getElementById("readout2").innerHTML= data.eventArr[0].startDate


///START HERE TROUBLESHOOT///
    // Object.keys(eventArr.content).forEach(function (key) {      //Iterate through?
    //   eventArr.push(key, eventArr.content[key]);
    // });    





    // let this.responseText 
  }
});

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.bizzabo.com/api/events/");
xhr.setRequestHeader("accept", "application/vnd.bizzabo.v2.0+json");
xhr.setRequestHeader("authorization", "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2" );

xhr.send(data);



// console.log(events)

const requestCurrent = () => {
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.bizzabo.com/api/events",
    type: "GET",
    headers: {
      "content-type": "application/vnd.bizzabo.v2.0+json",
      "authorization": "Bearer",      
    },
    data: {
    }
  }).then(function (data) {
    console.log(data)
    console.log("current request Succesful")
  })
}

