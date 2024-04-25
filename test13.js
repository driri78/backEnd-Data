// nodejs
const fs = require("fs");
// 확장자 찾는순서
// 확장자를 생략하면 user.js > user.mjs > user.기타자바스크립트파일 .... > user.json
// 확장자를 생략할 수 있지만 .json은 에러 방지를 위해 확장자를 쓴다
// users : json => arr로 바꿔서 읽어옴

const user = {
  id: 3,
  userName: "김철수",
  addr: "응암",
};

const readFile = async () => {
  const data = fs.readFileSync("./data/user.json", "utf-8", (err) => {
    if (err) console.log(err);
  });

  const users = await JSON.parse(data); // Promise <pending> 대기 , fulfilled 완료, rejected 실패
  Array.from(data).push(user);
  console.log(Array.from(data));
  //   const users = JSON.parse(data);
  return Array.from(users);
};

const users = readFile();
console.log(Array.isArray(users));

// console.log(users);

fs.writeFileSync(
  "./data/user.json",
  JSON.stringify(users, null, "   "),
  (err) => {
    if (err) console.log(err);
  }
);
