let btnBubble = document.getElementById('btn-bubble')

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function bubbleSort(){

    bttnClicked = true
    if (bttnClicked){
      btnSelection.disabled = true
      bttnInsert.disabled = true
      btnBubble.disabled = true
    }
  
    let divs = document.querySelectorAll('div')
    let len = divs.length

    //perform the bubble sort algo

    let swap_happened = true
    while (swap_happened){
      
        swap_happened = false
        for(let i=1; i < len-2; i++){

          if(isRunning === true){
            btnSelection.disabled = false
            bttnInsert.disabled = false
            btnBubble.disabled = false
            break
            //set true when press new arraty
        }


            //if the first divs height is great than the second div's height, we swap the divs
            let height1 = window.getComputedStyle(divs[i]).getPropertyValue("height")
            let height2 = window.getComputedStyle(divs[i+1]).getPropertyValue("height")
            
            IntHeight1 = height1.replace('px', '')
            IntHeight1 = parseInt(IntHeight1)

            IntHeight2 = height2.replace('px', '')
            IntHeight2 = parseInt(IntHeight2)
            
            if (IntHeight1 > IntHeight2){
       
                divs[i].style.background = 'red'
                divs[i+1].style.background = 'red'
                
                speed = spd.value
                await timeout(speed)
            
                swap(divs[i], divs[i+1])

              
                divs[i].style.background = 'blue'
                divs[i+1].style.background = 'blue'

                

              swap_happened = true

              }
      }

    }
    btnSelection.disabled = false
    bttnInsert.disabled = false
    btnBubble.disabled = false
}
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function swap(el1,el2) {
    const transform1 = window.getComputedStyle(el1).getPropertyValue("height"); 
    const transform2 = window.getComputedStyle(el2).getPropertyValue("height");
    
    
    el1.style.height = transform2;
    el2.style.height = transform1;

  }



// let waitTime = await new Promise (resolve =>
//     setTimeout(() => {
//         resolve(), delay(2)
//     }))
    

btnBubble.addEventListener('click', () => {
  isRunning = false
  bubbleSort()

})
