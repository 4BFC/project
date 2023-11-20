//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

//비동기 처리
async function asyncCall() {
  // console.log('calling');
  const result = await resolveAfter2Seconds(); //=> 비동기 처리지만 해당 함수 안에 있는 await으로 두의 함수가 온전히 마치고 난 다음의 코드를 파싱(분석)한다.
  console.log(result);
  console.log('inner_calling');
  // Expected output: "resolved"
}
console.log('field_calling'); //하지만 여기서의 console.log('calling');는 비동기 함수보다 먼저 실행 되는 것을 알 수 있다.

asyncCall();