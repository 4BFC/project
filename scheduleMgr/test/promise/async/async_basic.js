//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
//async 함수는 항상 promise를 반환합니다. 만약 async 함수의 반환값이 명시적으로 promise가 아니라면 암묵적으로 promise로 감싸집니다.
async function foo() {
  return 1;
}
//위의 코드와 아래 코드는 모두 같은 코드이다.
function foo() {
  return Promise.resolve(1);
}

//async 함수의 본문은 0개 이상의 await 문으로 분할된 것으로 생각할 수 있습니다. 첫번째 await 문을 포함하는 최상위 코드는 동기적으로 실행됩니다. 따라서 await 문이 없는 async 함수는 동기적으로 실행됩니다. 하지만 await 문이 있다면 async 함수는 항상 비동기적으로 완료됩니다.

//즉, 해당 버튼을 눌렀을 때 데이터 완료가 데이터를 처리하는 값이 먼저 실행이 되고 이후에 페이지가 넘어가는 방식으로 진행을 하는 것을 말하는 것이다.
