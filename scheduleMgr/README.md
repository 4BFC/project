# Schedule Manager project
## 수정되어야 할 것
-  날짜 조건문으로 날짜 형식으로 등록 할 수 있게  하기
-  내가 등록한 일정 목록을 어떻게 보여줄지 고민 할 것 수정 방식을 한번에 할 수 있는 방법을 고민
- 일정 목록 페이지를 ajax로 다른 친구들 목록을 볼 수 SPA 방식으로 구성하기
- 일정 생성 페이지를 table 태그를 통해서 작성하기
- NodeList를 사용해서 querySelectAll로 지정된 값들을 불러서 해당 배열의 값들을 각기 다르게 반응하게 만들어야 한다. 

### 해결방안
- NodeList를 사용해서 querySelectAll로 지정된 값들을 불러서 해당 배열의 값들을 각기 다르게 반응하게 만들어야 한다.: 해당 NodeList의 index값을 가져오는 방법은 아래와 같다.
```
//test -> process_edit.js
let btnArray = [...btn_execute];

let n = btnArray.indexOf(event.currentTarget)
      console.log(n)
```
이와 같은 구조로 index값을 반환해서 선택된 해당 배열의 값을 출력해서 활용한다.

querySelectAll의 배열의 값을 선택하려면 forEach문을 사용하면 된다. 방법은 아래와 같다.
```
//test -> process_edit.js
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
```
- 다른 버튼을 누르면 나머지 버튼들은 편집되지 않게 해야한다.
- input type= button 태그로 설정 했던 부분을 a태그로 변경해서 id값이 주소에 전달하게 하였으나 SPA기능으로 활성화 하기위해서는 비동기로 처리해야 한다.
- CRUD를 MySQL로 연동해서 php로 구성한다.