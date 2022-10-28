
var turn = "X";

  var count = 0;


function myFunction1() {
    document.getElementById("11").innerHTML = turn;
    CheckWin();
  }
function myFunction2() {
    document.getElementById("12").innerHTML = turn;
    CheckWin();
}
function myFunction3() {
    document.getElementById("13").innerHTML = turn;
    CheckWin();
  }
function myFunction4() {
    document.getElementById("21").innerHTML = turn;
    CheckWin();
  }
function myFunction5() {
    document.getElementById("22").innerHTML = turn;
    CheckWin();
  }
function myFunction6() {
    document.getElementById("23").innerHTML = turn;
    CheckWin();
  }
function myFunction7() {
    document.getElementById("31").innerHTML = turn;
    CheckWin();
  }
function myFunction8() {
    document.getElementById("32").innerHTML = turn;
    CheckWin();
  }
function myFunction9() {
    document.getElementById("33").innerHTML = turn;
    CheckWin();
  }


  function CheckWin(){
    count+=1;
    if(document.getElementById("11").innerHTML===document.getElementById("12").innerHTML&&document.getElementById("12").innerHTML===document.getElementById("13").innerHTML){
        document.getElementById("text").innerHTML= "Player "+turn+" Won!!";
    }
    else if(document.getElementById("21").innerHTML===document.getElementById("22").innerHTML&&document.getElementById("22").innerHTML===document.getElementById("23").innerHTML){
        document.getElementById("text").innerHTML= "Player "+turn+" Won!!";
    }
    else if(document.getElementById("31").innerHTML===document.getElementById("32").innerHTML&&document.getElementById("32").innerHTML===document.getElementById("33").innerHTML){
        document.getElementById("text").innerHTML= "Player "+turn+" Won!!";
    }
    else if(document.getElementById("11").innerHTML===document.getElementById("21").innerHTML&&document.getElementById("21").innerHTML===document.getElementById("31").innerHTML){
        document.getElementById("text").innerHTML= "Player "+turn+" Won!!";
    }
    else if(document.getElementById("12").innerHTML===document.getElementById("22").innerHTML&&document.getElementById("22").innerHTML===document.getElementById("32").innerHTML){
        document.getElementById("text").innerHTML= "Player "+turn+" Won!!";
    }
    else if(document.getElementById("13").innerHTML===document.getElementById("23").innerHTML&&document.getElementById("23").innerHTML===document.getElementById("33").innerHTML){
        document.getElementById("text").innerHTML= "Player "+turn+" Won!!";
    }
    else if(document.getElementById("11").innerHTML===document.getElementById("22").innerHTML&&document.getElementById("22").innerHTML===document.getElementById("33").innerHTML){
        document.getElementById("text").innerHTML= "Player "+turn+" Won!!";
    }
    else if(document.getElementById("13").innerHTML===document.getElementById("22").innerHTML&&document.getElementById("22").innerHTML===document.getElementById("31").innerHTML){
        document.getElementById("text").innerHTML= "Player "+turn+" Won!!";
    }
    else if(count===9){
        document.getElementById("text").innerHTML= "Draw!!";
    }
    else{
        if (turn === "X"){
            turn = "O";
        }else{
            turn = "X";
        }
        document.getElementById("text").innerHTML= "Its "+turn+" Turn!";
    }
}
