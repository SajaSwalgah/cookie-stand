
/////////////////////////////////////Salmon Cookies for Seattle////////////////////////////////////////////
var Seattle = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    averagePerCustomer: 6.3,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {

        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = Math.random() * range + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    cookiesPurchased: function () {
        var hours = ["6am: ","7am: ","8am: ","9am: ","10am: ","11am: ","12pm: "," 1pm: "," 2pm: ","3pm: ",
            "4pm: "," 5pm: ","6pm: "," 7pm: ","Total: "];
        var sum = 0;
        for (i = 0; i < 14; i++) {
            
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) * Seattle.averagePerCustomer;
            sum = sum + cookiesPerHour;
            hours[i] = hours[i] + Math.ceil(cookiesPerHour);
        }
        hours[14]=hours[14]+ Math.ceil(sum);
        return hours;
    }



}
Seattle.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour)
var header1 = document.createElement("h2");
header1.textContent = "Salmon Cookies for Seattle";
var contentArea = document.getElementById('list');
contentArea.appendChild(header1);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

var li = document.createElement('li');

li.textContent = Seattle.cookiesPurchased();

ul.appendChild(li);
var style = document.createElement('style');
document.head.appendChild(style);
style.sheet.insertRule('#list {display: block}');






/////////////////////////////////////Salmon Cookies for Tokyo////////////////////////////////////////////
var Tokyo = {
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    averagePerCustomer: 1.2,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {

        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = Math.random() * range + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    cookiesPurchased: function () {
        var hours = ["6am: ","7am: ","8am: ","9am: ","10am: ","11am: ","12pm: "," 1pm: "," 2pm: ","3pm: ",
        "4pm: "," 5pm: ","6pm: "," 7pm: ","Total: "];
        var sum = 0;
        for (i = 0; i < 14; i++) {
            
            var cookiesPerHour = this.forEachHour(Tokyo.minCustomersPerHour, Tokyo.maxCustomersPerHour) * Tokyo.averagePerCustomer;
            sum = sum + cookiesPerHour;
            hours[i] = hours[i] + Math.ceil(cookiesPerHour);
        }
        hours[14]=hours[14]+ Math.ceil(sum);
        return hours;
    }



}
Tokyo.forEachHour(Tokyo.minCustomersPerHour, Tokyo.maxCustomersPerHour)
var header1 = document.createElement("h2");
header1.textContent = "Salmon Cookies for Tokyo";
var contentArea = document.getElementById('list');
contentArea.appendChild(header1);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

var li = document.createElement('li');

li.textContent = Tokyo.cookiesPurchased();

ul.appendChild(li);



/////////////////////////////////////Salmon Cookies for Dubai////////////////////////////////////////////
var Dubai = {
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    averagePerCustomer: 3.7,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {

        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = Math.random() * range + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    cookiesPurchased: function () {
    var hours = ["6am: ","7am: ","8am: ","9am: ","10am: ","11am: ","12pm: "," 1pm: "," 2pm: ","3pm: ",
            "4pm: "," 5pm: ","6pm: "," 7pm: ","Total: "];
        var sum = 0;
        for (i = 0; i < 14; i++) {
            
            var cookiesPerHour = this.forEachHour(Dubai.minCustomersPerHour, Dubai.maxCustomersPerHour) * Dubai.averagePerCustomer;
            sum = sum + cookiesPerHour;
            hours[i] = hours[i] + Math.ceil(cookiesPerHour);
        }
        hours[14]=hours[14]+ Math.ceil(sum);
        return hours;
    }



}
Dubai.forEachHour(Dubai.minCustomersPerHour, Dubai.maxCustomersPerHour)
var header1 = document.createElement("h2");
header1.textContent = "Dubai Cookies for Seattle";
var contentArea = document.getElementById('list');
contentArea.appendChild(header1);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

var li = document.createElement('li');
// for (i =0 ; i<15 ; i++){
li.textContent = Dubai.cookiesPurchased();
ul.appendChild(li);
// document.write('<br/>');
//}



/////////////////////////////////////Salmon Cookies for Paris////////////////////////////////////////////
var Paris = {
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    averagePerCustomer: 2.3,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {

        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = Math.random() * range + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    cookiesPurchased: function () {
        var hours = ["6am: ","7am: ","8am: ","9am: ","10am: ","11am: ","12pm: "," 1pm: "," 2pm: ","3pm: ",
        "4pm: "," 5pm: ","6pm: "," 7pm: ","Total: "];
        var sum = 0;
        for (i = 0; i < 14; i++) {
            
            var cookiesPerHour = this.forEachHour(Paris.minCustomersPerHour, Paris.maxCustomersPerHour) * Paris.averagePerCustomer;
            sum = sum + cookiesPerHour;
            hours[i] = hours[i] + Math.ceil(cookiesPerHour);
        }
        hours[14]=hours[14]+ Math.ceil(sum);
        return hours;
    }



}
Paris.forEachHour(Paris.minCustomersPerHour, Paris.maxCustomersPerHour)
var header1 = document.createElement("h2");
header1.textContent = "Paris Cookies for Seattle";
var contentArea = document.getElementById('list');
contentArea.appendChild(header1);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

var li = document.createElement('li');

li.textContent = Paris.cookiesPurchased();

ul.appendChild(li);



/////////////////////////////////////Salmon Cookies for Lima////////////////////////////////////////////
var Lima = {
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    averagePerCustomer: 4.6,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {

        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = Math.random() * range + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    cookiesPurchased: function () {
        var hours = ["6am: ","7am: ","8am: ","9am: ","10am: ","11am: ","12pm: "," 1pm: "," 2pm: ","3pm: ",
        "4pm: "," 5pm: ","6pm: "," 7pm: ","Total: "];
        var sum = 0;
        for (i = 0; i < 14; i++) {
            
            var cookiesPerHour = this.forEachHour(Lima.minCustomersPerHour, Lima.maxCustomersPerHour) * Lima.averagePerCustomer;
            sum = sum + cookiesPerHour;
            hours[i] = hours[i] + Math.ceil(cookiesPerHour);
        }
        hours[14]=hours[14]+ Math.ceil(sum);
        return hours;
    }



}
Lima.forEachHour(Lima.minCustomersPerHour, Lima.maxCustomersPerHour)


var header1 = document.createElement("h2");
header1.textContent = "Lima Cookies for Seattle";
var contentArea = document.getElementById('list');
contentArea.appendChild(header1);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

var li = document.createElement('li');

li.textContent = Lima.cookiesPurchased();

ul.appendChild(li);