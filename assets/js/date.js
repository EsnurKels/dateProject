// Şuanki Zaman
const date = new Date();

// Gün
let day = date.getDate();
// Ay
let month = date.getMonth();
// Yıl
let year = date.getFullYear();

document.querySelector('#day').innerHTML = `
    <div class="day">Day</div>
    ${day}
`;

document.querySelector('#month').innerHTML = `
    <div class="month">Month</div>
    ${month + 1}
`;

document.querySelector('#year').innerHTML = `
    <div class="year">Year</div>
    ${year.toString().slice(2)}
`;