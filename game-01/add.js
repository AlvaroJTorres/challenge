function add(arr, total) {
  if (!Array.isArray(arr)) return "Insert an array";
  if (typeof total !== "number") return "Insert a number";

  let hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]]) {
      return [hashMap[arr[i]], arr[i]];
    } else {
      hashMap[total - arr[i]] = arr[i];
    }
  }

  return "No solution found";
}
