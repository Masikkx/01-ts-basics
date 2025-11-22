function getFirstElement1<T>(arr: T[]):T {
  return arr[0];
}

getFirstElement1([1, 2, 3]);           // 1
getFirstElement1(["a", "b", "c"]);     // "a"
getFirstElement1([true, false, true]); // true

