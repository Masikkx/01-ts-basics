function getFirstElement1<T>(arr: T[]):T {
  return arr[0];
}

getFirstElement1<number>([1, 2, 3]);           // 1
getFirstElement1<string>(["a", "b", "c"]);     // "a"
getFirstElement1<boolean>([true, false, true]); // true

