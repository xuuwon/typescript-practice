// 문자열 (String)
const a: string = ''
const b: string = ""
const c: string = `` // 템플릿 리터럴

let myName: string = "Steve";
let message: string = `hello ${myName}`;

// 숫자 (Number)
// 9.9, -14, 3.4e-5, infinity, NaN 등도 모두 number
let n: number = 100;

let infinity: number = Infinity;
let iAmNotANumber: number = NaN;

// 불리언 (Boolean)
let isOpen: Boolean = true;

if (isOpen) {
    console.log('hello we are open!')
}

// null
// js와 동일
let user: string | null = null; // 초기값으로 null

function login (userName: string) {
    user = userName;
}

function logout () {
    user = null;
}

login("Joy") // user = string
logout() // user = null

// null - 값이 비어있다. undefined - 값이 할당되지 않았다.

// any 
// 모든 타입 체크 우회 - 되도록이면 사용 X
let someValue: any; 

// 모두 사용 가능
someValue.toString();
someValue = false;
someValue.toFixed();