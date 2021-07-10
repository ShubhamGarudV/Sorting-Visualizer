async function insertionSort() {
    console.log('In insertion()');
    const ele = document.querySelectorAll(".line");
    ele[0].style.background = '#88dd88';

    
    for(let i = 1; i < ele.length; i++){

        console.log('In ith loop');
        // document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
        document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';

        let j=i-1;
        let key=ele[i].style.height;
        ele[i].style.background='blue'

        await waitforme(delay);
        
        if(flag==0)
        {
            while(j >= 0 && (parseInt(ele[j].style.height)>parseInt(key)))
            {
                console.log('In while loop');
                ele[j].style.background = 'blue';
              
                ele[j+1].style.height =  ele[j].style.height;
                j--;
    
                 await waitforme(delay);
                  for(let k = i; k >= 0; k--){
                    ele[k].style.background = '#88dd88';
                }
       
                 ele[j+1].style.height=key;
                  ele[i].style.background='#88dd88';
             
                // document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
            document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';
                
            }
           
        }
        else
        {
            while(j >= 0 && (parseInt(ele[j].style.height)<parseInt(key)))
            {
                console.log('In while loop');
                ele[j].style.background = 'blue';
              
                ele[j+1].style.height =  ele[j].style.height;
                j--;
    
                 await waitforme(delay);
                  for(let k = i; k >= 0; k--){
                    ele[k].style.background = '#88dd88';
                }
       
                 ele[j+1].style.height=key;
                  ele[i].style.background='#88dd88';
             
                // document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
            document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';
                
            }
            
        }
        ele[j].style.background = '#88dd88';          
      
    }
    
    // document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
    document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';

}

function displayDetails2()
{
     bct.innerText="O(n)";
    act.innerText="O(n*n)";
    wct.innerText="O(n*n)";
    asp.innerText="O(1)";
    inplace.innerText="Yes";
    stable.innerText="Yes";       
    bonusdet.innerText="Insertion sort takes maximum time to sort if elements are sorted in reverse order. And it takes minimum time (Order of n) when elements are already sorted.";
}

const insertionbtn=document.getElementById('insertionbtn');
insertionbtn.addEventListener('click', async function(){
    disableSortingBtn();
    await insertionSort();
    enableSortingBtn();
    displayDetails2();
    infocont.style.display="flex";
   
    window.scrollTo({
        top: 400,
        left: 0,
        behavior: 'smooth'
      });
    
});