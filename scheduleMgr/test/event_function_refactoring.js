let btn_execute = document.querySelector('#edit_btn');
let title = document.querySelector('#title'); //td : title
let description = document.querySelector('#description'); //td : description

let title_text = title.innerText;
let description_text = description.innerText;

//-------------------------------------------------- create_areas
let title_create = document.createElement('input'); //create input
let description_create = document.createElement('input');//find id from input tag

//-------------------------------------------------- edited value
//삭제하는 함수 구현 => 여기서 비동기 처리를 해야하는 것인가?
//그렇지 않다 여기서 문제는 버튼에서 버튼을 중첩적으로 사용했다는 것이다. 함수구현으로 export import하는 것은 좋으나 이것들이 button의 event처리로 진행되면 문제가 생긴다.
//f: when value is save
export let save_execute = btn_execute.addEventListener('click', () => {
  let title_create_id = document.querySelector('#input_title');
  //delete
  if (title_create_id) {
    console.log(`find => ${title_create_id}`);
    if (title_create_id.remove()) {
      console.log("remove");
    } else {
      console.log("error");
    }
  }
  // title_create_id.remove();
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

//https://sangminem.tistory.com/284