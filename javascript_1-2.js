// 함수
function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum); // 3


// 화살표 함수
const add2 = (a, b) => {
  return a + b;
};
// const add2 = (a, b) => a + b;

console.log(add2(1, 2)); // 3

// 화살표 함수는 파라미터가 하나밖에 없다면 파라미터의 괄호를 생략할 수 있음
let double = n => n * 2;
console.log(double(2)); // 4

// 파라미터가 하나도 없다면 괄호를 비워놓음. 이때 괄호 생략 불가
let sayHi = () => console.log('Hi!');
sayHi(); // Hi!


// 템플릿 리터럴
function hello(name) {
  console.log(`Hello, ${name}!`);
}

hello('velopert'); // Hello, velopert!


// 객체
const dog = {
  name: '멍멍이',
  age: 2,
  '공백이 있는 키': true
};

const cat = {
  name: '고양이',
  sound: '야옹',
  say: function () {
    console.log(this.sound);
  }
  // 객체 안에 함수를 넣을 때,
  // 화살표 함수로 선언한다면 제대로 작동하지 않는다.
  // 화살표 함수가 가리키는 this는 자신이 속한 객체가 아님
};

console.log(dog.name); // '멍멍이'
console.log(dog.age); // 2
cat.say(); // 야옹


// 객체 비구조화 할당 (객체 구조 분해)
const { name, age } = dog;
// dog. 를 쓰지 않아도 됨!
console.log(`${name}, ${age}`); // 멍멍이, 2

// 파라미터에 객체 비구조화
function print({ name, age }) {
  console.log(name, age);
}

print(dog); // 멍멍이 2
print(cat); // 고양이 undefined


// 객체의 getter 함수와 setter 함수
// getter 함수는 get 함수이름() {}로 정의
// setter 함수는 set 함수이름() {}로 정의
// getter 함수와 setter 함수는 호출할 때 ()를 적지 않는다.
// 즉, method를 property처럼 쓸 수 있다.
const numbers = {
  _a: 1,
  get a() {
    return this._a;
  },
  set a(value) {
    this._a = value;
  }
};

console.log(numbers.a); // 1
numbers.a = 2;
console.log(numbers.a); // 2


// 배열
const array = [1, 2, 3, 4, 5];
// 배열 요소 추가
array.push(6);
console.log(array); // [1, 2, 3, 4, 5, 6]
// 배열 크기 확인
console.log(array.length); // 6

// 객체의 정보를 배열 형태로 반환하는 함수
console.log(Object.entries(dog)); // [[키, 값], [키, 값], [키, 값]]
console.log(Object.keys(dog)); // [키, 키, 키]
console.log(Object.values(dog)); // [값, 값, 값]

// 객체를 위한 반복문 for...in 구문
for (let key in dog) {
  console.log(`${key}: ${dog[key]}`);
}
