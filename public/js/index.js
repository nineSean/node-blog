
setTimeout(
  $.ajax({
    url: '/user.action',
    method: 'get',
    success: function(arr) {
      debugger
      let liStr = JSON.parse(arr).map(function(ele){
        return '<li>' + ele + '</li>'
      }).join('')
      $('#root').html(liStr)
    },
    error: function(error) {
      console.log(error)
    }
  }), 1000)
