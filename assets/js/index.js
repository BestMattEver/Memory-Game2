$(document).ready(function(){//open the javascript file.
  'use strict';
//this is all the possible icons. helpfully compiled by byron.
var iconChoices = ["fa-glass", "fa-music", "fa-arrow-circle-o-down", "fa-search", "fa-envelope-o", "fa-heart", "fa-star", "fa-user", "fa-film", "fa-th", "fa-search-plus", "fa-search-minus", "fa-power-off", "fa-signal", "fa-gear", "fa-trash-o", "fa-home", "fa-file-o", "fa-clock-o", "fa-volume-off", "fa-arrow-circle-o-down", "fa-play-circle-o", "fa-refresh", "fa-list-alt", "fa-lock", "fa-flag", "fa-headphones",  "fa-volume-off", "fa-qrcode", "fa-barcode", "fa-tag", "fa-book", "fa-bookmark", "fa-print", "fa-camera", "fa-font", "fa-bold", "fa-italic", "fa-text-height", "fa-text-width", "fa-align-left", "fa-align-center", "fa-align-right", "fa-align-justify", "fa-list", "fa-dedent", "fa-indent", "fa-video-camera", "fa-photo", "fa-pencil", "fa-map-marker", "fa-adjust", "fa-tint", "fa-edit", "fa-share-square-o", "fa-check-square-o", "fa-arrows", "fa-step-backward", "fa-fast-backward", "fa-backward", "fa-play", "fa-pause", "fa-stop", "fa-forward", "fa-fast-forward", "fa-step-forward", "fa-eject", "fa-chevron-left", "fa-chevron-right", "fa-plus-circle", "fa-minus-circle", "fa-times-circle", "fa-check-circle", "fa-question-circle", "fa-info-circle", "fa-crosshairs", "fa-times-circle-o", "fa-check-circle-o", "fa-ban", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrow-down", "fa-mail-forward", "fa-expand", "fa-compress", "fa-plus", "fa-minus", "fa-asterisk", "fa-exclamation-circle", "fa-gift", "fa-leaf", "fa-fire", "fa-eye", "fa-eye-slash", "fa-warning", "fa-plane", "fa-calendar", "fa-random", "fa-comment", "fa-magnet", "fa-chevron-up", "fa-chevron-down", "fa-retweet", "fa-shopping-cart", "fa-folder", "fa-folder-open", "fa-arrows-v", "fa-arrows-h", "fa-bar-chart-o", "fa-twitter-square",  "fa-facebook-square", "fa-camera-retro", "fa-key", "fa-comments", "fa-thumbs-o-up", "fa-thumbs-o-down", "fa-star-half", "fa-heart-o", "fa-sign-out", "fa-linkedin-square", "fa-thumb-tack", "fa-external-link", "fa-sign-in", "fa-trophy", "fa-github-square", "fa-upload", "fa-lemon-o", "fa-phone", "fa-square-o", "fa-bookmark-o", "fa-phone-square", "fa-twitter", "fa-facebook-f", "fa-unlock", "fa-credit-card", "fa-feed", "fa-hdd-o", "fa-bullhorn", "fa-bell", "fa-certificate", "fa-hand-o-right", "fa-hand-o-left", "fa-hand-o-up", "fa-hand-o-down", "fa-arrow-circle-left", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-circle-down", "fa-globe", "fa-wrench", "fa-tasks", "fa-filter", "fa-briefcase", "fa-arrows-alt", "fa-group", "fa-chain", "fa-cloud", "fa-flask", "fa-cut", "fa-copy", "fa-paperclip", "fa-save", "fa-square", "fa-navicon", "fa-list-ul", "fa-list-ol", "fa-strikethrough", "fa-underline", "fa-table", "fa-magic", "fa-truck", "fa-pinterest", "fa-pinterest-square", "fa-google-plus-square", "fa-money", "fa-caret-down", "fa-caret-up", "fa-caret-left", "fa-caret-right", "fa-columns", "fa-unsorted", "fa-sort-down", "fa-sort-up", "fa-legal", "fa-dashboard", "fa-flash", "fa-sitemap", "fa-umbrella", "fa-paste", "fa-lightbulb-o", "fa-exchange", "fa-cloud-download", "fa-cloud-upload", "fa-user-md", "fa-stethoscope", "fa-suitcase", "fa-bell-o", "fa-coffee", "fa-cutlery"]

var numBoxes = 0;//the number of boxes the user enters
var iconsThisGame=[];//an array of the icons in use THIS game.
var iconsThisGame2=[];
var clickedNum =0; //this is how many times we've clicked a card
var card1; //the first card we want to compare.

$("#generate").on("click", function(){//This function/listener combo generates the board
numBoxes = parseInt($("#numBoxes").val());
//console.log(numBoxes);

 if(numBoxes%2 != 0)//it the player enters an odd number, add one to it, call him a smart ass, and make the board anyway.
{
  $("#output").text("Smart ass. Enter a NUMBER. under 400.");
  numBoxes+=1;
}//end if

var idx1=0;

for(var k=0; k <= ((numBoxes/2)-1); k++)//this for loop selects a number of icons to be used THIS GAME that is half as many boxes as the user entered.
{
  idx1 = Math.floor(Math.random() * (iconChoices.length- 0 + 1)) + 0//index of random icon

  if(idx1!=0)//the reason for this if statment is described in a similar structure below.
  {
    idx1 = idx1-1;
  }

  var icon = iconChoices[idx1];//gets a random icon from the big icon array.
  if(iconsThisGame.indexOf(icon) === -1)//this if makes sure the same icon isnt put into the array twice.
  {
    //we need two of each icon, so we add it to two different arrays.
    iconsThisGame[k] = icon;// we use two arrays to keep our for loop more predictible.
    iconsThisGame2[k] = icon;//we're going to combine them into one array when we're done
  }
  else
  {
    console.log("fuck you.");//it tried to grab the same icon twice.
    k--;
  }
}//end for loop

iconsThisGame = $.merge(iconsThisGame, iconsThisGame2);//this combines the two arrays into one. this array should now hold two of every icon used in this game.

console.log("icons this game: " + iconsThisGame.length);
console.log(iconsThisGame);



for(var i = 1;i<=numBoxes;i++)//make the board.
{
  var idx = Math.floor(Math.random() * (iconsThisGame.length - 0 + 1)) + 0 //this generates a random number that is between 0 and the length of the iconsThisGame array.
  if (idx!=0)
  {
    idx =idx-1;//lets say the iconsthisgame has a length of 3, since array indicies start at 0, that means the index for the last entry in the array is 2 (0, 1, 2 = 3 elements). so we need to subtract one to make sure it dosent have an array out of bounds error. BUT ONLY IF it isnt already 0. if it's zero and we subtract one, we'll get -1 which will give us an array out of bounds error but in the oppsite direction. sheesh. this feels hacky. but whatever. it works.
  }//now that i think about it, the formula for random numbers i found was an INCLUSIVE one, meaning it can select the max number. if i had just taken an EXCLUSIVE formula (or even just subtracted 1 from the max in the formula) i could have avoided having weird if statments hanging around. dont care though. it works now. just need to remember for next time.

  var curcon = iconsThisGame[idx];
  console.log("--------CARD " + i +" Start--------- Index of: " + idx);//debug
  console.log("grabbing: " + iconsThisGame[idx])//debug
  iconsThisGame.splice(idx, 1);//removes the icon that's going into a card from the iconsThisGame, so it cant be picked again.
  console.log("iconsThisGame = " + iconsThisGame.length);//debug
  console.log(iconsThisGame);//debug


//the following code injects HTML into the page for each card the player wanted.
  $("#gameZone").append("<span class='flipper'><span class='card'><i class='fa " + curcon + " fa-4x'></i></span></span>");
  $("#question").css("display", "none");
}//end the for loop

});//end generate click


  $("#gameZone").on("click", ".card", function(){
    clickedNum++;

    if(clickedNum%2!=0)
    {//it saves the card clicked on every odd click. ie: 1, 3, 5 etc.
      card1 = $(this);
      console.log(card1.html());
    }
    else//on every even click we check to see if the cards are the same.
    {
      if(card1.html() === $(this).html())
        {
          card1.addClass("permOpen");
          $(this).addClass("permOpen");
        }
    }

    //$(this).toggleClass("cardOpen"); //this is wrong but good for debugging.
//what's below works as the game ought to work, but its really annoying for debugging purposes.
    if(clickedNum >= 3)
    {
      if(((clickedNum-3)%2===0))
      {
        $(".card").removeClass("cardOpen");
      }
      else if(clickedNum===3)
      {
        $(".card").removeClass("cardOpen");
      }
    }
    $(this).addClass("cardOpen");


  });//end card click

//this cute little function just prints whatever I'm clicking to the screen.
//helpful for figuring out which divs are where.
// $("*").on("click",function(){
//   console.log($(this));
// });



});//close the javascript file.
