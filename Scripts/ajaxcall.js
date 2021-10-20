$(document).ready(function(){
  let startandend = []
  let events
function getEvents() {
    let settings = {
        "async": true,
        "crossOrigin": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://api.bizzabo.com/api/events",//added route before API
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
  };
      $.ajax({
          "url": "https://cors-anywhere.herokuapp.com/https://api.bizzabo.com/api/events", //added route before API
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
// DATA CALL HERE
let tester = data
console.log(tester)
      });
  }

  ///////////////////////
    let eventArr = [];
    // data.push
    let data = eventArr;
        // let events = data
    
var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;  // REMOVING THIS LINE ELIMINATED CORS ERROR COMBINED W PROXY USE IN URL
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log("JSON RECEIEVED:      "+this.responseText)
    console.log("JSON RECEIEVED:      "+this.responseXML)
    console.log(typeof this.responseText)
    let events = this.responseXML
    // console.log(events.content)
  }
    //******************************************************************
    //**THIS IS WHERE JSON IS GETTING MASHED IN IMPROPERLY */
   
    //THIS IS A STRING, CONVERT TO 
    console.log(typeof events)
    let data = eventArr;
     // //******************************************************************
     //******************************************************************
    //  Object.keys(events.content).forEach(function (key) {
    //   eventArr.push(key, events.content[key]);
    //  })
  

//CONSTRUCTOR eventItem
    class eventItem {
      constructor(start, end, url, photo, title) {
        this.start = start,
        this.end = end,
        this.url = url,
        this.title = title
        this.backgroundColor = "blue;"
        this.textColor = "white"
        this.display = 'block'
        this.photo = photo
      }
    }
  
  
  //Loop through array of objects, map variables
  for (i = 1; i < eventArr.length; i++) {
    
    events = new eventItem(eventArr[i].startDate, eventArr[i].endDate, eventArr[i].websiteUrl, eventArr[i].coverPhotoUrl, eventArr[i].name, eventArr[i].backgroundColor, eventArr[i].textColor, eventArr[i].display)
  
    startandend.push(events)
  }
  // console.log("NEW ARRAY "+events)

    console.log("eventArr array contains JSON object")

//   $('#calendar').fullCalendar({
//     console.log("FullCal")
//     // put your options and callbacks here
//   })
// });
})
//FullCalendar Plugin Mechanics
$(document).ready(function(){
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2021-10-22',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      //TOGGLE THROUGH MONTH/WEEK/DAY
    
      events: startandend,
      //changed from events: eventArr

    });
    calendar.render();
    //Plugin Calendar is rendered
  });

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.bizzabo.com/api/events/");
xhr.setRequestHeader("accept", "application/vnd.bizzabo.v2.0+json");
xhr.setRequestHeader("authorization", "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2");
xhr.send(data);

const requestCurrent = () => {
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.bizzabo.com/api/events",
    type: "GET",
    headers: {
      "content-type": "application/vnd.bizzabo.v2.0+json",
      "authorization": "Bearer, b2f9b657-d8fd-4c34-a28b-eba13cab25c2"      
    },
    data: {
    }
  }).then(function (data) {
    // console.log(data)
  
    console.log("current request Succesful")
  })
}})
