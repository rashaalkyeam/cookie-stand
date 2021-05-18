'use strict'
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  
function Salmon(nameloc,minCustPerHour,maxCustPerHour,avgCookie){

    this.nameloc=nameloc;
    this.minCustPerHour=minCustPerHour;
    this.maxCustPerHour=maxCustPerHour;
    this.avgCookie=avgCookie;
    this.randomCustNumPerHour=[];
    this.salePerHour=[];
    this.total=0;
    this.randomCustNum = function () {
        for (let hour = 0; hour <= hours.length; hour++) {
            this.randomCustNumPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour))
        }
    }
    this.sales = function () {
        for (let hour = 0; hour<hours.length; hour++) {
            this.salePerHour.push(Math.ceil(this.randomCustNumPerHour[hour] * this.avgCookie))
            this.total+=this.salePerHour[hour]
        }
    },

    this.cooki = function(){
        let container = document.getElementById('detalLoca'); 
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

let cookiesForm= document.getElementById('newLocation');
cookiesForm.addEventListener('submit',addLoc);
function addLoc(event){
event.preventDefault();

let namelcation=event.target.nameloc.value;
let minCustPerHour=event.target.minCustPerHour.value;
let maxCustPerHour=event.target.maxCustPerHour.value;
let avgCookie=event.target.avgCookie.value;
let newloc=new Salmon(namelcation,minCustPerHour,maxCustPerHour,avgCookie);
newloc.randomCustNum();
newloc.sales();
newloc.cooki();
}