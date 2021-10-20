let today = new Date();  
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = "<b>Good Evening<b>";
    // add name as template literal
}else if (hourNow > 11) {
    greeting = "<b id=grt>Good Afternoon</b>";
} else if (hourNow > 0) {
    greeting = '<b>Good Morning</b>';
} else { greeting = 'Welcome (greeting.js error occured)';
}
document.getElementById('lblGreetings').innerHTML = '<b>' + greeting + '</b> and Welcome to Bizzabo';
document.getElementById("localTime").innerHTML= today