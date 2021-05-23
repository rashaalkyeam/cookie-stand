'use strict'
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  let sales=[];
function Salmon(nameloc,minCustPerHour,maxCustPerHour,avgCookie){

    this.nameloc=nameloc;
    this.minCustPerHour=minCustPerHour;
    this.maxCustPerHour=maxCustPerHour;
    this.avgCookie=avgCookie;
    this.randomCustNumPerHour=[];
    this.salePerHour=[];
    sales.push(this);
    this.total=0;


    
    
}

Salmon.prototype.randomCustNum = function () {
    for (let hour = 0; hour <= hours.length; hour++) {
        this.randomCustNumPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour))
    }
}
Salmon.prototype.sales = function () {
    this.randomCustNum();
    for (let hour = 0; hour<hours.length; hour++) {

        this.salePerHour.push(Math.ceil(this.randomCustNumPerHour[hour] * this.avgCookie))
        this.total+=this.salePerHour[hour]
    }
}

/**
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
*/
let divEl= document.getElementById('cont');
let tableEl= document.createElement('table');
divEl.appendChild(tableEl);


function tableHeder(){
let tr1= document.createElement('tr');
tableEl.appendChild(tr1);
let th1=document.createElement('td');
tr1.appendChild(th1);
th1.textContent='Hours';

for (let i = 0; i < hours.length; i++) {
    let td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent= hours[i];
    
}

let total0=document.createElement('td');
tr1.appendChild(total0);
total0.textContent= 'Total';
}
tableHeder();

Salmon.prototype.cooki=function()
{
    this.sales();
let tr2=document.createElement('tr');
tableEl.appendChild(tr2);
    let td2=document.createElement('td');
    tr2.appendChild(td2);  
    td2.textContent= this.nameloc;
    
for (let j = 0; j < hours.length; j++) {
    let td2=document.createElement('td');
    tr2.appendChild(td2);
    td2.textContent= this.salePerHour[j];

    
  }
    let tr3=document.createElement('td')
    tr2.appendChild(tr3);
    tr3.textContent=this.total;

}

let seatle= new Salmon('Seattle',	23	,65,	6.3);
seatle.cooki();
let tokyo= new Salmon('Tokyo',	3,	24,	1.2);
tokyo.cooki();
let dubai= new Salmon('Dubai',11, 38, 3.7);
dubai.cooki();
let paris=new Salmon('Paris', 20, 38, 2.3);
paris.cooki();
let lima=new Salmon('Lima',	2,	16,	4.6);
lima.cooki();

function tableFooter(){
    let tr1= document.createElement('tr');
    tableEl.appendChild(tr1);
    let td = document.createElement('td');
    tr1.appendChild(td);
    td.textContent= 'Total';
     let totalOTotal=0;
    for (let i = 0; i < hours.length; i++) {
        let total01=0;
        
        for (let j = 0; j < sales.length; j++) {
            total01+=  sales[j].salePerHour[i];
            

            
        }
        let td2= document.createElement('td');
        tr1.appendChild(td2);
        td2.textContent= total01;
        totalOTotal+= total01;

        
    }
    let td3= document.createElement('td');
    tr1.appendChild(td3);
    td3.textContent=totalOTotal;
}
tableFooter();
/** 
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
newloc.cooki();*/

