alert("connected");
//initiialize variables//
$(document).ready(function(){
var RandomNumber;
var Wins;
var Losses;
var TotalScore ;
var image1RanNum;
var image2RanNum;
var image3RanNum;
var iamge4RanNum;

function generateRandomNumber(min,max) {
    //Math.floor(Math.random() * (maxNumber - minNumber) + minNumber) returns a random integer number between minNumber and maxNumber both inclusive.
    //The random number shown at the start of the game should be between 19 - 120
    rand = Math.floor(Math.random() * (120 - 19) + 19 ); 
    return rand;
}



$('randumNumber').text(Random);
function startGame(){
    //pick any random number between 19 - 120
    RandomNumber=Math.floor(Math.random() * 11 + 1);
    console.log("Random Nummber is: "+RandomNumber);
    $('#ranNum').text(RandomNummber);

    //***get random number of image1***//
    image1=Math.floor(Math.random() * 11 +1);
    console.log("image 1 Redandom Number is: "+image1RanNum);

    image2=Math.floor(Math.random() * 11 + 1) ;
    console.log("image 1 Redandom Number is: "+image2RanNum);

    image3=Math.floor(Math.random() * 11 + 1);
    console.log("image 3 Redandom Number is: "+image3RanNum);

    image4=Math.floor(Math.random() * 11 + 1);
    console.log("image 4 Redandom Number is: "+image4RanNum);
   
}
    //*** keep adding and display numbers to total score when a crystal button is pressed***//
    $('#imgBtn1').click(function(){
        $('#totScore').text(image1RanNum);
        TotalScore=TotalScore+image1RanNum;
        $('#totScore').text(TotalScore);
        win_loss();
    })
    
    $('#imgBtn2').click(function(){
        $('#totScore').text(image2RanNum);
        TotalScore=TotalScore + image2RanNum;
        $('#totScore').text(TotalScore);
        win_loss();
    })
    $('#imgBtn3').click(function(){
        $('#totScore').text(image3RanNum);
        TotalScore=TotalScore + image3RanNum;
        $('#totScore').text(TotalScore);
        win_loss();
    })
    $('#imgBtn4').click(function(){
        $('#totScore').text(image4RanNum);
        TotalScore=TotalScore + image4RanNum;
        $('#totScore').text(TotalScore);
        win_loss();
            
    
    })


    //*** verify-if toltal score is equals to or more then random number.***//
    //*** verify-if toltal score is equals to or random number then player  wins and if its more the the random number then player looses.***//
    function win_loss()
    {
       if(TotalScore === RandomNumber)
       {
    
            $('#wonMsg').text("-You Won!"); 
            Wins++;
            $('#addWin').text(Wins); 
            playAgain();
            $('#totScore').text('0'); 
            setTimeout(function() {
                $('#wonMsg').text(""); 
            }, 2000);
           
            
       }
       else if(TotalScore > RandomNumber) 
       {
    
            $('#lostMsg').text("-You Lose!"); 
            Losses++;
            $('#addLost').text(Losses); 
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