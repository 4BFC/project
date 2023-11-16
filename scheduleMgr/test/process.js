//-------------------------------------------------- get_id_area
let btn_config = document.querySelector('#edit_btn');
let title = document.querySelector('#title');
let description = document.querySelector('#description');
//-------------------------------------------------- create_areas
let title_create = document.createElement('input'); //create
let description_create = document.createElement('input');

//-------------------------------------------------- edited value
// let title_test = "<div>test</div>";
btn_config.addEventListener('click', () => {
  //bring_the text value
  title_create.value = title.innerText; // title
  description_create.value = description.innerText; // description
  //delete -> 직접 삭제를 하는 경우 table 자체가 삭제가 되기 때문에 원하는 형식으로 생성되지 않는다.
  title.innerText = "";
  description.innerText = "";
  //append
  title.appendChild(title_create);
  description.appendChild(description_create);
  //property
  title_create.type = "text";
  description_create.type = "text";
  //btn changes value
  btn_config.value = 'save';

  console.log('check!');
})
