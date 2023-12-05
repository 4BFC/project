const loginUser = (id, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        resolve(id)
      } else {
        reject(new Error('not found'))
      }
    }, 2000)
  })
}

const getRoles = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'ellie') {
        resolve({ name: 'ellie', role: 'admin' });
      } else {
        reject(new Error('no access'));
      }
    }, 1000)
  })
}

// const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

loginUser(id, password)
  .then(id => getRoles(id))
  .then(id => alert(
    `Hello ${id.name}, you have a ${id.role} role this is ${id}`,
  ))

// userStorage.loginUser(
//   id,
//   password,
//   user => {
//     userStorage.getRoles(
//       user,
//       userWithRole => {
//         alert(
//           `Hello ${userWithRole.name}, you have a ${userWithRole.role} role this is ${user}`,
//         );
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   },
//   error => {
//     console.log(error);
//   }
// );