
let numberofguess=document.getElementById('msg1');
let actualNum=document.getElementById('msg2');
let alertmsg=document.getElementById('msg0');
let entermsg=document.getElementById('msg4');
let btn=document.getElementById('btn');

let numOfGues=0;

function val() {
  let inputNu=document.getElementById('num');
  let inputNum=inputNu.value;
  let randnumber=Math.floor(Math.random() * 10) + 1;
  if(inputNum < 1 || inputNum > 10){
    alert("Enter the value between 1 to 10");
    inputNu.value ="";
  }
  else{
    numOfGues+=1;
    alertmsg.style.color='red';
    alertmsg.textContent=`Sorry you're not guessed correctly`;
    actualNum.textContent=`Guessed number is: ${randnumber}`;
    console.log(inputNum)
    numberofguess.innerHTML =`Number of Guess is: ${numOfGues}`;

    if(inputNum == randnumber){
      btn.disabled=true;
      alertmsg.style.color='green';
      alertmsg.textContent=`yes you're winner`
      numberofguess.innerHTML =`Number of Guess is: ${numOfGues}`;
      inputNu.value ="";
     
      actualNum.textContent=`Gussed number is: ${randnumber}`;
      entermsg.textContent=`Pls Type in input to continue game`;

      inputNu.addEventListener('focus',clearCount);
      function clearCount(){
        numberofguess.innerHTML =`Number of Guess is: 0`;
        
        actualNum.textContent=`Guessed number is: None`;
        alertmsg.style.color='white';
        alertmsg.textContent=`try to find random number`;
        btn.disabled=false;
        entermsg.textContent="";
        numOfGues=0;

        

 
      }
      
    }
  }
  }
