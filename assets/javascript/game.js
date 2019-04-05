alert("connected");
    var yourScore = document.getElementById('yourScore');
    //var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));

    var targetScore = document.getElementById('targetScore');
    targetScore.innerHTML = getRandomValue(10, 4);
    
    function addToScore(val) {
      var numberToAdd = parseInt(val);
      var currentScore = parseInt(yourScore.innerHTML);
      yourScore.innerHTML = numberToAdd + currentScore;
    }
    
    var image1 = document.getElementById("image1");
    //red.setAttribute("value", "5");
    console.log(image1.value);
    
    var image2 = document.getElementById("image2");
    //console.log(blue.value);
    
    var image3= document.getElementById("image3");
    //console.log(yellow.value);
    
    var image4 = document.getElementById("image4");
    //console.log(green.value);
    
    // add an event listener to elements
    image1.addEventListener('click', function() {
      //this refers to red
      addToScore(this.value);
      checkPlayerScore();
    });
    
    //parseInt(42.01) => 42
    //alert(parseInt('james')); // NaN (not a number)
    // Cafe Del Mar ChillWave 2 :)
    // .innerHTML returns a string, NaN
    
    image2.addEventListener('click', function() {
      // this refers to blue
      addToScore(this.value);
      checkPlayerScore();
    });
    
   image3.addEventListener('click', function() {
      // this refers to blue
      addToScore(this.value);
      checkPlayerScore();
    });
    
    image4.addEventListener('click', function() {
      // this refers to blue
      addToScore(this.value);
      checkPlayerScore();
    });
    //var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);
    
    // console.log (sum);
    function getRandomValue (a, b){
      return Math.floor((Math.random() * a) + b);
    }
    
    function checkPlayerScore() {
      //yourScore, targetScore (parseFloat() is for decimals)
      var playerInt = parseInt(yourScore.innerHTML);
      var targetInt = parseInt(targetScore.innerHTML);
      if (playerInt === targetInt) {
          alert('You win!');
      } else if (playerInt > targetInt) {
        alert('You lose!');
      } 
    }
    
    console.log(getRandomValue(10, 4));