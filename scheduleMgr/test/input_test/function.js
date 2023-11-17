import * as get_id from './variable.js';

//input_btn& create element
export let input_btn = get_id.input_btn.addEventListener('click', () => {
  get_id.new_input.value = get_id.input_text.innerHTML = get_id.input.value;
  get_id.new_input.id = 'new_input';
  document.body.appendChild(get_id.new_input);
})

//delete_btn
export let input_delete = get_id.input_delete.addEventListener('click', () => {
  let new_input_id = document.querySelector('#new_input');
  new_input_id.remove();
})
