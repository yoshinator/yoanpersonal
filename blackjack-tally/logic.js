
$("#message").hide();
var deck = [];
var numberToGuess = 0;
var yourTally = 0;
var gameCards = [];
var losses = 0;
var wins = 0;


// creates a deck of cards out of values and suits in the form {value: 10, name: 10H, imgUrl: asset/img/10.jpg}
function createDeck(values, suits){
    var values =["2","3","4","5","6","7","8","9","10","A","J","Q","K"]
    var suits = ["C","D","H","S"]
    for (let i = 0; i < values.length; i++){
        for(let j = 0; j < suits.length; j++ ){
            let card = {
                value: "",
                name: "",
                imgUrl: ""
            };
            if (/[AJQK]/g.test(values[i])){
                card.value = 10;
            }else{
                card.value = parseInt(values[i])
            }
            card.name = values[i] + suits[j];
            card.imgUrl = `assets/card-images/${card.name}.jpg`
            deck.push(card)
         }
    }
}

function getRandomCard(deck){
    return deck[Math.floor(Math.random() * 52) + 1];
}

// only 4 cards in gameCards array values must not match
function populateGameCards(gameCards){
    gameCards[0] = getRandomCard(deck)
    while (gameCards.length < 4){
        let card = getRandomCard(deck)
        for (gameCard of gameCards){
            if (gameCard.value === card.value){
                card = getRandomCard(deck) 
            }
        }
        gameCards.push(card)
    }

}


function init(){
    numberToGuess = Math.floor(Math.random() * 19)+19;
    gameCards = []
    populateGameCards(gameCards);
    $("#your-tally").html((yourTally = 0));
    $("#random-card").html(numberToGuess)
    addListeners()
    $(".my-card").html("<div class='w-100 card__face card__face--front' ></div><div class='w-100 card__face card__face--back' ></div>").removeClass("is-flipped")
}

createDeck();
init();

setTimeout(function(){
    $("#myModal").modal("toggle");
},1000)


function addListeners(){
  $(".my-card").on("click", function(e){
    


    switch (this.id) {
      
        case "card-1":
            yourTally += gameCards[0].value

            
           
           $("#card-1").html(
             `<div class="w-100 card__face card__face--front"></div><div class="w-100 card__face card__face--back" style="background-image: url(${
               gameCards[0].imgUrl
             })"></div>`
           );
         
            $(".my-card").removeClass("is-flipped");
            $("#card-1").attr("class",'my-card is-flipped')

            // $("#card-1").toggleClass('is-flipped')

        break;
      
        case "card-2":
            yourTally += gameCards[1].value;

            $("#card-2").html(
            `<div class="w-100 card__face card__face--front"></div><div class="w-100 card__face card__face--back" style="background-image: url(${
                gameCards[1].imgUrl
            })"></div>`
            );

            $(".my-card").removeClass(
                "is-flipped"
            );
            $("#card-2").attr(
                "class",
                "my-card is-flipped"
            );
            break;
        
        case "card-3":
            yourTally += gameCards[2].value;

            $("#card-3").html(
            `<div class="w-100 card__face card__face--front"></div><div class="w-100 card__face card__face--back" style="background-image: url(${
                gameCards[2].imgUrl
            })"></div>`
            );

            $(".my-card").removeClass("is-flipped");
            $("#card-3").attr(
                "class",
                "my-card is-flipped"
            );
            break;
        
        case "card-4":
            yourTally += gameCards[3].value;

            $("#card-4").html(
            `<div class="w-100 card__face card__face--front"></div><div class="w-100 card__face card__face--back" style="background-image: url(${
                gameCards[3].imgUrl
            })"></div>`
            );

            $(".my-card").removeClass("is-flipped");
            $("#card-4").attr("class", "my-card is-flipped");
            break;

      default:
        return null;
    }

    play()
  })
}



function removeListeners(){
    $(".my-card").off("click")
}


function play() {
  if (yourTally > numberToGuess) {
    losses += 1;
    $("#message h5:first-child").html("Sorry You lost");
    $("#message").show();
    removeListeners();
  } else if (yourTally === numberToGuess) {
    wins += 1;
    $("#message h5:first-child").html("You won!");
    $("#message").show();
    removeListeners();
  }

  $("#losses").html(losses);
  $("#wins").html(wins);
  $("#your-tally").html(yourTally)
}

$("#play-again").click(function() {
  init();
  $("#message").hide();
});