if (!localStorage.getItem('goods')) {
  localStorage.setItem('goods', JSON.stringify([]))
}
document
  .querySelector('button.add_new')
  .addEventListener('click', function (e) {
    let name = document.getElementById('good_name').value
    let price = document.getElementById('good_price').value
    let count = document.getElementById('good_count').value
    if (name && price && count) {
      document.getElementById('good_name').value = ''
      document.getElementById('good_price').value = ''
      document.getElementById('good_count').value = '1'
      let goods = JSON.parse(localStorage.getItem('goods'))
    }
  })
