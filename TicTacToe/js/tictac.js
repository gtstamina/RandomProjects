$(document).ready(function() {

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    $("#myCanvas").on('click', function(e) {
        moves = moves + 1;
        var pos = getMousePos(this, e);
        x2 = pos.x;
        y2 = pos.y;
        movehappened(x2, y2);

    });
    
    $("#restart").on('click', function(e) {
      location.reload();
    });

    function movehappened(x, y) {

        var row = parseInt(x / 150);
        var col = parseInt(y / 150);
        var index = 3 * row + col;
        var moveX = (150 * row) + 25;
        var moveY = (150 * col) + 25;

        if (moveOf == 1) {
            drawCross(moveX, moveY);
            stateArr[index] = 1;
        } else {
            drawCircle(moveX, moveY);
            stateArr[index] = 4;
        }
        checkForLine(moveOf);
        moveOf = moveOf == 1 ? 4 : 1;


    }

   function checkForLine(lastMove) {

    var sum = lastMove == 1 ? 3 : 12;
    if (moves > 4) {
        if ((stateArr[0] + stateArr[4] + stateArr[8]) == sum)
            endGame(lastMove);
        else if ((stateArr[2] + stateArr[4] + stateArr[6]) == sum)
          endGame(lastMove);
        else if ((stateArr[0] + stateArr[3] + stateArr[6]) == sum)
            endGame(lastMove);
        else if ((stateArr[0] + stateArr[1] + stateArr[2]) == sum)
           endGame(lastMove);
         else if ((stateArr[2] + stateArr[5] + stateArr[8]) == sum)
           endGame(lastMove);
         else if ((stateArr[1] + stateArr[4] + stateArr[7]) == sum)
           endGame(lastMove);
         else if ((stateArr[3] + stateArr[4] + stateArr[5]) == sum)
           endGame(lastMove);
         else if ((stateArr[6] + stateArr[7] + stateArr[8]) == sum)
           endGame(lastMove);
    }


}
    
    

    function endGame(lastMove){
        
        if(lastMove == 1)
            alert("player1 won cross");
        else
              alert("player2 won circle");
        
        
    }
    function drawCross(x, y) {

        ctx.moveTo(x, y);
        ctx.lineTo(x + 100, y + 100);
        ctx.stroke();
        ctx.moveTo(x + 100, y);
        ctx.lineTo(x, y + 100);
        ctx.stroke();
    }

    function drawCircle(x, y) {


        ctx.beginPath();
        ctx.arc(x + 50, y + 50, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 450);
    ctx.stroke();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 450);
    ctx.stroke();
    ctx.moveTo(0, 150);
    ctx.lineTo(450, 150);
    ctx.stroke();
    ctx.moveTo(0, 300);
    ctx.lineTo(450, 300);
    ctx.stroke();

    var moves = 0;
    var moveOf = 1;
    var stateArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //0 empty 1 cross 4 zero




});