window.addEventListener('load', function() {
  var ele = document.getElementById('container');
  setInterval(function() {
    ele.style.backgroundColor = ele.style.backgroundColor === 'red' ? 'green' : 'red';
  }, 500);
});
