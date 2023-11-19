let btn_execute = document.querySelector('#edit_btn');
let title = document.querySelector('#title');
let description = document.querySelector('#description');
console.log(title.innerText)

let title_text = title.innerText;
let description_text = description.innerText;

let title_create_value = '';
let description_create_value = '';
//-------------------------------------------------- create_areas
let title_create = document.createElement('input'); //create
let description_create = document.createElement('input');

//-------------------------------------------------- edited value

//삭제하는 함수 구현 => 여기서 비동기 처리를 해야하는 것인가?
//그렇지 않다 여기서 문제는 버튼에서 버튼을 중첩적으로 사용했다는 것이다. 함수구현으로 export import하는 것은 좋으나 이것들이 button의 event처리로 진행되면 문제가 생긴다.


//f: when value is save
export let save_execute = btn_execute.addEventListener('click', () => {
  let title_create_id = document.querySelector('#input_title');
  // change_btn = true;
  //get text value from input
  //Q.왜 변경된 input이 적용되지 않는가.
  // console.log(title_create.value);
  title_create_value = title_create.value;
  description_create_value = description_create.value;
  // console.log(title_create.value);
  title.innerText = title_create_value;
  console.log(title.innerText);
  // console.log("확인 : ", title_create.value);
  description.innerText = description_create_value;
  console.log(title_create_id);
  if (title_create_id) {
    title_create_id.type = 'hidden';
    console.log(title_create_id);
  }

})

//f: when value is edit
export let edit_execute = btn_execute.addEventListener('click', () => {// 
  console.log("check!");
  // change_btn = false;
  //bring_the text value
  title_create.value = title_text; // title
  description_create.value = description_text; // description
  //delete -> 직접 삭제를 하는 경우 table 자체가 삭제가 되기 때문에 원하는 형식으로 생성되지 않는다.
  title.innerText = "";
  description.innerText = "";

  //append
  title.appendChild(title_create);
  description.appendChild(description_create);

  //property
  title_create.type = "text";
  description_create.type = "text";
  title_create.id = "input_title"
  description_create.id = "input_description";

})

