var number = 1;
var a = 2;
function is PrimeNumber(number) {
  if (number < 2) {
    return false;
  }
  while (a <= number / 2) {
    if (number % a ==0){
      a = 2;
      return false;
   }else {
   a = a + 1;
  }
}
 a = 2;
 return true;
}
