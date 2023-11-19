let All_btn = document.querySelectorAll('#btn');

let btnArray = [...All_btn];
console.log(btnArray)
All_btn.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    let btnIndex = btnArray.indexOf(event.currentTarget);
    console.log(typeof (btnIndex));
  })
})