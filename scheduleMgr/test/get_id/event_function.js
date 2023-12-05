let button = document.querySelector('.button_class')
// let new_button = document.querySelector('.new_button_class')//새롭게 생성하는 페이지에서만
//변경 전
//클래스 명이 변경되었는데도 변경 전 클래스명으로 계속 실행이되는가..
button.addEventListener('click', new_class_name = () => {
  if (button.className == 'button_class') {
    console.log('button_class')
    button.value = 'done'
    button.className = 'new_button_class'
  } else if (button.className == 'new_button_class') {
    console.log('new_button_class')
    button.value = 'create'
    button.className = 'button_class'
  }
})

//그렇다면 상황에 따라 addeventlistener에서 함수가 바뀌는 함수
// console.log('null')
// new_button.addEventListener('click', class_name = () => {
//   if (button.className == 'new_button_class') {
//     console.log('new_button_class')
//     button.value = 'button_value'
//     button.className = 'button_class'
//   }
// })






//변경 후
// new_button.addEventListener('click', () => {
//   console.log('new_test')
// })
