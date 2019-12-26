let time = '03:00 AM';           
let hour = time.slice(0, 2);
let minutes = time.slice(3, 5);
let timeOfTheDay = time.slice(6, 8);
let newHour = hour % 12;


if(hour >= 1 && hour <= 11 && timeOfTheDay === 'PM'){
    console.log('beer time');
}else if((newHour >= 0 && newHour < 3) && timeOfTheDay === 'AM'){
    console.log('beer time');
}else{
    console.log('non-beer time');
}