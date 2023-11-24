//https://ko.javascript.info/fetch

let fetch_test = fetch("./data.dat")
  //index.html에부착이 되었을 때는 data.json의 위치가 html기준으로 파싱을 한다.
  .then(res => res.json())
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

console.log(fetch_test);

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