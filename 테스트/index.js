let id;
let count = 0;
const a = setInterval(() => {
  console.log(`1초마다 실행됩니다(${count})`);
  count++;
}, 1 * 1000);

setTimeout(() => {
  console.log(`타이머를 종료합니다`);
  clearInterval(a);
}, 5 * 1000);
