"use strick";
window.addEventListener("load",load);

function load() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var fps =     0;
	var imageObj = new Image();
    imageObj.src = 'http://cd1.dibujos.net/dibujos/pintados/2011008/9b6956528621eb4ad9be29f3eeb98610.png';

      
    

    var player = new Player({ contexto: ctx , image: imageObj});
    player.listenKeyBoardEvent();

    (function tick() {
        drawWorld();
        setTimeout( function() { tick(); }  , 1000/fps);
    })();

    function drawWorld() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.tick();
        player.draw();      
    }

}
