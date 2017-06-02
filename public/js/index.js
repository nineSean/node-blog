setTimeout(() => {
  $.ajax({
    url: '/user.action',
    method: 'get',
    success: function(arr) {
      let liStr = arr.map(function(ele) {
        return '<li>' + ele + '</li>'
      }).join('')
      $('#root').html(liStr)
    },
    error: function(error) {
      console.log(error)
    }
  })

  $.ajax({
    url: '/list.action',
    method: 'post',
    headers:{
      'content-type': 'application/json'
    },
    data: JSON.stringify(['messi','neymar']),
    success: function(arr) {
      let liStr = arr.map(function(ele) {
        return '<li>' + ele + '</li>'
      }).join('')
      $('#list').html(liStr)
    },
    error: function(error) {
      console.log(error)
    }
  })
}, 1000)
