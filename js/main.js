console.log('Donate')

document.getElementById('js-submit').addEventListener('click', function(){
  var value = document.getElementById('js-amount').value;
  alert('thank you! $' + value)
})
