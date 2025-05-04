var flag = true;
var c = 'O',p = 'X';

function boardStatus()
{
  var board = "";
  if($(".tl").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".tl").text();
  }

  if($(".tm").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".tm").text();
  }

  if($(".tr").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".tr").text();
  }

  if($(".ml").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".ml").text();
  }

  if($(".mm").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".mm").text();
  }

  if($(".mr").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".mr").text();
  }

  if($(".bl").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".bl").text();
  }

  if($(".bm").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".bm").text();
  }

  if($(".br").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".br").text();
  }

  return board;
}

function winOrLose(board)
{
  if(board.charAt(0) !== "-" && board.charAt(0) === board.charAt(1) && board.charAt(0) === board.charAt(2))
  {
    return board.charAt(0);
  }
  else if(board.charAt(3) !== "-" && board.charAt(3) === board.charAt(4) && board.charAt(3) === board.charAt(5))
  {
    return board.charAt(3);
  }
  else if(board.charAt(6) !== "-" && board.charAt(6) === board.charAt(7) && board.charAt(6) === board.charAt(8))
  {
    return board.charAt(6);
  }
  else if(board.charAt(0) !== "-" && board.charAt(0) === board.charAt(3) && board.charAt(0) === board.charAt(6))
  {
    return board.charAt(0);
  }
  else if(board.charAt(1) !== "-" && board.charAt(1) === board.charAt(4) && board.charAt(1) === board.charAt(7))
  {
    return board.charAt(1);
  }
  else if(board.charAt(2) !== "-" && board.charAt(2) === board.charAt(5) && board.charAt(2) === board.charAt(8))
  {
    return board.charAt(2);
  }
  else if(board.charAt(0) !== "-" && board.charAt(0) === board.charAt(4) && board.charAt(0) === board.charAt(8))
  {
    return board.charAt(0);
  }
  else if(board.charAt(2) !== "-" && board.charAt(2) === board.charAt(4) && board.charAt(2) === board.charAt(6))
  {
    return board.charAt(2);
  }
  else if(board.charAt(0) !== '-' && board.charAt(1) !== '-' && board.charAt(2) !== '-' && board.charAt(3) !== '-' && board.charAt(4) !== '-' && board.charAt(5) !== '-' && board.charAt(6) !== '-' && board.charAt(7) !== '-' && board.charAt(8) !== '-')
  {
    return "XO";
  }

  return "-";

}

function minMax(board,turn)
{
  var v = winOrLose(board);
  if(v === p)
  {
    return turn-10;
  }
  else if(v === c)
  {
    return 10-turn;
  }
  else if(v === "XO")
  {
    return 0;
  }
  else
  {
    var mi = Infinity,ma = -Infinity,ind = -1;
    for(var i=0;i<board.length;i++)
    {
      if(board.charAt(i) === "-")
      {
        if(turn%2 === 0)
        {
          var b = board.slice(0,i)+c+board.slice(i+1,board.length);
          var s = minMax(b,turn+1);

          if(s < mi)
          {
            mi = s;
          }

          if(s > ma)
          {
            ma = s;
            ind = i;
          }
        }
        else
        {
          var b = board.slice(0,i)+p+board.slice(i+1,board.length);
          var s = minMax(b,turn+1);

          if(s < mi)
          {
            mi = s;
          }

          if(s > ma)
          {
            ma = s;
          }
        }
      }
    }

    if(turn%2 === 0)
    {
      if(turn == 0)
      {
        return ind;
      }
      return ma;
    }
    else
    {
      return mi;
    }
  }
}

function nextMove()
{
  var v = winOrLose(boardStatus());
  if(v === "X")
  {
    const aud = new Audio("SOUNDS/end.wav");
    aud.play();

    $("p").text("X WINS");
    flag = false;
  }
  else if(v === "O")
  {
    const aud = new Audio("SOUNDS/end.wav");
    aud.play();

    $("p").text("O WINS");
    flag = false;
  }
  else if(v === "XO")
  {
    const aud = new Audio("SOUNDS/end.wav");
    aud.play();

    $("p").text("DRAW");
    flag = false;
  }
  else
  {
    var ind = minMax(boardStatus(),0);

    if(ind === 0)
    {
      $(".tl").text(c);
    }
    else if(ind === 1)
    {
      $(".tm").text(c);
    }
    else if(ind === 2)
    {
      $(".tr").text(c);
    }
    else if(ind === 3)
    {
      $(".ml").text(c);
    }
    else if(ind === 4)
    {
      $(".mm").text(c);
    }
    else if(ind === 5)
    {
      $(".mr").text(c);
    }
    else if(ind === 6)
    {
      $(".bl").text(c);
    }
    else if(ind === 7)
    {
      $(".bm").text(c);
    }
    else if(ind === 8)
    {
      $(".br").text(c);
    }

    v = winOrLose(boardStatus());
    if(v === "X")
    {
      const aud = new Audio("SOUNDS/end.wav");
      aud.play();

      $("p").text("X WINS");
      flag = false;
    }
    else if(v === "O")
    {
      const aud = new Audio("SOUNDS/end.wav");
      aud.play();

      $("p").text("O WINS");
      flag = false;
    }
    else if(v === "XO")
    {
      const aud = new Audio("SOUNDS/end.wav");
      aud.play();
      
      $("p").text("DRAW");
      flag = false;
    }
  }
}

function resetBoard()
{
  flag = true;
  $("p").text("");
  $(".col").text("");

  if(c === 'X' && p === 'O')
  {
    nextMove();
  }
}

$(".tl").click(function(){
  if(flag === false)
  {
    location.href="index.html";
  }
  else if($(".tl").text() === "" )
  {
    const aud = new Audio("SOUNDS/move.mp3");
    aud.play();
    $(".tl").text(p);
    nextMove();
  }
});

$(".tm").click(function(){
  if(flag === false)
  {
    location.href="index.html";
  }
  else if($(".tm").text() === "")
  {
    const aud = new Audio("SOUNDS/move.mp3");
    aud.play();
    $(".tm").text(p);
    nextMove();
  }
});

$(".tr").click(function(){
  if(flag === false)
  {
    location.href="index.html";
  }
  else if($(".tr").text() === "")
  {
    const aud = new Audio("SOUNDS/move.mp3");
    aud.play();
    $(".tr").text(p);
    nextMove();
  }
});

$(".ml").click(function(){
  if(flag === false)
  {
    location.href="index.html";
  }
  else if($(".ml").text() === "")
  {
    const aud = new Audio("SOUNDS/move.mp3");
    aud.play();
    $(".ml").text(p);
    nextMove();
  }
});

$(".mm").click(function(){
  if(flag === false)
  {
    location.href="index.html";
  }
  else if($(".mm").text() === "")
  {
    const aud = new Audio("SOUNDS/move.mp3");
    aud.play();
    $(".mm").text(p);
    nextMove();
  }
});

$(".mr").click(function(){
  if(flag === false)
  {
    location.href="index.html";
  }
  else if($(".mr").text() === "")
  {
    const aud = new Audio("SOUNDS/move.mp3");
    aud.play();
    $(".mr").text(p);
    nextMove();
  }
});

$(".bl").click(function(){
  if(flag === false)
  {
    location.href="index.html";
  }
  else if($(".bl").text() === "")
  {
    const aud = new Audio("SOUNDS/move.mp3");
    aud.play();
    $(".bl").text(p);
    nextMove();
  }
});

$(".bm").click(function(){
  if(flag === false)
  {
    location.href="index.html";
  }
  else if($(".bm").text() === "")
  {
    const aud = new Audio("SOUNDS/move.mp3");
    aud.play();
    $(".bm").text(p);
    nextMove();
  }
});

$(".br").click(function(){
  if(flag === false)
  {
    location.href="index.html";
  }
  else if($(".br").text() === "")
  {
    const aud = new Audio("SOUNDS/move.mp3");
    aud.play();
    $(".br").text(p);
    nextMove();
  }
});

$("h4").click(function(){
  location.href="index.html";
});

$("h5").click(function(){
  const aud = new Audio("SOUNDS/option.mp3");
  aud.play();
  resetBoard();
});

$("#o1").click(function(){
  const aud = new Audio("SOUNDS/option.mp3");
  aud.play();
  $("#c1").prop("checked",true);
  $("#c2").prop("checked",false);
  p = 'X';
  c = 'O';
  $("h2").css("display","none");
  $("table").css("display","none");
  $("#message").css("display","block");
  $("#board").css("display","block");
  $("h5").css("display","block");
});

$("#o2").click(function(){
  const aud = new Audio("SOUNDS/option.mp3");
  aud.play();
  $("#c1").prop("checked",false);
  $("#c2").prop("checked",true);
  p = 'O';
  c = 'X';
  $("h2").css("display","none");
  $("table").css("display","none");
  $("#message").css("display","block");
  $("#board").css("display","block");
  $("h5").css("display","block");
  nextMove();
});

$("#b1").click(function(){
  const aud = new Audio("SOUNDS/option.mp3");
  aud.play();
  $("#b1").css("display","none");
  $("#b2").css("display","none");
  $("h2").css("display","block");
  $("table").css("display","inline-block");
});

$("#b2").click(function(){
  const aud = new Audio("SOUNDS/option.mp3");
  aud.play();
  $("#b1").css("display","none");
  $("#b2").css("display","none");
  $("ul").css("display","block");
  $("h4").css("display","block");
});
