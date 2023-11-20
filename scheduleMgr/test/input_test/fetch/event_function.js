//random으로 생성되는 숫자와 해당 글자들
let random = Math.floor(Math.random() * 10);
let random_text = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
let hidden_num = document.querySelector(".hidden_num");
let btn = document.querySelector(".btn");

export let addBtn = (e) => btn.addEventListener("click", () => {
  e.preventDefault();
  hidden_text.value = random_text[random];
  hidden_num.value = random;
  console.log("After : " + hidden_text.value);

})