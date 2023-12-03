// let await_time = () => setTimeout(() => { console.log("check!") }, 2000);

export function fetch_method(url) {
  // let res, data, error
  //---------------------------------- fetch area
  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log('res : ', res)
      return res;
    })
    .then(data => {
      console.log('data : ', data)
    })
    .catch(error => {
      console.error('Fetch error : ', error)
    })
  // await_time
  //---------------------------------- check contact
  console.log('contact')
}