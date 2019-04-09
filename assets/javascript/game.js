//alert("connected");//
//initiialize variables//

var randomNumber;
var Wins;
var Losses;
var TotalScore=0 ;
var image1RanNum;
var image2RanNum;
var image3RanNum;
var iamge4RanNum;
$(document).ready(function(){
    console.log(Math.random());
function generateRandomNumber(min,max) {
    //Math.floor(Math.random() * (maxNumber - minNumber) + minNumber) returns a random integer number between minNumber and maxNumber both inclusive.
    //The random number shown at the start of the game should be between 19 - 120
    var rand = Math.floor(Math.random() * (100 - 19)  )+ 19; 
    return rand;
}


  startGame(); 
function startGame(){
    randomNumber = generateRandomNumber();

    console.log(randomNumber);
    $('#random').text(randomNumber);



    //pick any random number between 19 - 120
    // RandomNumber=Math.floor(Math.random() * 11 + 1);
    // console.log("Random Nummber is: "+RandomNumber);
    // $('#ranNum').text(RandomNummber);

    //***get random number of image1***//
    image1RanNum=Math.floor(Math.random() * 11 +1);
    console.log("image 1 Random Number is: "+image1RanNum);

    image2RanNum=Math.floor(Math.random() * 11 + 1) ;
    console.log("image 2 Random Number is: "+image2RanNum);

    image3RanNum=Math.floor(Math.random() * 11 + 1);
    console.log("image 3 Random Number is: "+image3RanNum);

    image4RanNum=Math.floor(Math.random() * 11 + 1);
    console.log("image 4 Random Number is: "+image4RanNum);
   
}
    //*** keep adding and display numbers to total score when a crystal button is pressed***//
    $('#imgBtn1').click(function(){
        $('#total-score').text(image1RanNum);
        TotalScore=TotalScore+image1RanNum;
        $('#total-score').text(TotalScore);
        win_loss();
        
    })
    
    $('#imgBtn2').click(function(){
        $('#total-score').text(image2RanNum);
        TotalScore=TotalScore + image2RanNum;
        $('#total-score').text(TotalScore);
        win_loss();
    })
    $('#imgBtn3').click(function(){
        $('#total-score').text(image3RanNum);
        TotalScore=TotalScore + image3RanNum;
        $('#total-score').text(TotalScore);
        win_loss();
    })
    $('#imgBtn4').click(function(){
        $('#total-score').text(image4RanNum);
        TotalScore=TotalScore + image4RanNum;
        $('#total-score').text(TotalScore);
        win_loss();
            
    
    })


    //*** verify-if toltal score is equals to or more then random number.***//
    //*** verify-if toltal score is equals to or random number then player  wins and if its more the the random number then player looses.***//
    function win_loss()
    {
       if(TotalScore === randomNumber)
       {
    
            $('#win').text("-You Won!"); 
            Wins++;
            $('#addWin').text(Wins); 
            playAgain();
            $('#totScore').text('0'); 
            setTimeout(function() {
                $('#wonMsg').text(""); 
            }, 2000);
           
            
       }
       else if(TotalScore > randomNumber) 
       {
    
            $('#lose').text("-You Lose!"); 
            Losses++;
            $('#addLose').text(Losses); 
            playAgain();
            $('#totScore').text('0'); 
            setTimeout(function() {
                $('#lostMsg').text(""); 
            }, 2000);
            
           
       } 
       else
       {
            console.log("Keep playing. Total score is still less then the random number.");
       }
    }

    function playAgain(){
        //***Set the variables to default and pick the random number again.***//
        RandomNumber=[];
        
        // Wins=0;
        // Losses=0;
        TotalScore=0;
        image1RanNum;
        image2RanNum;
        image3RanNum;
        image4RanNum;
        
    
        startGame();

    }

});