var inp_arr_size=document.getElementById('inp_arr_size');
var genarr=document.getElementById('genarr');
var array_size=inp_arr_size.value;
var array=[];
var lines=document.getElementById('lines');
const close=document.getElementById('close');
const guide=document.querySelector('.guide');
const help=document.querySelector('#help');
inp_arr_size.addEventListener('input',upd_arraysize);
function upd_arraysize()
{
    
    array_size=inp_arr_size.value;
    console.log(array_size);
}


//generate new array,remove previously existing array
genarr.addEventListener('click',generateRandomArray);

function deletePreviousArray()
{
    const line = document.querySelector("#lines");
    line.innerHTML = '';
}

function generateRandomArray()
{
    deletePreviousArray();
    deleteDetails();
    infocont.style.display="none";

    let i=0;
    const lines = document.querySelector("#lines");
    for(i=0;i<array_size;i++)
    {
        array.push(Math.floor(Math.random()*100+5));
    }
    for(i=0;i<array_size;i++)
    {
        const line=document.createElement('div');
        line.style.height=`${array[i]*3}px`;
        line.classList.add('line');
        line.classList.add(`barNo${i}`);
        line.classList.add('flex-item');
        lines.classList.add('line');
        lines.appendChild(line);
    }
    console.log(array);
   
}


//speed related all functions

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let delay=260; //in milliseconds
var speed=document.getElementById("speed");
speed.addEventListener('input',()=>{

    delay=320-parseInt(speed.value);
    console.log(delay);
});

//function to swap elements
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
function deleteDetails()
{
    bct.innerText="";
    act.innerText="";
    wct.innerText="";
    asp.innerText="";
    inplace.innerText="";
    stable.innerText="";       
    bonusdet.innerText="";
}


//disabling functions
function disableSortingBtn(){
    document.querySelector("#bubblebtn").disabled = true;
    document.querySelector("#insertionbtn").disabled = true;
    document.querySelector("#selectionbtn").disabled = true;
    // document.querySelector("#quickbtn").disabled = true;
    // document.querySelector("#mergebtn").disabled=true;
    document.querySelector('#genarr').disabled=true;
    document.querySelector("#inp_arr_size").disabled = true;
    document.querySelector("#ascending").disabled = true;
    document.querySelector("#descending").disabled = true;

}

//enabling functions
function enableSortingBtn(){
    document.querySelector("#bubblebtn").disabled = false;
    document.querySelector("#insertionbtn").disabled = false;
    document.querySelector("#selectionbtn").disabled = false;
    // document.querySelector("#quickbtn").disabled = false;
    // document.querySelector("#mergebtn").disabled=false;
    document.querySelector('#genarr').disabled=false;
    document.querySelector("#inp_arr_size").disabled = false;
    document.querySelector("#ascending").disabled = false;
    document.querySelector("#descending").disabled = false;
    document.querySelectorAll(".buthover").disabled=false;
    

}


close.addEventListener('click',()=>{
   if(guide.style.display=="none")
   {
    
    console.log('none');
    // guide.style.zIndex="0";
   }
   else
   {
    guide.style.display="none";
    console.log('block');
   }
});

help.addEventListener('click',()=>{
    if(guide.style.display=="none")
   {
    guide.style.display="block";
    console.log('none');
    // guide.style.zIndex="0";
   }
   else
   {
    guide.style.display="none";
    console.log('block');
   }
})   

