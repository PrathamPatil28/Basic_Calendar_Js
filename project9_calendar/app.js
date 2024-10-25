
const month = document.querySelector('.month');

const weekday = document.querySelector('.weekday');

const day = document.querySelector('.day');

const year = document.querySelector('.year');

window.addEventListener('DOMContentLoaded' ,()=>{

    const  date = new Date();


    console.log('day' , date.getDate() );

    console.log('month' ,  date.toLocaleDateString("en-US" , {month:"long"}));

    console.log('weekday' , date.toLocaleDateString("en-US" , {weekday:"long"}) );

    console.log('year' , date.getFullYear());
    day.textContent = date.getDate();

    month.textContent = date.toLocaleDateString("en-US" , {month:"long"});

    year.textContent = date.getFullYear();

  weekday.textContent = date.toLocaleDateString("en-US" , {weekday:"long"});





})