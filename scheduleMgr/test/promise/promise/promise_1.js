//state = pending -> fulfilled or rejected
//producer vs consumer

//1. producer
//promise를 생성하면 executor가 바로 실행이 된다.
const promise = new Promise((resolve, reject) => {
  console.log('doing something...');
  setTimeout(() => {
    //resolve('ellie');//조건이 할당되면 값을 전달하는 역할을 한다.
    reject(new Error('no Network'));
  }, 2000);
});

//2. consumer
promise
  .then(value => { // then은 promise가 완료가 된 다음 실행하겠다라는 뜻.
    console.log(value); //action => promise로 부터 받은 value 값을 console.log로 값을 추출
  })
  .catch(error => {//error가 발생 되었을 때 브라우저 동작이 멈추지 않고 정상적으로 실행 될 수 있게 한다.
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  })

//3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})

fetchNumber
  .then(num => num * 2)//2
  .then(num => num * 3)//6
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);//ready -> 5 미출력
    });
  })
  .then(num => console.log(num))//action -> 5 출력

//4.Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 달걀`), 1000);
    // setTimeout(() => reject(`${hen} => 달걀`), 1000); //error가 났을 때
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 후라이`), 1000);
  });

getHen()
  .then(getEgg) //->한줄로 요약이 가능 send :닭 전달 / ready : 닭 => 달갈
  .catch(error => { return '빵'; })
  .then(egg => cook(egg)) //send : 닭 => 달갈 / ready : 닭 => 달갈 => 후라이
  .then(meal => console.log(meal)) //send : 닭 => 달갈 => 후라이 / action : 닭 => 달갈 => 후라이
  .catch(console.log()); //error가 발생 했을 때