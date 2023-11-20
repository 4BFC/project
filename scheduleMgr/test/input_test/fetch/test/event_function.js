// data.js
let random = Math.floor(Math.random() * 10);
let random_text = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let hidden_num = document.querySelector(".hidden_num");
let hidden_text = document.querySelector(".hidden_text");
let btn = document.querySelector(".btn");

export let addBtn = () => {
  btn.addEventListener("click", (e) => {
    hidden_text.value = random_text[random];
    hidden_num.value = random;

    // Fetch를 사용하여 데이터 전송
    //https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
    fetch('process_data.php', {
      method: 'POST',
      body: new URLSearchParams({
        'hidden_text': hidden_text.value,
        'hidden_num': hidden_num.value
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Fetch error:', error)); //여기서 method, body, headers, response, data,error은 무엇인가? 약속된 변수?같은 것인가?

    e.preventDefault();//e.preventDefault()를 사용하지 않으면 process_data.php가 두번 실행된다.
  });
}
