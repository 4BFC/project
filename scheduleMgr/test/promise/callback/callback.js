class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {//어떻게 loginUser에 있는 값을 가지고 오는가
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {//함수이다 user는 매개변수이다. 즉, id값을 user매개변수가 전달 받는다.
    userStorage.getRoles(//여기서 userStorage의 user와 userWithRole은 어떤 값을 받아오는 것인가.
      user, //id 값을 전달 받은 user
      userWithRole => { //userWithRole은 name: 'ellie', role: 'admin'을 전달 받는다.
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role this is ${user}`,
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);