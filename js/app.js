'use strict'
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let seattle = {
    nameloc: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookie: 6.3,
    randomCustNumPerHour: [],
    salePerHour: [],
    total:0,
    randomCustNum: function () {
        for (let hour = 0; hour <= hours.length; hour++) {
            this.randomCustNumPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour))
        }
    },
    sales: function () {
        for (let hour = 0; hour<hours.length; hour++) {
            this.salePerHour.push(Math.ceil(this.randomCustNumPerHour[hour] * this.avgCookie))
            this.total+=this.salePerHour[hour]
        }
    },

    cookie:function(){
        let container = document.getElementById('sale'); 
        let h3El=document.createElement('h3');
        container.appendChild(h3El);
        h3El.textContent=this.nameloc;
        let ulEl=document.createElement('ul');
        container.appendChild(ulEl);
        for (let i=0; i<hours.length;i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent= `${hours[i]}: ${this.salePerHour[i]} cookies`;
        }
            let toli=document.createElement('li');
            ulEl.appendChild(toli);
            toli.textContent=`Total:${this.total} cookies`;
    }
}

seattle.randomCustNum();
seattle.sales();
seattle.cookie();

let tokyo = {
    nameloc: 'Tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookie: 1.2,
    randomCustNumPerHour: [],
    salePerHour: [],
    total:0,
    randomCustNum: function () {
        for (let hour = 0; hour <= hours.length; hour++) {
            this.randomCustNumPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour))
        }
    },
    sales: function () {
        for (let hour = 0; hour<hours.length; hour++) {
            this.salePerHour.push(Math.ceil(this.randomCustNumPerHour[hour] * this.avgCookie))
            this.total+=this.salePerHour[hour]
        }
    },

    cookie:function(){
        let container = document.getElementById('sale'); 
        let h3El=document.createElement('h3');
        container.appendChild(h3El);
        h3El.textContent=this.nameloc;
        let ulEl=document.createElement('ul');
        container.appendChild(ulEl);
        for (let i=0; i<hours.length;i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent= `${hours[i]}: ${this.salePerHour[i]} cookies`;
        }
            let toli=document.createElement('li');
            ulEl.appendChild(toli);
            toli.textContent=`Total:${this.total} cookies`;
    }
}

tokyo.randomCustNum();
tokyo.sales();
tokyo.cookie();

let dubai = {
    nameloc: 'Dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookie: 3.7,
    randomCustNumPerHour: [],
    salePerHour: [],
    total:0,
    randomCustNum: function () {
        for (let hour = 0; hour <= hours.length; hour++) {
            this.randomCustNumPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour))
        }
    },
    sales: function () {
        for (let hour = 0; hour<hours.length; hour++) {
            this.salePerHour.push(Math.ceil(this.randomCustNumPerHour[hour] * this.avgCookie))
            this.total+=this.salePerHour[hour]
        }
    },

    cookie:function(){
        let container = document.getElementById('sale'); 
        let h3El=document.createElement('h3');
        container.appendChild(h3El);
        h3El.textContent=this.nameloc;
        let ulEl=document.createElement('ul');
        container.appendChild(ulEl);
        for (let i=0; i<hours.length;i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent= `${hours[i]}: ${this.salePerHour[i]} cookies`;
        }
            let toli=document.createElement('li');
            ulEl.appendChild(toli);
            toli.textContent=`Total:${this.total} cookies`;
    }
}

dubai.randomCustNum();
dubai.sales();
dubai.cookie();

let paris = {
    nameloc: 'Paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookie: 2.3,
    randomCustNumPerHour: [],
    salePerHour: [],
    total:0,
    randomCustNum: function () {
        for (let hour = 0; hour <= hours.length; hour++) {
            this.randomCustNumPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour))
        }
    },
    sales: function () {
        for (let hour = 0; hour<hours.length; hour++) {
            this.salePerHour.push(Math.ceil(this.randomCustNumPerHour[hour] * this.avgCookie))
            this.total+=this.salePerHour[hour]
        }
    },

    cookie:function(){
        let container = document.getElementById('sale'); 
        let h3El=document.createElement('h3');
        container.appendChild(h3El);
        h3El.textContent=this.nameloc;
        let ulEl=document.createElement('ul');
        container.appendChild(ulEl);
        for (let i=0; i<hours.length;i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent= `${hours[i]}: ${this.salePerHour[i]} cookies`;
        }
            let toli=document.createElement('li');
            ulEl.appendChild(toli);
            toli.textContent=`Total:${this.total} cookies`;
    }
}

paris.randomCustNum();
paris.sales();
paris.cookie();


let lima = {
    nameloc: 'Lima',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookie: 4.6,
    randomCustNumPerHour: [],
    salePerHour: [],
    total:0,
    randomCustNum: function () {
        for (let hour = 0; hour <= hours.length; hour++) {
            this.randomCustNumPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour))
        }
    },
    sales: function () {
        for (let hour = 0; hour<hours.length; hour++) {
            this.salePerHour.push(Math.ceil(this.randomCustNumPerHour[hour] * this.avgCookie))
            this.total+=this.salePerHour[hour]
        }
    },

    cookie:function(){
        let container = document.getElementById('sale'); 
        let h3El=document.createElement('h3');
        container.appendChild(h3El);
        h3El.textContent=this.nameloc;
        let ulEl=document.createElement('ul');
        container.appendChild(ulEl);
        for (let i=0; i<hours.length;i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent= `${hours[i]}: ${this.salePerHour[i]} cookies`;
        }
            let toli=document.createElement('li');
            ulEl.appendChild(toli);
            toli.textContent=`Total:${this.total} cookies`;
    }
}

lima.randomCustNum();
lima.sales();
lima.cookie();