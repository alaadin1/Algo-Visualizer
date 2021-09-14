let bttnInsert = document.getElementById('btn-insert')
let bttnClicked;
let isRunning = false;
let spd = document.getElementById('speed')
let speed = spd.value
//function to disable the buttons 


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function swap(el1,el2) {
    const transform1 = window.getComputedStyle(el1).getPropertyValue("height"); 
    const transform2 = window.getComputedStyle(el2).getPropertyValue("height");
    
    
    el1.style.height = transform2;
    el2.style.height = transform1;

}

async function insertionSort(){
    bttnClicked = true
    if (bttnClicked){
        bttnInsert.disabled = true
        btnSelection.disabled = true
        btnBubble.disabled = true
    }

    let divs = document.querySelectorAll('div')
    let len = divs.length
   

    for(let key = 2; key < len-1; key++){
        if(isRunning === true){
            btnSelection.disabled = false
            bttnInsert.disabled = false
            btnBubble.disabled = false
            break
            //set true when press new arraty
        }


        let height1 = window.getComputedStyle(divs[key]).getPropertyValue("height")
        let height2 = window.getComputedStyle(divs[key-1]).getPropertyValue("height")
        
        IntHeight1 = height1.replace('px', '')
        IntHeight1 = parseInt(IntHeight1)

        IntHeight2 = height2.replace('px', '')
        IntHeight2 = parseInt(IntHeight2)
        
        if (IntHeight1<IntHeight2){
   
            let index = key;
            getDivHeight(divs[index],divs[index-1])

            while (index > 1 && workingHeight1<workingHeight2){

                divs[index].style.background = 'red'
                divs[index-1].style.background = 'red'
                speed = spd.value
                await timeout(speed)
                swap(divs[index], divs[index-1])
                divs[index].style.background = 'blue'
                divs[index-1].style.background = 'blue'
                index = index -1
                
                
                getDivHeight(divs[index],divs[index-1])
            }
        console.log(speed)
        }
     
    }
    btnSelection.disabled = false
    bttnInsert.disabled = false
    btnBubble.disabled = false
}


bttnInsert.addEventListener('click', ()=>{
    isRunning = false
    insertionSort()
   
})


function getDivHeight(div1, div2){
    let heightIndex1 = window.getComputedStyle(div1).getPropertyValue("height")
    let heightIndex2 = window.getComputedStyle(div2).getPropertyValue("height")

    workingHeight1 = heightIndex1.replace('px', '')
    workingHeight1 = parseInt(workingHeight1)

    workingHeight2 = heightIndex2.replace('px', '')
    workingHeight2 = parseInt(workingHeight2)
}
