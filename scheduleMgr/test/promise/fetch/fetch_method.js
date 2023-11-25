export function fetch_method(url) {
  // let res, data, error
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
}