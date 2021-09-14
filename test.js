// function bubbleSort(arr){

//     let len = arr.length
//     let swap = true;

//     while(swap){
//         swap = false
//         for (let j = 0; j <len; j++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 swap = true;
//                 console.log(arr)
//         }
//     }
// }
// return arr
// }


// arr = [3,5,1, 6, 10, 9, 8, 4]
// console.log(bubbleSort(arr))
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }

  asyncCall()