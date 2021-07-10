async function partition(ele, low, high){
    console.log('In partition()');
    let i = low - 1;
    // color pivot element
    document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
    document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';

    ele[high].style.background = 'red';
    for(let j = low; j <= high - 1; j++){
        document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
        document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';

        console.log('In partition for j');
        // color current element
        ele[j].style.background = 'yellow';
     
        await waitforme(delay);
        if(flag==0)
        {
            if(parseInt(ele[j].style.height) < parseInt(ele[high].style.height)){
                document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
                document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';
        
                    console.log('In partitionfor j if');
                    i++;
                    swap(ele[i], ele[j]);
                    // color 
                    ele[i].style.background = 'rgb(212, 181, 139)';
                    if(i != j) 
                     ele[j].style.background = 'rgb(212, 181, 139)';
                    // pauseChamp
                    await waitforme(delay);
                }
                else{
                    // color if not less than pivot
                    ele[j].style.background = 'pink';
                }
        }
        else
        {
            if(parseInt(ele[j].style.height) > parseInt(ele[high].style.height)){
                document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
                document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';
        
                    console.log('In partitionfor j if');
                    i++;
                    swap(ele[i], ele[j]);
                    // color 
                    ele[i].style.background = 'rgb(212, 181, 139)';
                    if(i != j) 
                     ele[j].style.background = 'rgb(212, 181, 139)';
                    // pauseChamp
                    await waitforme(delay);
                }
                else{
                    // color if not less than pivot
                    ele[j].style.background = 'pink';
                }
        }
    }
    document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
    document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';

    i++; 
    // pause
    await waitforme(delay);
    swap(ele[i], ele[high]); // pivot height one
    // console.log(`i = ${i}`, typeof(i));
    // color
    ele[high].style.background = 'pink';
    ele[i].style.background = 'green';

  
    await waitforme(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        document.querySelector('.flex-container').style.background='rgb(51, 51, 51)';
        document.querySelector('.flex-container').style.background= 'rgb(21, 24, 34)';

        if(ele[k].style.background != 'green')
            ele[k].style.background = 'rgb(228, 133, 17)';
    }

    return i;
}


async function  quickSort(ele, low, high)
{
        console.log('in quicksort');
            if (low < high)
            {
                let pi =  await partition(ele, low, high); 
                    await quickSort(ele, low, pi -1);
                    await quickSort(ele, pi + 1, high);             
            }
            else
            {
                if(low >= 0 && high >= 0 && low <ele.length && high <ele.length){
                    ele[high].style.background = 'green';
                    ele[low].style.background = 'green';
                }
            }  
}

const quickbtn = document.getElementById("quickbtn");
quickbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.line');
    let low = 0;
    let high = ele.length - 1;
    disableSortingBtn();
    
    await quickSort(ele, low, high);
   
    enableSortingBtn();
    // console.log(ele);
   
    // infocont.style.display="flex";
   
    // window.scrollTo({
    //     top: 400,
    //     left: 0,
    //     behavior: 'smooth'
    //   });
});