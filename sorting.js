//Get elements by their respective IDs so that they are easier to work with
let graphVis = document.getElementById('graph-visual')
let btnArr = document.getElementById('btn-arr')
let arr_sz = document.getElementById('arr_sz')
let no_of_bars = arr_sz.value

graphVis.style.marginLeft = '200px'
graphVis.style.marginTop = '30px'

//Create 100 div elements in the body of the HTML code

function create_bars(){

for(let i = 0; i < no_of_bars; i++ ){
    let div = document.createElement('div')
    graphVis.appendChild(div)
    }
}

//create_bars()
function newArray(){
    removeChildren()
    create_bars()
    //let no_of_bars = arr_size.value
    //define global variables
    let min = Math.ceil(10)
    let max = Math.floor(251)
    let new_arr = []

    //create_bars()
    //create an array of 100 random numbers
    //This will be the height of the bar graph
    for (let i = 0; i < no_of_bars; i++){
        let randNum = Math.floor (Math.random() * (max-min)+min)
        new_arr.push(randNum)
    }

    //add CSS styles to all the bars
    let divs = document.querySelectorAll('div')
    for(let i = 1; i < divs.length-1; i++){
        divs[i].classList.add('style'+ i)
        divs[i].style.backgroundColor = 'blue'
        height = new_arr[i] 
        height = height +'px'
        divs[i].style.height = height
        divs[i].style.margin = '1px'
        divs[i].style.float = 'left'
        divs[i].style.width = '5px'
        divs[i].style.borderBottomLeftRadius = '20px'
        divs[i].style.borderBottomRightRadius = '20px'
    }
    isRunning = true
}


function removeChildren(){
 let myNode = document.getElementById('graph-visual')
   
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}

arr_sz.addEventListener("input", () => {
    // take out children
    no_of_bars = arr_sz.value
    removeChildren()
    newArray()
    
})
    
btnArr.addEventListener('click', () =>{
    newArray()
} )


