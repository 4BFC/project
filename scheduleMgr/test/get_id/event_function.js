let button = document.querySelector('.button_class')
// let new_button = document.querySelector('.new_button_class')
//변경 전
//클래스 명이 변경되었는데도 변경 전 클래스명으로 계속 실행이되는가..
button.addEventListener('click', () => {
  console.log('test')
  button.value = 'new_button_value'
  button.className = 'new_button_class'
  console.log(button.classList.contains)
})
//변경 후
// new_button.addEventListener('click', () => {
//   console.log('new_test')
// })
