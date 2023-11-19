import * as get_event from "./process/event_function.js"

let edit_btn = document.querySelectorAll('.edit_btn');
let delete_btn = document.querySelectorAll('.delete_btn');

let change_btn = true;
let btnArray = [...edit_btn]
//현재 여기서 문제는 event_function.js 속에 있다. variable.js안에 있는 querySelectAll로 지정되었는 상황에서 createElement를 수행하기 어렵다. 이부분을 극복하기 위해서 NodeList를 사용해야한다.

//DOMContentLoaded를 사용해서 HTML이 파싱되면서 DOM을 완전히 로드 되었는지 확인하는 확인하는 역할을 한다.
document.addEventListener('DOMContentLoaded', () => {

  edit_btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let n = btnArray.indexOf(e.currentTarget)
      console.log('edit');
      if (btn.value == 'edit') {
        btn.value = 'save';
        get_event.edit_execute(n);

      } else if (btn.value !== 'edit') {
        btn.value = 'edit';
        get_event.save_execute(n);
      }
    })
  })

  delete_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log('delete');
      event.save_execute();
    })
  })
})



//querySelectAll을 이용한 forEach : https://developer.mozilla.org/ko/docs/Web/API/Document/querySelectorAll