// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial


unction factorial(n){
  if (n < 0) throw new RangeError("Range must be more then 0");
  return n > 1 ? n * factorial(n - 1) : 1;
}
