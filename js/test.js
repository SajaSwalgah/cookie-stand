'use strict'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var hours = ["6am ", "7am ", "8am ", "9am ", "10am ", "11am ", "12pm ", " 1pm ", " 2pm ", "3pm ",
  "4pm ", " 5pm ", "6pm ", " 7pm "];


  var footerRow;


function SalmonCookies(location, minCustomersPerHour, maxCustomersPerHour, averagePerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averagePerCustomer = averagePerCustomer;
  this.hourCookies = [];
  this.totalCookies = 0;
  this.cookiesPurchased();
}


SalmonCookies.prototype.forEachHour = function () {

  var range = this.maxCustomersPerHour - this.minCustomersPerHour;
  var rand = Math.random() * range + this.minCustomersPerHour;
  var final = Math.ceil(rand);
  return (final);
}




SalmonCookies.prototype.cookiesPurchased = function () {


  for (i = 0; i < hours.length; i++) {

    var cookiesPerHour = this.forEachHour() * this.averagePerCustomer;
    this.totalCookies += cookiesPerHour;
    this.hourCookies.push(Math.ceil(cookiesPerHour));


  }


}
// my data 
var seattle = new SalmonCookies('Seattle', 23, 65, 6.5);
var dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
var tokyo = new SalmonCookies("Tokyo", 3, 24, 1.2);
var paris = new SalmonCookies("Paris", 20, 38, 2.3);
var lima = new SalmonCookies("Lima", 2, 16, 4.6);
var stands = [seattle, dubai, tokyo, paris, lima]
console.log(seattle)




// making a table
var myCookies = document.getElementById('list');

var table = document.createElement('table');

myCookies.appendChild(table);



//making the header row

function renderHeaderRow(table) {

  var tr = document.createElement('tr');

  table.appendChild(tr);

  var th = document.createElement('th');

  tr.appendChild(th);

  for (var i = 0; i < hours.length; i++) {

    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = hours[i];
  }

  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Daily Total for Each Location';

}




//making the 5 rows
SalmonCookies.prototype.render = function (table) {

  var tr = document.createElement('tr');
  table.appendChild(tr);

  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.location;

  for (var i = 0; i < hours.length; i++) {

    td = document.createElement('td');

    tr.appendChild(td);

    td.textContent = this.hourCookies[i];
  }

  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = Math.ceil(this.totalCookies);
}






////////////////////////lab08//////////////////////

function submission (event){
  event.preventDefault();
  var location = event.target.location.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var average = parseFloat(event.target.average.value);

  var newStand = new SalmonCookies(location, min, max, average);


console.log(newStand);
stands.push(newStand);
table.removeChild(footerRow)
newStand.render(table);
renderFooterRow(table);

}
var form = document.getElementById("insert");
form.addEventListener('submit', submission )





// making the footer row
function renderFooterRow(table) {

  var tr = document.createElement('tr');
  footerRow = tr;


  table.appendChild(tr);

  var td = document.createElement('td');

  tr.appendChild(td);

  td.textContent = 'The Totals';

  var finalTotal = 0;

  for (var hourI = 0; hourI < hours.length; hourI++) {

    td = document.createElement('td');

    tr.appendChild(td);

    var sum = 0;

    for (var shopI = 0; shopI < stands.length; shopI++) {

      var shop = stands[shopI];

      sum += shop.hourCookies[hourI];
    }

    td.textContent = sum;

    finalTotal += sum;
  }

  td = document.createElement('td');

  tr.appendChild(td);

  td.textContent = finalTotal;
}







renderHeaderRow(table);


for (var i = 0; i < stands.length; i++) {

  var shop = stands[i];

  shop.render(table);
}

renderFooterRow(table);









