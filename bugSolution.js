function foo(a, b) {
  if (a == null || b == null) {
    return 0; // or handle it in another way
  }
  return a + b; 
}
console.log(foo(1, null)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, 2)); // 3
console.log(foo(undefined, 2)); // 2
console.log(foo(2, undefined)); // 2