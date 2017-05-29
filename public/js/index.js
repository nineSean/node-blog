
$.ajax({
  url: '/user.action',
  method: 'get',
  success: function(data) {
    console.log('success')
    console.log(data)
  },
  error: function(error) {
    console.log(error)
  }
})
