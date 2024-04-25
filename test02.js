// 즉시 실행되는 callback
// 배열함수

const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numArr.sort((prev, next) => prev - next); // 오름차순
numArr.sort((prev, next) => next - prev); // 내림차순
// numArr.sort((prev, next) => next - prev > -1, 0, 1); // -1, 0, 1 로 처리할 수도 있음
console.log(numArr);

// const filtered = numArr.filter((num) => num % 3 === 0);
const filtered = numArr.filter(function (num) {
  console.log(num % 3 === 0 && num);
  return num % 3 === 0 && num;
});
console.log(filtered);

const find = numArr.find((num) => num === 6);
console.log(find);

const map = numArr.map((num) => num * 2);
console.log(map);
