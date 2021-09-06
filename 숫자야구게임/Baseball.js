const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

// 1부터 9까지 수  대입
const numbers = [];
for (let n = 0; n < 9; n++) {
  numbers.push(n + 1);
}

// 랜덤한 4개의수 배열의 입력
const answer = [];
for (let n = 0; n <= 3; n++) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]); // answer에 랜덤으로 담고
  numbers.splice(index, 1); // 랜덤으로 담은 수는 중복이 되지않게 제거해줌
}
console.log(answer);

//검사하는 코드
const tries = [];
function checkInput(input) {
  if (input.length !== 4) {
    // 길이는 4가 아닌가
    return alert("4자리 숫자를 입력해 주세요");
  }
  if (new Set(input).size !== 4) {
    // 중복된 숫자가 있는가
    return alert("중복되지 않게 입력해 주세요.");
  }
  if (tries.includes(input)) {
    // 이미 시도한 값은 아닌가
    return alert("이미 시도한 값입니다.");
  }
  for (let i = 0; i < answer.length; i++) {
    if (String(input)[i] === "0") {
      return alert("1~9까지의 숫자를 입력해 주세요");
    }
  }
  return true;
}

let out = 0;

function remove() {
  $form.removeEventListener("submit", All);
}

function All(event) {
  event.preventDefault();
  const value = $input.value;
  $input.value = "";
  if (!checkInput(value)) {
    return;
  }

  // 입력값 문제없음
  if (answer.join("") === value) {
    $logs.textContent = `${value}홈런!`;
    remove();
    return;
  }
  if (tries.length >= 9 || out === 2) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join("")}`);
    $logs.appendChild(message);
    remove();
    return;
  }

  // 몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
      // 일치하는 숫자 발견
      if (index === i) {
        // 자릿수도 같음
        strike += 1;
      } else {
        // 숫자만
        ball += 1;
      }
    }
  }
  // 몇 아웃인지 검사
  if (strike === 0 && ball === 0) {
    out++;
  }
  $logs.style.color = "red";
  $logs.append(
    `${value}: ${strike} 스트라이크 ${ball} 볼 ${out}아웃`,
    document.createElement("br")
  );
  tries.push(value);
}
$form.addEventListener("submit", All);
