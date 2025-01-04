let currentDate = new Date()
console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toISOString());
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toJSON());

const newDate = new Date(2025, 0, 6)
console.log(newDate.toDateString());

let curentDate = Date.now()


console.log(newDate.getTime());

let currentDateandTime = new Date()
console.log(`${currentDateandTime.getDate()}-${currentDateandTime.getMonth() + 1}-${currentDateandTime.getFullYear()} and time is ${currentDateandTime.getHours()}`);

console.log(currentDateandTime.getMinutes());
console.log(currentDateandTime.getSeconds());

// Create a new Date object 
    const currentDatenow = new Date(); // Define options for the formatting 
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }; // Convert the date to a localized string with options 
    const formattedDateWithOptions = currentDatenow.toLocaleString('en-US', options); 

    console.log(formattedDateWithOptions);
    







