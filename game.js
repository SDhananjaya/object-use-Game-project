      // this is use to object 
     const score = {
         wins : 0,
         lose : 0,
         tie : 0
      }
     
 function playGame(playerMove){

    const computerMove = pickcomputerMove();

       result = '';

       if (playerMove === 'scissors'){
          if(computerMove === 'rock'){
             result = 'you lose'
          }else if(computerMove === 'paper'){
             result ='you win'
          }else if(computerMove === 'scissors'){
             result ='tie'
          }
       }else if(playerMove === 'paper'){
          if(computerMove === 'rock'){
             result = 'win'
          }else if(computerMove === 'paper'){
             result ='tie'
          }else if(computerMove === 'scissors'){
             result ='you lose'
          }
       }else if(playerMove === 'rock'){
          if(computerMove === 'rock'){
             result = 'tie'
          }else if(computerMove === 'paper'){
             result ='you lose'
          }else if(computerMove === 'scissors'){
             result ='you win'
          }
       }
      // this is use to object   
       if(result === 'you win'){
         score.wins = score.wins+1;
      }else if(result === 'tie'){
         score.tie = score.tie+1;
      }else if(result === 'you lose'){
         score.lose = score.lose+1;
      }

         alert(`you picked ${playerMove} computer picked ${computerMove} ${result}
wins.${score.wins}, loses.${score.lose}, tie.${score.tie}`)
   }           
     

      function pickcomputerMove(){
       let computerMove ='';
       const randomNumber = Math.random();
   if(randomNumber >0 && randomNumber < 1/3){
   computerMove = 'rock';
   }else if(randomNumber > 1/3 && randomNumber < 2/3){
   computerMove = 'paper';
   }else if (randomNumber > 2/3 && randomNumber <1 ){
   computerMove = 'scissors';
   }
   return computerMove;
      }
     