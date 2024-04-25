// 만약 멀티쓰레드라면 동시에 처리

// callback
// fs : read, write, append

const fs = require("fs");
console.log("0. 시작");
// const fsPromise = require("fs").promises;

setTimeout(() => {
  console.log("1. setTimeout");
}, 4);
setTimeout(() => {
  console.log("2. setTimeout");
}, 2);
console.log("3. 세번째");
setTimeout(() => {
  console.log("4. setTimeout");
}, 2);
console.log("5. 다섯번째");

//함수 > 고차함수
// 함수가 먼저 실행됨
// 0 3 5
// setTimeout은 큐방식으로 처리됨

// 각 번호보다 작은애들의 공간이 비어있어야 처리된다
// 번호순 == 우선처리될 순서
// stack (1.nextTic 2.promise)
// 3.setTimeot
// 4.fs 큐
// 5. im 즉시실행함수
// 6. close
