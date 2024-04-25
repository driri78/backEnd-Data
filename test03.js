// 지연시키기 위함

// node event 처리

let num = 0;
const add_3 = () => {
  console.log((num += 3));
};
// setInterval(add_3, 3000);
setInterval(add_3, 3000);

const fs = require("fs");

fs.readFile("./README.md", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

process.on("uncaughtException", (err) => {
  console.error(err);
});
