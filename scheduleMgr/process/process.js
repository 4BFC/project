import * as get_function from "./event_function.js";
// import * as get_function from "./event_function.js";
//-------------------------------------------------- get_id_area
let btn_execute = document.querySelector('#edit_btn');
//--------------------------------------------------_value_area
//여기서 다시 해당 #title 태그의 value값을 저장한다.

let change_btn = true;

//btn changes value
btn_execute.addEventListener('click', () => {

  // let title_create_id = document.querySelector('#input_title');
  //버튼이 눌렸을 때 if문이 성립 되어야 하기 때문에 해당 버튼의 event처리 함수에 조건문이 존재 해야한다.
  if (change_btn) {
    //when value is edit
    change_btn = false;
    btn_execute.value = 'save';
    get_function.edit_execute();

  } else if (change_btn != true) {
    //when value is save
    change_btn = true;
    btn_execute.value = 'edit';
    get_function.save_execute();
  }
})