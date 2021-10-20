
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
             "Access-Control-Allow-Origin": "https://techjbb.netlify.app/",
              "Access-Control-Allow-Origin": "http://127.0.0.1:5500/",
            //  "Access-Control-Allow-Origin": "https://techjbb.netlify.app/",
             "Access-Control-Allow-Credentials": "true",
             "Access-Control-Allow-Headers": Authorization, Lang,
             "Access-Control-Allow-Methods": POST,GET,PUT,DELETE,
          }
      }).done(function (data) {
// DATA CALL HERE
// let tester = data
// console.log(tester)
      });
  }

  ///////////////////////
    let eventArr = [];
    // data.push
    
    let data  //scoping issue w repeated variable
        // let events = data
    
var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;  // REMOVING THIS LINE ELIMINATED CORS ERROR COMBINED W PROXY USE IN URL
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    events = JSON.parse(this.responseText);
// alert(obj.length);
    // console.log("this.responseText Reads:      "+this.responseText)
    // console.log("responseText is a  "+ typeof this.responseXML)
    // // console.log("this.responseXML Reads:      "+this.responseXML)
    // console.log("responseXML is a  "+ typeof this.responseXML)
    // let events = this.responseXML
    console.log("Inside function, Events is a  "+ typeof events)
  

    console.log("outside of the xhr function events is:  "+typeof events) //currently undefiend
    console.log(events) //currently undefiend
    console.log(events.content)
     //******************************************************************

     //******************************************************************
    let eventArr = []
    // events.content.push(eventArr)
    // console.log(eventArr) // HAS GAPS






    // let data = eventArr;
     // //******************************************************************
     //******************************************************************
     Object.keys(events.content).forEach(function (key) {
      eventArr.push(key, events.content[key]);
     })
  document.getElementById("readout2").innerHTML = eventArr
  
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
  }
  
  let startandend
  //Loop through array of objects, map variables
  for (i = 1; i < eventArr.length; i++) {
    let events = new eventItem(eventArr[i].startDate, eventArr[i].endDate, eventArr[i].websiteUrl, eventArr[i].coverPhotoUrl, eventArr[i].name, eventArr[i].backgroundColor, eventArr[i].textColor, eventArr[i].display)
    startandend.push(events)
  }
  // console.log(events.content)

//FullCalendar Plugin Mechanics



})
xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.bizzabo.com/api/events/");
xhr.setRequestHeader("accept", "application/vnd.bizzabo.v2.0+json");
xhr.setRequestHeader("authorization", "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2");
xhr.send(data);
// console.log("123: "+data)
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
  })





}})