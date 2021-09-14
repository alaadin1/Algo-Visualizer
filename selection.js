let btnSelection = document.getElementById('btn-select')
function swap(el1,el2) {
    const transform1 = window.getComputedStyle(el1).getPropertyValue("height"); 
    const transform2 = window.getComputedStyle(el2).getPropertyValue("height");
    
    
    el1.style.height = transform2;
    el2.style.height = transform1;

  }


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function selectionSort(){
  bttnClicked = true
  if (bttnClicked){
      btnSelection.disabled = true
      bttnInsert.disabled = true
      btnBubble.disabled = true

  }


  let divs = document.querySelectorAll('div')
  let len = divs.length

  for (let i= 1; i< len-2; i++){
    if(isRunning === true){
        btnSelection.disabled = false
        bttnInsert.disabled = false
        btnBubble.disabled = false
        break
      }

      let minIndex = i
      for (let j = i+1; j< len-1; j++){
          let height1 = window.getComputedStyle(divs[minIndex]).getPropertyValue("height")
          let height2 = window.getComputedStyle(divs[j]).getPropertyValue("height")
              
          IntHeight1 = height1.replace('px', '')
          IntHeight1 = parseInt(IntHeight1)
  
          IntHeight2 = height2.replace('px', '')
          IntHeight2 = parseInt(IntHeight2)

          if (IntHeight1 > IntHeight2){
              minIndex = j;
              // divs[minIndex].style.backgroundColor = 'red'
          }
          
      }
      
      divs[i].style.background = 'yellow'
      divs[minIndex].style.background = 'red'
      speed = spd.value
      await timeout(speed)
      swap(divs[minIndex], divs[i])
      divs[i].style.background = 'blue'
      divs[minIndex].style.background = 'blue'
  }
  btnSelection.disabled = false
  bttnInsert.disabled = false
  btnBubble.disabled = false
}



btnSelection.addEventListener('click',()=>{
    isRunning = false
    selectionSort()
})