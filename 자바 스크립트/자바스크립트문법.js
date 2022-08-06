// 주석처리 = // 슬래시 두개
// 변수: 3가지 종류의 변수가 있다.
  
var t = 10   // 중복이 가능하며 변수값을 바꿀 수 있다.
let b = 20   // 이름을 중복으로 변수를 만들 수 없다. 변수값을 바꿀 수 있다.
const c = 30 // const = 상수. 한번 지정하면 다시 바꿀 수 없다.
d = 12 // 아무것도 앞에 쓰지 않으면 var로 지정된다.

// 출력:
console.log(`a = ${a}`)  //  console.log(출력값) == print() 
// `a = ${a}` == 글자와 숫자를 동시에 출력한다/

// 조건:
var a = 100
if (a > 100){
    console.log("크다")
}
else if (a < 100){
    console.log("작다")    // python에서는 elif로 쓰지만 여기서는 else if로 쓴다
}
else{
    console.log("같다")
}

// 반복 :
for (var i = 0 ; i  < 10 ; i++){  // i += 2 2씩 늘어나기. 
    console.log(i)
}

console.log("---------------------------")
i = 0 
while (i < 10){
    console.log(i)
    i++
}

console.log("------------------------------")
// 리스트
var list = [1,2,3,4]
console.log(list[0])
// 리스트 추가
list.push(10) // 맨 뒤
// 리스트 삭제
list.pop()      // 맨 끝

// 숫자세기 : len(python) 
console.log(list.length)

// 함수
function 함수이름(n,m){
    return n + m
}
a = 변수이름(10,20)
console.log(a)