$(document).ready(function () {
    // getEvents()
})

console.log("script check1")

function getEvents() {
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
});
}

  /////////////////////////////////////////////////////////////////////////////////////////////////
    let eventArr = [];
    
    let data = {eventArr};

    // events = {[   data   ]}
    //  console.log("object obtained" + data.eventArr)
    

var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;  // REMOVING THIS LINE ELIMINATES CORS ERROR COMBINED W PROXY USE

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
   
    // eventArr.push(this.responseText);
    let events =this.responseText


// // Iterate through each row? 
// Object.keys(events.content).forEach(function (key) {
//     eventArr.push(key, events.content[key]);
//   });
  
//   //Created a constructor to load up the event details to be used in the plugin
//   class eventItem {
//     constructor(start, end, url, photo, title) {
//       this.start = start,
//       this.end = end,
//       this.url = url,
//       this.photo = photo
//       this.title = title
//       this.backgroundColor = "indianred"
//       this.textColor = "white"
//       this.display = 'block'
//     }
//   }
  
//   //Created global variable to hold the new eventItems
//   let eventArr = []
  
//   //Loop through the array of objects and map the applicable variables
//   for (i = 1; i < eventArr.length; i++) {
    
//     let events = new eventItem(eventArr[i].startDate, eventArr[i].endDate, eventArr[i].websiteUrl, eventArr[i].coverPhotoUrl, eventArr[i].name, eventArr[i].backgroundColor, eventArr[i].textColor, eventArr[i].display)
  
//     startandend.push(events)
//   }
  
  
//   //Call the third party FullCalendar to create a calendar with events
//   document.addEventListener('DOMContentLoaded', function () {
//     var calendarEl = document.getElementById('calendar');
  
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'dayGridMonth',
//       initialDate: '2021-02-17',
//       headerToolbar: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay'
//       },
//       //Insert the array of objects created before into the events property to get the corresponding key-value pairs
//       events: eventArr,
  
  
//     });
//     calendar.render();
//   });


    console.log(events)                        // eventArr is the data
    document.getElementById("readout1").innerHTML= events
    // document.getElementById("readout2").innerHTML= events
////RETRIEVING SPECIFIC DATA

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

