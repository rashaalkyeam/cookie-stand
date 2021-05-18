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
        let container = document.getElementById('salebycons'); 
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

let seattle= new Salmon('Seattle',23,65,6.3);
seattle.randomCustNum();
seattle.sales();
seattle.cooki();
let tokyo= new Salmon('Tokyo',3,24,1.2);
tokyo.randomCustNum();
tokyo.sales();
tokyo.cooki();
let dubai= new Salmon('Dubai',11,38,7.3);
dubai.randomCustNum();
dubai.sales();
dubai.cooki();
let paris= new Salmon('Paris',20,38,2.3);
paris.randomCustNum();
paris.sales();
paris.cooki();
let lima= new Salmon('Lima',2,16,4.6);
lima.randomCustNum();
lima.sales();
lima.cooki();

//let con=document.getElementById('salebycons1');
//let table=document.getElementById('table');
//tablecont.appendChild(table);
//let tr1= document.createElement('tr');
//table.appendChild(tr1);
//let th1=document.createElement('th');
//th1.textContent = 'Hours';
let cookiesForm= document.getElementById('newLocation');
cookiesForm.addEventListener('submit', addLoc);
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