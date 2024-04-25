// nodejs
const fs = require("fs");
const users = require("./data/user.json");
// 확장자 찾는순서
// 확장자를 생략하면 user.js > user.mjs > user.기타자바스크립트파일 .... > user.json
// 확장자를 생략할 수 있지만 .json은 에러 방지를 위해 확장자를 쓴다
// users : json => arr로 바꿔서 읽어옴

console.log(Array.isArray(users)); // 배열인지 확인

const user = {
  id: 3,
  userName: "김철수",
  addr: "응암",
};
users.push(user);
console.log(users);

// 다 지웠다가 다시 쓴다 => 만약 데이터가 100개일경우 1개만 추가할껀데 101개를 다시 쓰는거와 같다(비효율)
fs.writeFileSync(
  "./data/user.json",
  JSON.stringify(users, null, "   "),
  (err) => {
    if (err) console.log(err);
  }
);
