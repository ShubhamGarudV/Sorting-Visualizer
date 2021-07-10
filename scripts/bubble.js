// var ascending=document.getElementById('ascending');
// var descending=document.getElementById('descending');
var flag;

async function bubbleSort() {
    // console.log('In bubbe()');
    const ele = document.querySelectorAll(".line");
    for(let i = 0; i < ele.length-1; i++){
        // console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            // console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(flag==0)
            {
                if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                    // console.log('In if condition');
                    await waitforme(delay);
                    swap(ele[j], ele[j+1]);
                }
            }
            else
            {
                if(parseInt(ele[j].style.height) < parseInt(ele[j+1].style.height)){
                    // console.log('In if condition');
                    await waitforme(delay);
                    swap(ele[j], ele[j+1]);
                }
            }
               
            
            ele[j].style.background = 'rgb(228, 133, 17)';
            ele[j+1].style.background = 'cyan';
            // document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
            document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';
            
        }
        ele[ele.length-1-i].style.background = '#88dd88';
    }
    ele[0].style.background = 'green';
    // document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
    document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';

}


const bubblebtn=document.getElementById('bubblebtn');
const infocont=document.querySelector('.info-container');

const bct=document.getElementById('bct');
const act=document.getElementById('act');
const wct=document.getElementById('wct');
const asp=document.getElementById('asp');
const inplace=document.getElementById('inplace');
const stable=document.getElementById('stable');
const bonusdet=document.getElementById('bonusdet');

function displayDetails1()
{
    bct.innerText="O(n)";
    act.innerText="O(n*n)";
    wct.innerText="O(n*n)";
    asp.innerText="O(1)";
    inplace.innerText="Yes";
    stable.innerText="Yes";       
    bonusdet.innerText="Bubble sort takes minimum time (Order of n) when elements are already sorted.";
}


ascending.addEventListener('click',()=>{
    flag=0;
});
descending.addEventListener('click',()=>{
    flag=1;
});

bubblebtn.addEventListener('click', async function()
 {

    disableSortingBtn();
    await bubbleSort();
    enableSortingBtn();
    displayDetails1();
    infocont.style.display="flex";
   
    window.scrollTo({
        top: 400,
        left: 0,
        behavior: 'smooth'
      });
   

});

