

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Cookies(location, minCustomersPerHour, maxCustomersPerHour, averagePerCustomer) {
    this.location = location;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.averagePerCustomer = averagePerCustomer;
    this.customerPerHour = [];
    this.cookiesPerHour = [];
    this.totalCookies = 0;
    this.customersPerHour ();
    this.cookiesPurchased();
}


Cookies.prototype.forEachHour = function (minCustomersPerHour, maxCustomersPerHour) {

    var range = maxCustomersPerHour - minCustomersPerHour;
    var rand = Math.random() * range + minCustomersPerHour;
    var final = Math.ceil(rand);
    return (final);
}




Cookies.prototype.cookiesPurchased = function () {

    var hours = ["6am: ", "7am: ", "8am: ", "9am: ", "10am: ", "11am: ", "12pm: ", " 1pm: ", " 2pm: ", "3pm: ",
        "4pm: ", " 5pm: ", "6pm: ", " 7pm: ", "Total: "];
    var sum = 0;
    for (i = 0; i < hours.length - 1; i++) {

        var cookiesPerHour = forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) * Seattle.averagePerCustomer;
        sum = sum + cookiesPerHour;
        hours[i] = hours[i] + Math.ceil(cookiesPerHour);

    }
    hours[14] = hours[14] + Math.ceil(sum);
    console.log(hours);

    return hours;
}


Cookies.prototype.render = function () {

    var container = document.getElementById('list')
    var article = document.createElement('article');
    container.appendChild(article);







    var table = document.createElement('table');
    article.appendChild(table);


    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    var hours = [" ", "6am: ", "7am: ", "8am: ", "9am: ", "10am: ", "11am: ", "12pm: ", " 1pm: ", " 2pm: ", "3pm: ",
        "4pm: ", " 5pm: ", "6pm: ", " 7pm: "];


    for (var i = 0; i < hours.length; i++) {
        var hoursHeader = document.createElement('th');
        hoursHeader.appendChild(hoursHeader);
        hoursHeader.textContent = hours[i];
    }


/////////////////////seattle row/////////////////////

    var seattleRow = document.createElement('tr');
    table.appendChild(seattleRow);

    var seattle = document.createElement('td');
    seattleRow.appendChild(seattle);
    seattle.textContent = "Seattle";

    var data1 = this.cookiesPurchased();
    for (var i = 1; i < hours.length; i++) {
        var Data1 = document.createElement('td');
        dataRow.appendChild(Data1);
        Data1.textContent = data1;
    }
    
//////////////////////////tokyo row/////////////////////////////
    var tokyoRow = document.createElement('tr');
    table.appendChild(tokyoRow);

    var tokyo = document.createElement('td');
    tokyoRow.appendChild(tokyo);
    tokyo.textContent = "Tokyo";

    var data2 = this.cookiesPurchased();
    for (var i = 1; i < hours.length; i++) {
        var Data2 = document.createElement('td');
        dataRow.appendChild(Data2);
        Data2.textContent = data2;
    }

//////////////////////////dubai row/////////////////////////////
var dubaiRow = document.createElement('tr');
table.appendChild(dubaiRow);

var dubai = document.createElement('td');
dubaiRow.appendChild(dubai);
dubai.textContent = "Dubai";

var data3 = this.cookiesPurchased();
for (var i = 1; i < hours.length; i++) {
    var Data3 = document.createElement('td');
    dataRow.appendChild(Data3);
    Data3.textContent = data3;
}


//////////////////////////paris row/////////////////////////////
var parisRow = document.createElement('tr');
table.appendChild(parisRow);

var paris = document.createElement('td');
parisRow.appendChild(paris);
paris.textContent = "Paris";

var data4 = this.cookiesPurchased();
for (var i = 1; i < hours.length; i++) {
    var Data4 = document.createElement('td');
    dataRow.appendChild(Data3);
    Data4.textContent = data4;
}


//////////////////////////lima row/////////////////////////////
var parisRow = document.createElement('tr');
table.appendChild(limaRow);

var lima = document.createElement('td');
limaRow.appendChild(lima);
lima.textContent = "Lima";

var data5 = this.cookiesPurchased();
for (var i = 1; i < hours.length; i++) {
    var Data5 = document.createElement('td');
    dataRow.appendChild(Data3);
    Data5.textContent = data5;
}





   

}

var Seattle = new Cookies('Seattle', 23, 65, 6.3);

var Tokyo = new Cookies('Tokyo', 3 , 24, 1.2);
var Dubai = new Cookies('Dubai', 11 , 38, 3.7);
var Paris = new Cookies('Paris', 20 , 38, 2.3);
var Lima = new Cookies('Lima', 2 , 16, 4.6);

// // store all kittens, notice last kitten was not first stored in a variable
// var kittens = [Seattle, Tokyo, Dubai, Paris, Lima];

// for (var i = 0; i < Cookies.length; i++) {
//     kittens[i].render();
// }


/*
// Advanced topic - Inheritance
function Pet() {}
Pet.prototype.describe = function() {
  return `${this.name} is adorable and is ${this.age} months old`; // alternate style of string creation
}
Kitten.prototype = new Pet();
*/
