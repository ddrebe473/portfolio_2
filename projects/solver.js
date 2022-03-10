function myButton() {
  var x
  var y
  x= prompt("Input a number")
  y= prompt("Input its power")
  alert(Math.pow(x,y));
}
function myButton2(){
  var x
  x= prompt("Input a number")
  alert(Math.sqrt(x))
}
function myButton3(){
  let num = Math.floor(Math.random() * 6)
  if(num == 0){
    alert('Odds seem likely')
  } if(num == 1){
    alert('Yes')
  }
  if(num == 2){
    alert('No')
  }if(num == 3){
    alert('Ask again')
  }
  if(num == 4){
    alert('Odds does not seem likey')
  }  if(num == 5){
    alert('Maybe')
  }
}