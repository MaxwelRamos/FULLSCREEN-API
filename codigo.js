window.onload = function(){
	var element = document.getElementById('fundo');
	var fullscreen = document.getElementById('fullscreen');

	fullscreen.addEventListener('click', function(){
		element.requestFullscreen();
	});
  }