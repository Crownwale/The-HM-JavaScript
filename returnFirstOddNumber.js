let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function returnFirstOddNumber(){
 for(let i = 0; i < numbers.length; i++){ 
   if(numbers[i] % 2 === 1){
     console.log(numbers[i]);
     break;
  }
 }
}
returnFirstOddNumber();