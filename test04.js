// callback
// fs : read, write, append
console.time("test4");

const fs = require("fs");
console.log("0. 시작");
const user = {
  id: 3,
  userName: "김철수",
  addr: "응암",
};
fs.writeFile("./data/user.json", JSON.stringify(user), (err) => {
  if (err) console.log(err);
  console.log("1 . 쓰기완료!!");
});
console.log("2. 두번째");

fs.readFile("./data/user.json", "utf-8", (err, data) => {
  console.log("3. ", data);
});

//함수 > 고차함수
// 함수가 먼저 실행됨
console.timeEnd("test4");

// 싱글쓰레드 한번에 하나만 처리
// 멀티쓰레드 여러개를 동시에 처리 == 병렬
