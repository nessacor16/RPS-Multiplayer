// Start Game function will fade out once the button is clicked-----

var firebaseConfig = {
    apiKey: "AIzaSyDoQGI4UoT9FqfMNxe0VOvtblNCSvhe0RU",
    authDomain: "rock-paper-scissors-43acd.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-43acd.firebaseio.com",
    projectId: "rock-paper-scissors-43acd",
    storageBucket: "rock-paper-scissors-43acd.appspot.com",
    messagingSenderId: "824373026465",
    appId: "1:824373026465:web:62692419b4886ffcef9ae0"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Create a variable to reference the database
    var database = firebase.database();
    // var startButton = document.getElementById(`starting`);
    var onScreen={
        playerOneScore : 0,
        playerTwoScore : 0,
        // startButton : startButton,
    }
    database.ref("/playersScore").set(onScreen);
    console.log(onScreen);

$("#starting").on("click", function() {
        // **** Store Click Data to Firebase in a JSON property called clickCount *****
        // **** Note how we are using the Firebase .set() method ****
        // **** .ref() refers to the path you want to save your data to
        // **** Since we left .ref() blank, it will save to the root directory
       
var optionContainer = document.getElementById(`optionsContainer`);
var startButton = document.getElementById(`starting`);

    startButton.addEventListener(`click`, startGame)

function startGame() {
    startButton.classList.add(`hide`);
    pOneScore = 0, pTwoScore = 0;
    optionContainer.classList.remove(`hide`);
}

// ====================== Get inputs ===============================
playerOneScore = $(".playerOne-score");
playerTwoScore = $(".playerTwo-score");
});




console.log('document.getElementsByClassName(`choices`)',document.getElementsByClassName(`choices`))
var choice = document.getElementsByClassName(`choices`)[0];
    choice.addEventListener(`click`, () => {
        choice = document.querySelectorAll(`.choices button`)
        var pOneHand = document.querySelector(`.playerOne-hand`)
        var pTwoHand = document.querySelector(`.playerTwo-hand`)



        // Player Two Choice...
        var pTwoChoice = [`rock`, `paper`, `scissors`];

    })






// ============================= Firebase onclick fucnctions ===================================
    // On Click
    
  
        // Now! go to https://fir-click-counter-7cdb9.firebaseio.com/ to see the impact to the DB
    




// ========================================== Function for Entire Game ======================================
// ------------------------------------ Scoping everyting inside this function ------------------------------






// ================================ Create a functions with its independent role ============================
// ================================ Create a functions with its independent role ============================










// ===================================== Function for comparing players hands ================================
// ===================================== Function for comparing players hands ================================





