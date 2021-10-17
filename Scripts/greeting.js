console.log('script start...')
let today = new Date();  
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = "<b>Good Evening, User<b>";
    // add name as template literal
}else if (hourNow > 12) {
    greeting = "<b>Good Afternoon</b>";
} else if (hourNow > 0) {
    greeting = '<b>Good Morning</b>';
} else { greeting = 'Welcome (calculator error occured)';
}

document.getElementById('lblGreetings').innerHTML =
'<b>' + greeting + '</b> and Welcome to Bizzabo';

console.log('checked time and greeted user')