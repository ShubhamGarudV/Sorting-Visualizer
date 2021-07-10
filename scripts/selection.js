
async function selectionSort()
{
   
    const ele = document.querySelectorAll(".line");
    var cur;

    for(let i=1;i<ele.length-1;i++)
    {
        console.log(`in ${i} i th loop`);
        cur=i;
        ele[i].style.background = 'blue';   
        for(j=i+1;j<ele.length;j++)
        {
           
            console.log(`in ${j} j th loop`);
            // document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
            document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';
 
            ele[j].style.background = 'red';
            await waitforme(delay);
            if(flag==0)
            {
                if(parseInt(ele[j].style.height)<parseInt(ele[cur].style.height))
                {
                    if(cur!==i)
                    {
                        ele[cur].style.background='rgb(228, 133, 17)';
                    }
                        
                    cur=j;
                }
                else
                {
                    ele[j].style.background = 'rgb(228, 133, 17)';
                }
            }
            else
            {
                if(parseInt(ele[j].style.height)>parseInt(ele[cur].style.height))
                {
                    if(cur!==i)
                    {
                        ele[cur].style.background='rgb(228, 133, 17)';
                    }
                        
                    cur=j;
                }
                else
                {
                    ele[j].style.background = 'rgb(228, 133, 17)';
                }
            }
            

        }
       
        await waitforme(delay);
        swap(ele[cur],ele[i]);
        ele[cur].style.background = 'rgb(228, 133, 17)';
        ele[i].style.background = '#88dd88';
    }
    ele[ele.length-1].style.background = '#88dd88';
    // document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
    document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';

}

const selectionbtn=document.getElementById('selectionbtn');

function displayDetails3()
{
    bct.innerText="O(n*n)";
    act.innerText="O(n*n)";
    wct.innerText="O(n*n)";
    asp.innerText="O(1)";
    inplace.innerText="Yes";
    stable.innerText="No";       
    bonusdet.innerText="The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation.";
}


selectionbtn.addEventListener('click', async function(){
    disableSortingBtn();
    await selectionSort();
    enableSortingBtn();
    displayDetails3();
    infocont.style.display="flex";
   
    window.scrollTo({
        top: 400,
        left: 0,
        behavior: 'smooth'
      });
    
});