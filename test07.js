// callback
// fs : read, write, append
console.time("test7");
fileSystemHandle();
//함수 > 고차함수
// 함수가 먼저 실행됨
console.timeEnd("test7");

const user = {
  id: 3,
  userName: "김철수",
  addr: "응암",
};

async function fileSystemHandle() {
  const fs = require("fs");
  let data;
  console.log("0. 시작");
  await fs.readFile("./data/user.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
  console.log("1 data 읽기 완료", data);
  console.log("2. 중간");
  await fs.writeFile("./data/user.json", JSON.stringify(user), (err) => {
    if (err) console.log(err);
    console.log("3 . 쓰기완료!!");
  });
  console.log("4. 끝");
}
