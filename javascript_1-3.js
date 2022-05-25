// 배열 내장함수
// forEach 배열의 모든 원소에 콜백함수 적용
const superheroes = ['아이언맨', '캡틴 아메리카', '토르'];
superheroes.forEach(hero => {
  console.log(hero);
}); // 아이언맨\n캡틴 아메리카\n토르
// superheroes.forEach(hero => console.log(hero);); => {}를 안 쓰면 오류

// map 파라미터로 들어간 함수를 각 원소마다 적용해 새로운 배열로 반환
const array = [1, 2, 3, 4, 5];
const squared = array.map(n => n * n);
// const square = n => n*n;
// const squared = array.map(square);
console.log(squared); // [1, 4, 9, 16, 25]

// indexOf 원하는 항목이 몇번째 원소인지 찾아줌
const index = superheroes.indexOf('캡틴 아메리카');
console.log(index); // 1

// findIndex 검색을 원하는 항목이 객체나 배열일 때 indexOf 대신 사용
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

console.log(todos.findIndex(todo => todo.id === 3)); // 2

// find 검색한 값 자체를 반환
console.log(todos.find(todo => todo.id === 3)); // {id: 3, text: "객체와 배열 배우기", done: true}

// filter 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열로 반환
console.log(todos.filter(todo => todo.done === false)); // [{id: 4, text: '배열 내장 함수 배우기', done: false}];

// splice 특정 항목을 제거
let numbers = [10, 20, 30, 40];
const idx = numbers.indexOf(20);
numbers.splice(idx, 2); // 첫 번째 파라미터는 시작 인덱스, 두 번째 파라미터는 몇 개 삭제할지
console.log(numbers); // [10, 40] 배열 원본이 수정됨

// slice 배열을 자를 때 사용
numbers = [10, 20, 30, 40];
const sliced = numbers.slice(1, 3); // 첫 번째 파라미터는 시작 인덱스, 두 번째 파라미터는 마지막 인덱스+1
console.log(sliced); // [20, 30]
console.log(numbers); // [10, 20, 30, 40] // 배열 원본이 유지됨

// shift 첫 번째 원소를 추출
numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value); // 10
console.log(numbers); // [20, 30, 40]

// pop 마지막 원소를 추출
numbers = [10, 20, 30, 40];
const value2 = numbers.pop();
console.log(value2); // 40
console.log(numbers); // [10, 20, 30]

// unshift 맨 앞에 원소를 추가
numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers); // [5, 10, 20, 30, 40]

// concat 여러 개의 배열을 하나의 배열로 합침
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const concated = arr1.concat(arr2, arr3);
console.log(concated); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1); // [1, 2, 3] 배열 원본은 유지됨

// join 배열 안의 값들을 문자열 형태로 합침
console.log(arr1.join()); // 1,2,3  default ','
console.log(arr1.join(' ')); // 1 2 3
console.log(arr1.join(', ')); // 1, 2, 3
console.log(arr1.join('')); // 123

// reduce 배열의 전체 원소를 돌며 누적값을 활용할 수 있음
numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// 콜백 함수의 첫 번째 파라미터는 콜백 함수, 두 번째 파라미터는 초기값. 초기값을 제공하지 않으면 배열의 첫 번째 원소 사용
// 콜백 함수의 세 번째 파라미터로 currentIndex(optional)이 있는데, 초기값을 제공하면 0, 제공하지 않으면 1부터 시작
// 콜백 함수의 네 번째 파라미터로 array(optional)이 있는데, reduce()를 호출한 배열 자기 자신을 가리킨다.
console.log(sum); // 15

