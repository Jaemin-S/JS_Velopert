console.log('안녕하세요!');
console.log('JavaScript를 배워봅시다.');
console.log(1 + 2 + 3 + 4); // 10

// 변수 선언
let value = 1;
console.log(value); // 1
// let value = 2; 는 오류
// 한 번 선언한 변수 이름은 똑같은 이름으로 선언 불가
// SyntaxError: /src/index.js: Identifier 'value' has already been declared
value = 2;
console.log(value); // 2

// 상수 선언
const a = 1;
console.log(a); // 1
// 상수는 값 변경 불가
// a = 2;
// TypeError: "a" is read-only
// const a = 2; 도 마찬가지로 불가

// null과 undefined
// null은 값이 없음을 고의적으로 설정하는 값
const friend = null;
console.log(friend); // null
// undefined는 아직 값을 설정해주지 않아서 없는 값
let criminal;
console.log(criminal); // undefined

// 비교 연산자 ===, !==
const s = 1;
const t = 1;
const u = '1';
console.log(s === t); //true
console.log(s == t); //true
console.log(s === u); //false
console.log(s == u); //true
// ==, != 는 타입검사까지 하지 않는다.
// 1 == '1'           true
// false == 0         true
// undefined == null  true
