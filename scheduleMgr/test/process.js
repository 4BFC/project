//-------------------------------------------------- get_id_area
let btn_execute = document.querySelector('#edit_btn');
let title = document.querySelector('#title');
let description = document.querySelector('#description');
//-------------------------------------------------- create_areas
let title_create = document.createElement('input'); //create
let description_create = document.createElement('input');
//여기서 다시 해당 #title 태그의 
let change_btn = true;

//-------------------------------------------------- edited value

//when value is save
// let save_execute = btn_execute.addEventListener('click', () => {
//   //get text value from input
//   title.innerText = title_create.value;
//   console.log(title_create.value);
//   description.innerText = description_create.value;

// })

//when value is edit
let edit_execute = btn_execute.addEventListener('click', () => {
  //bring_the text value
  title_create.value = title.innerText; // title
  description_create.value = description.innerText; // description
  //delete -> 직접 삭제를 하는 경우 table 자체가 삭제가 되기 때문에 원하는 형식으로 생성되지 않는다.
  title.innerText = "";
  description.innerText = "";

  console.log(title_create.value) //여기서는 확인이 된다..

  //append
  title.appendChild(title_create);
  description.appendChild(description_create);
  //property
  title_create.type = "text";
  description_create.type = "text";
  title_create.id = "input_title"
  description_create.id = "input_description";

  //Q.의문점 왜 해당 버튼안에서 버튼이 다시 중첩으로 들어가서 동작 실행이 되어야하며 따로 분리해서 발동하게는 할 수 없는 것인가?
  //import로 refactoring
  btn_execute.addEventListener('click', () => {
    //get text value from input
    console.log("??")
    title.innerText = title_create.value;
    console.log("확인 : ", title_create.value);
    description.innerText = description_create.value;

  })

  //Q.if 문을 중심으로 해당 버튼이 실행되고 안되고의 판별을 할 수 있는 구성으로 refactoring해야 좋지 않을까?
  //1.if문이 클릭을 했을 때 반응해야하기 때문에 if문이 현재 위치에 존재하는 것이다.
  //btn changes value
  if (change_btn) {
    //when value is edit
    change_btn = false;
    btn_execute.value = 'save';
    edit_execute; //import로 refactoring
  } else if (change_btn != true) {
    //when value is save
    change_btn = true;
    btn_execute.value = 'edit';
  }

  // if (btn_execute.value == 'edit') {
  //   btn_execute.value = 'save';
  // } else if (btn_execute.value != 'edit') {
  //   btn_execute.value = 'edit';
  // }


  console.log('check!');
})
