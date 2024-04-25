// 짝수 출력하기
// 재사용
function log(m) {
  if (m % 2 === 0) {
    console.log(m);
  }
}
function even(m) {
  if (m % 2 === 0) {
    console.log(m);
  }
}
function odd(m) {
  if (m % 2 !== 0) {
    console.log(m);
  }
}
function odd5(m) {
  if (m % 5 === 0) {
    console.log(m);
  }
}
log(1);
log(2);

const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. function loop(arr) { // 짝수만 구할수 있음
//   arr.forEach((num) => {
//     if (num % 2 === 0) {
//         console.log(num);
//       }
//   });
// }
// 2. function loop(arr) { // 짝수만 구할수 있음
//   arr.forEach((num) => log(num));
// }
// loop(numArr);

// 3. 다양한 용도로 사용할 수 있다(짝수, 홀수, ....)
function loop(arr, callback) {
  arr.forEach((num) => callback(num));
}
loop(numArr, even);
loop(numArr, odd);
loop(numArr, odd5);

// 4. 고차함수 : 함수를 파라미터로 갖거나 함수를 리턴하는 함수
function highOrderFunction(arr, callback) {
  arr.forEach((num) => callback(num));
}
