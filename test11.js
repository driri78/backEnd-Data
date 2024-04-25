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

const readFile = () => {
  try {
    const data = fs.readFileSync("./data/user.json", "utf-8");
    //   const users = await JSON.parse(data); // Promise <pending> 대기 , fulfilled 완료, rejected 실패
    const users = JSON.parse(data);
    return Array.from(users);
  } catch (err) {
    if (err) console.log(err);
  } finally {
    console.log("처리완료");
    // open, close
  }
};

const users = readFile();

const filtersArr = users.filter((user) => user.userName === "김철수"); // 배열
console.log(filtersArr);

const deleteArr = users.filter((user) => user.userName !== "김철수"); // 지운다
console.log(deleteArr);

const writeJson = require("./test10");
writeJson(deleteArr);

// backend 에서 우리한테 data를 넘겨준다
// 하나의 데이터를 받아 화면에 표현
// frontend(fetch: get post delete put) <=> backend + db, json
// backend => url이동 : route
