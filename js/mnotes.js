function storeUserScribble(id) {
  var scribble = document.getElementById('scribble').innerHTML;
  localStorage.setItem('userScribble',scribble);
}

function getUserScribble() {
  if ( localStorage.getItem('userScribble')) {
    var scribble = localStorage.getItem('userScribble');
  }
  else {
    var scribble = 'Write here!';
  }
  document.getElementById('scribble').innerHTML = scribble;
}

function clearLocal() {
  clear: localStorage.clear(); 
  return false;
}


