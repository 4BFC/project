import * as get_function from "./event_function_refactoring.js";
// import * as get_function from "./event_function.js";
//-------------------------------------------------- get_id_area
let btn_execute = document.querySelectorAll('#edit_btn');
//--------------------------------------------------_value_area
//여기서 다시 해당 #title 태그의 value값을 저장한다.

// let change_btn = true;
//btn changes value
document.addEventListener('DOMContentLoaded', () => {

  // let title_create_id = document.querySelector('#input_title');

  //spread 연산방법으로 nodeList를 array로 변환
  let btnArray = [...btn_execute];

  //버튼이 눌렸을 때 if문이 성립 되어야 하기 때문에 해당 버튼의 event처리 함수에 조건문이 존재 해야한다.
  btn_execute.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      //해당 타겟 index 배열 값 반환하는 코드
      let n = btnArray.indexOf(event.currentTarget)
      console.log(n)

      //해당 label값 변경되는 조건문 
      if (btn.value == 'edit') {
        //when value is edit
        btn.value = 'save';
        get_function.edit_execute(n);

      } else if (btn.value !== 'edit') {
        //when value is save
        btn.value = 'edit';
        get_function.save_execute(n);
      }
    })
  })

})