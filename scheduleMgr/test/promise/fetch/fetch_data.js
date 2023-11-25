//https://ko.javascript.info/fetch

let fetch_test = fetch("./data.dat")
  //index.html에부착이 되었을 때는 data.json의 위치가 html기준으로 파싱을 한다.
  .then(res => res.json())//res.json()은 Fetch API에서 제공하는 메소드 중 하나로, HTTP 응답의 본문을 JSON 형태로 파싱하는 역할을 합니다.
  .then(res => {
    // console.log(res);
    for (i = 0; i < res.employees.length; i++) {
      console.log("res : ", res.employees[i].name)
    }
    return res;
  })
  .then(data => { //앞에 있는 return res를 data를 전달 받는다.
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

console.log(fetch_test); //=> promise라고 로그가 찍힌다. 그리고 먼저 실행이 된다. 이는 비동기로 작동되고 있다는 것을 알 수 있다.

//이렇게 수정하면 .then(data => { console.log(data); }) 부분에서 data는 앞서의 .then(res => { ... })에서 반환된 값을 가지게 된다.
/**
 fetch('data.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Fetch error:', error);
});

 */