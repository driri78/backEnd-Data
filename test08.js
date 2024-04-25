// callback
// fs : read, write, append

const user = {
  id: 3,
  userName: "김철수",
  addr: "응암",
};
const fileSystemHandle = async () => {
  const fs = require("fs");

  console.log("0. 시작");
  let data = await fs.readFileSync("./data/user.json", "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("1 data 읽기 완료", data);
  console.log("2. 중간");

  // 경로가 없으면 생성해서 코드 실행 => 오류 x
  //   await fs.writeFileSync("./data/user.json", JSON.stringify(user), (err) => {
  //     if (err) console.log(err);
  //   });
  //   console.log("3 . 쓰기완료!!");

  fs.renameSync("./data/user.json", "./data/my.json", (err) => {
    if (err) {
      console.log(err);
    }
  });
  fs.appendFileSync(
    "./data/my.json",
    JSON.stringify(user, null, "   "),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

console.time("test8");
fileSystemHandle();
//함수 > 고차함수
// 함수가 먼저 실행됨
console.timeEnd("test8");
