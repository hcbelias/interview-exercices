export function checkTriplet(arr, n) {
  const squareMapperResult = {};
  for (let i = 0; i < n; i++) {
    const squareValue = Math.pow(arr[i], 2);
    if (typeof squareMapperResult[squareValue] === "undefined") {
      squareMapperResult[squareValue] = [i];
    }
    squareMapperResult.push(squareValue);
  }
}
