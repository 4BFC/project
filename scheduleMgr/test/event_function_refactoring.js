import * as get_id from "./variable.js";
//-------------------------------------------------- edited value

//f: when value is edit
export let edit_execute = (n) => {
  console.log("check!");

  // get_id.change_btn(false);

  // bring_the text value
  get_id.title_create.value = get_id.title[n].innerText; // title
  get_id.description_create.value = get_id.description[n].innerText; // description

  //delete -> 직접 삭제를 하는 경우 table 자체가 삭제가 되기 때문에 원하는 형식으로 생성되지 않는다.
  get_id.title[n].innerText = "";
  get_id.description[n].innerText = "";

  //append
  get_id.title[n].appendChild(get_id.title_create);
  get_id.description[n].appendChild(get_id.description_create);

  //property
  get_id.title_create.type = "text";
  get_id.description_create.type = "text";
  get_id.title_create.id = "input_title"
  get_id.description_create.id = "input_description";

}

//f: when value is save
export let save_execute = (n) => {

  // get_id.change_btn(true);
  let title_create_id = document.querySelector('#input_title');
  let description_create_id = document.querySelector('#input_description');

  //delete
  if (title_create_id) { title_create_id.remove(); }
  if (description_create_id) { description_create_id.remove(); }


  get_id.title[n].innerText = title_create_id.value;
  get_id.description[n].innerText = description_create_id.value;
}

//https://sangminem.tistory.com/284