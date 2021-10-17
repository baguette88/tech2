

$(document).ready(function () {
    // getEvents()
})

console.log("check1")

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
            "Access-Control-Allow-Origin": "https://hardcore-bhabha-75caeb.netlify.app/",
            // "Access-Control-Allow-Origin": "*",
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
        "Access-Control-Allow-Origin": "https://hardcore-bhabha-75caeb.netlify.app/",
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
        "Access-Control-Allow-Origin": "https://hardcore-bhabha-75caeb.netlify.app/",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": Authorization, Lang,
        "Access-Control-Allow-Methods": POST,GET,PUT,DELETE,
      // "CORS": "https://hardcore-bhabha-75caeb.netlify.app/"
    }
}).done(function (data) {
    console.log(data);
});
}

    var data = "{}";

var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText + "new XML request Readout:");
  }
});

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.bizzabo.com/api/events/");
xhr.setRequestHeader("accept", "application/vnd.bizzabo.v2.0+json");
xhr.setRequestHeader("authorization", "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2" );

xhr.send(data);



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





    
    //Retrieved the events using Postman and brought them in 
let eventdata = {
    "links": [
      {
        "rel": "self",
        "href": "https://api.bizzabo.com/api/events?page=0&size=50"
      }
    ],
    "content": [
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184596/rb02gln4zuywwzravawc.jpg",
        "supportEmail": "enrique@bizzabo.com",
        "startDate": "2019-06-22T17:00:00.000+0000",
        "endDate": "2019-06-22T18:00:00.000+0000",
        "venue": {
          "displayAddress": "New York City, NY, USA",
          "city": "New York",
          "name": "Training Studios",
          "id": 213029,
          "state": "NY",
          "country": "US"
        },
        "timezone": "America/New_York",
        "status": "published",
        "created": "2019-02-04T18:41:02.000+0000",
        "modified": "2019-06-10T16:36:37.000+0000",
        "websiteUrl": "https://events.bizzabo.com/213003",
        "name": "Ticket Boost Training",
        "type": [
          "Internal Event"
        ],
        "id": 213003
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184705/djbej3dc1vfazqvutcg3.jpg",
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2019-12-02T18:00:00.000+0000",
        "endDate": "2019-12-06T19:00:00.000+0000",
        "venue": {
          "displayAddress": "Who Knows, 1st Street Southwest, Rochester, MN, USA",
          "city": "Rochester",
          "address1": "1st St SW",
          "name": "A City Near You!",
          "id": 212322,
          "state": "MN",
          "country": "US"
        },
        "timezone": "America/New_York",
        "status": "published",
        "created": "2018-12-31T15:24:44.000+0000",
        "modified": "2019-06-10T16:38:25.000+0000",
        "websiteUrl": "https://events.bizzabo.com/212296",
        "name": "Roadshow - Coming to a City Near You!",
        "type": [
          "Trade Show & Expo"
        ],
        "id": 212296
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184864/atq7bpqkprsn5ccaf4do.jpg",
        "supportEmail": "varun@bizzabo.com",
        "startDate": "2020-03-01T14:00:00.000+0000",
        "endDate": "2020-03-01T22:00:00.000+0000",
        "venue": {
          "displayAddress": "Bizzabo, West 27th Street, New York, NY, USA",
          "city": "New York",
          "address1": "W 27th St",
          "id": 213030,
          "state": "NY",
          "country": "US"
        },
        "timezone": "America/New_York",
        "status": "published",
        "created": "2019-02-04T18:41:25.000+0000",
        "modified": "2019-06-10T16:41:05.000+0000",
        "websiteUrl": "https://events.bizzabo.com/213004",
        "name": "Event Calendar Training - 03/01/20",
        "type": [
          "Internal Event",
          "Class & Workshop"
        ],
        "id": 213004
      },
      {
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2019-10-18T17:00:00.000+0000",
        "endDate": "2019-10-18T18:00:00.000+0000",
        "timezone": "America/New_York",
        "status": "draft",
        "created": "2019-10-18T17:59:10.000+0000",
        "modified": "2019-10-18T17:59:10.000+0000",
        "websiteUrl": "https://events.bizzabo.com/219124",
        "name": "RSVP Event",
        "type": [
          "Trade Show & Expo"
        ],
        "id": 219124
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1587392594/j6njtxsqndvebcw0rknd.jpg",
        "headerLogoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1587390173/zc3uyivwq0iqef7cosms.png",
        "supportEmail": "ENRIQUE@BIZZABO.COM",
        "startDate": "2020-06-08T13:00:00.000+0000",
        "endDate": "2020-06-11T20:00:00.000+0000",
        "timezone": "America/New_York",
        "status": "published",
        "created": "2020-04-20T14:12:42.000+0000",
        "modified": "2020-04-20T14:23:15.000+0000",
        "websiteUrl": "https://events.bizzabo.com/224123",
        "name": "LS Retail - CF-100 Introduction",
        "type": [
          "Class & Workshop"
        ],
        "id": 224123
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184884/le7xmiu4kqmoijsaa8jz.jpg",
        "supportEmail": "varun@bizzabo.com",
        "startDate": "2020-03-02T14:00:00.000+0000",
        "endDate": "2020-03-02T22:00:00.000+0000",
        "venue": {
          "displayAddress": "Bizzabo, West 27th Street, New York, NY, USA",
          "city": "New York",
          "address1": "W 27th St",
          "id": 213126,
          "state": "NY",
          "country": "US"
        },
        "timezone": "America/New_York",
        "status": "published",
        "created": "2019-02-06T19:15:18.000+0000",
        "modified": "2019-06-10T16:41:24.000+0000",
        "websiteUrl": "https://events.bizzabo.com/213100",
        "name": "Event Calendar Training - 03/02/20",
        "type": [
          "Internal Event"
        ],
        "id": 213100
      },
      {
        "supportEmail": "solutions@bizzabo.com",
        "startDate": "2021-01-01T16:00:00.000+0000",
        "endDate": "2021-02-01T01:00:00.000+0000",
        "timezone": "America/New_York",
        "status": "published",
        "created": "2021-01-11T16:26:31.000+0000",
        "modified": "2021-01-15T19:36:06.000+0000",
        "websiteUrl": "https://events.bizzabo.com/286891",
        "name": "Test Mux Event",
        "type": [
          "Internal Event"
        ],
        "id": 286891
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184733/tuj3uor1gftlyen3ei9d.jpg",
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2020-01-06T18:00:00.000+0000",
        "endDate": "2020-01-10T19:00:00.000+0000",
        "venue": {
          "displayAddress": "Brooklyn, NY, USA",
          "name": "Brooklyn, NY",
          "id": 212321,
          "state": "NY",
          "country": "US"
        },
        "timezone": "America/New_York",
        "status": "published",
        "created": "2018-12-31T15:24:29.000+0000",
        "modified": "2019-06-10T16:38:54.000+0000",
        "websiteUrl": "https://events.bizzabo.com/212295",
        "name": "Roadshow - Brooklyn",
        "type": [
          "Trade Show & Expo"
        ],
        "id": 212295
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184933/xhvau8o1iwp95zkxy1ka.jpg",
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2020-03-09T17:00:00.000+0000",
        "endDate": "2020-03-13T18:00:00.000+0000",
        "venue": {
          "displayAddress": "Corralitos, CA, USA",
          "city": "Corralitos",
          "name": "Corralitos, CA",
          "id": 212319,
          "state": "CA",
          "country": "US"
        },
        "timezone": "America/New_York",
        "status": "published",
        "created": "2018-12-31T15:24:06.000+0000",
        "modified": "2019-06-10T16:42:13.000+0000",
        "websiteUrl": "https://events.bizzabo.com/212293",
        "name": "Roadshow - Corralitos",
        "type": [
          "Trade Show & Expo"
        ],
        "id": 212293
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1587391264/eh93nobdyyioc52ynqbq.jpg",
        "headerLogoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1587390173/zc3uyivwq0iqef7cosms.png",
        "supportEmail": "ENRIQUE@BIZZABO.COM",
        "startDate": "2020-05-11T13:00:00.000+0000",
        "endDate": "2020-05-20T20:00:00.000+0000",
        "timezone": "America/New_York",
        "status": "published",
        "created": "2020-04-20T13:43:03.000+0000",
        "modified": "2020-04-20T14:01:21.000+0000",
        "websiteUrl": "https://events.bizzabo.com/224121",
        "name": "LS Retail - CF-300 Retail",
        "type": [
          "Class & Workshop"
        ],
        "id": 224121
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560185041/pcpbs7t0lpsmkrz5qfxx.jpg",
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2020-06-08T17:00:00.000+0000",
        "endDate": "2020-06-12T18:00:00.000+0000",
        "venue": {
          "displayAddress": "United States",
          "name": "All Around the States!",
          "id": 212296,
          "country": "US"
        },
        "timezone": "America/New_York",
        "status": "published",
        "created": "2018-12-27T18:54:20.000+0000",
        "modified": "2019-06-10T16:44:02.000+0000",
        "websiteUrl": "https://events.bizzabo.com/212270",
        "name": "Roadshow Event Series",
        "type": [
          "Trade Show & Expo"
        ],
        "id": 212270
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184980/chmxseqwyienqxp2ghtv.jpg",
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2020-05-04T17:00:00.000+0000",
        "endDate": "2020-05-08T18:00:00.000+0000",
        "venue": {
          "displayAddress": "Scotts Valley, CA, USA",
          "city": "Scotts Valley",
          "name": "Scotts Valley, CA",
          "id": 212317,
          "state": "CA",
          "country": "US"
        },
        "timezone": "America/New_York",
        "status": "published",
        "created": "2018-12-31T15:22:44.000+0000",
        "modified": "2019-06-10T16:43:01.000+0000",
        "websiteUrl": "https://events.bizzabo.com/212291",
        "name": "Roadshow - Scotts Valley",
        "type": [
          "Trade Show & Expo"
        ],
        "id": 212291
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184665/mpdbpa4yqedhjhmypeol.jpg",
        "supportEmail": "solutions@bizzabo.com",
        "startDate": "2019-09-02T13:00:00.000+0000",
        "endDate": "2019-09-02T14:00:00.000+0000",
        "timezone": "America/New_York",
        "status": "published",
        "created": "2019-02-25T14:40:07.000+0000",
        "modified": "2019-06-10T16:37:46.000+0000",
        "websiteUrl": "https://events.bizzabo.com/213554",
        "name": "Bizzabo + 3rd Party Embeds",
        "type": [
          "Internal Event"
        ],
        "id": 213554
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184774/wrhfstiqotdk48h2vjoy.jpg",
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2020-02-03T18:00:00.000+0000",
        "endDate": "2020-02-07T19:00:00.000+0000",
        "venue": {
          "displayAddress": "415 Mission Street, San Francisco, CA, USA",
          "city": "SF",
          "name": "Salesforce Tower SF",
          "id": 219574,
          "state": "CA",
          "country": "US"
        },
        "timezone": "America/New_York",
        "description": "Annual user conference hosted by Bizzabo in downtown San Francisco, bringing together thought leaders, industry pioneers and thousands of IT professionals.",
        "status": "published",
        "created": "2019-11-05T21:16:52.000+0000",
        "modified": "2019-11-05T21:16:58.000+0000",
        "websiteUrl": "https://events.bizzabo.com/219546",
        "name": "Opportunity Event",
        "id": 219546
      },
      {
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2020-06-01T19:00:00.000+0000",
        "endDate": "2020-06-01T20:00:00.000+0000",
        "timezone": "America/New_York",
        "status": "draft",
        "created": "2019-03-06T20:34:32.000+0000",
        "modified": "2019-03-06T20:36:58.000+0000",
        "websiteUrl": "https://events.bizzabo.com/213815",
        "name": "Client Services @ Bizzabo",
        "type": [
          "Internal Event"
        ],
        "id": 213815
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184956/cjwz5zuucoxmf3lhr23i.jpg",
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2020-04-06T17:00:00.000+0000",
        "endDate": "2020-04-10T18:00:00.000+0000",
        "venue": {
          "displayAddress": "Santa Cruz, CA, USA",
          "city": "Santa Cruz",
          "name": "Santa Cruz, CA",
          "id": 212318,
          "state": "CA",
          "country": "US"
        },
        "timezone": "America/New_York",
        "status": "published",
        "created": "2018-12-31T15:23:13.000+0000",
        "modified": "2019-06-10T16:42:37.000+0000",
        "websiteUrl": "https://events.bizzabo.com/212292",
        "name": "Roadshow - Santa Cruz",
        "type": [
          "Trade Show & Expo"
        ],
        "id": 212292
      },
      {
        "supportEmail": "solutions@bizzabo.com",
        "startDate": "2021-01-01T18:00:00.000+0000",
        "endDate": "2021-01-01T19:00:00.000+0000",
        "timezone": "America/New_York",
        "status": "unpublished",
        "created": "2019-02-18T18:59:19.000+0000",
        "modified": "2019-02-19T04:28:27.000+0000",
        "websiteUrl": "https://events.bizzabo.com/solutions",
        "name": "Solutions @ Bizzabo",
        "type": [
          "Internal Event"
        ],
        "id": 213422
      },
      {
        "supportEmail": "varun@bizzabo.com",
        "startDate": "2019-04-04T13:00:00.000+0000",
        "endDate": "2019-05-30T22:00:00.000+0000",
        "venue": {
          "displayAddress": "Bizzabo, West 27th Street, New York, NY, USA",
          "city": "New York",
          "address1": "W 27th St",
          "name": "BizzaHealth HQ",
          "id": 213265,
          "state": "NY",
          "country": "US"
        },
        "timezone": "America/New_York",
        "status": "published",
        "created": "2019-02-11T21:12:54.000+0000",
        "modified": "2019-04-10T18:00:10.000+0000",
        "websiteUrl": "https://events.bizzabo.com/213239",
        "name": "BizzaHealth SaaS Training",
        "type": [
          "Internal Event"
        ],
        "id": 213239
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184908/puyisfzdibzb70ok4frv.jpg",
        "supportEmail": "varun@bizzabo.com",
        "startDate": "2020-03-03T14:00:00.000+0000",
        "endDate": "2020-03-03T22:00:00.000+0000",
        "timezone": "America/New_York",
        "status": "published",
        "created": "2019-02-07T14:43:54.000+0000",
        "modified": "2019-06-10T16:41:49.000+0000",
        "websiteUrl": "https://events.bizzabo.com/213128",
        "name": "Event Calendar Training - 03/03/20",
        "type": [
          "Internal Event"
        ],
        "id": 213128
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184774/wrhfstiqotdk48h2vjoy.jpg",
        "headerLogoUrl": "",
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2021-02-03T18:00:00.000+0000",
        "endDate": "2021-02-07T19:00:00.000+0000",
        "venue": {
          "displayAddress": "415 Mission Street, San Francisco, CA, USA",
          "city": "SF",
          "name": "Salesforce Tower SF",
          "id": 212320,
          "state": "CA",
          "country": "US"
        },
        "timezone": "America/New_York",
        "description": "Annual user conference hosted by Bizzabo in downtown San Francisco, bringing together thought leaders, industry pioneers and thousands of IT professionals.",
        "status": "published",
        "created": "2018-12-31T15:24:18.000+0000",
        "modified": "2020-10-23T18:16:31.000+0000",
        "websiteUrl": "https://events.bizzabo.com/212294",
        "name": "Roadshow - San Francisco - PART 2",
        "type": [
          "Trade Show & Expo"
        ],
        "id": 212294
      },
      {
        "coverPhotoUrl": "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1560184639/qm7bt9wbr8zyng06ko4i.jpg",
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2019-09-01T13:00:00.000+0000",
        "endDate": "2019-09-01T20:30:00.000+0000",
        "timezone": "America/New_York",
        "status": "published",
        "created": "2019-04-24T13:30:46.000+0000",
        "modified": "2019-06-10T16:37:20.000+0000",
        "websiteUrl": "https://events.bizzabo.com/214906",
        "name": "Side by Side Ticket Showcase",
        "type": [
          "Conference & Convention"
        ],
        "id": 214906
      },
      {
        "supportEmail": "clark@bizzabo.com",
        "startDate": "2019-07-09T17:00:00.000+0000",
        "endDate": "2019-07-09T18:00:00.000+0000",
        "timezone": "America/New_York",
        "status": "draft",
        "created": "2019-07-09T17:18:23.000+0000",
        "modified": "2019-07-09T17:18:23.000+0000",
        "websiteUrl": "https://events.bizzabo.com/216719",
        "name": "Today is the day!",
        "type": [
          "Conference & Convention"
        ],
        "id": 216719
      }
    ],
    "page": {
      "size": 50,
      "totalElements": 22,
      "totalPages": 1,
      "number": 0
    }
  }

console.log("AJAX call script end");
