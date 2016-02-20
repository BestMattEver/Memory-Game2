$(document).ready(function(){//open the javascript file.
  'use strict';
//this is all the possible icons. helpfully compiled by byron.
var iconChoices = ["fa-glass", "fa-music", "fa-arrow-circle-o-down", "fa-search", "fa-envelope-o", "fa-heart", "fa-star", "fa-user", "fa-film", "fa-th", "fa-search-plus", "fa-search-minus", "fa-power-off", "fa-signal", "fa-gear", "fa-trash-o", "fa-home", "fa-file-o", "fa-clock-o", "fa-volume-off", "fa-arrow-circle-o-down", "fa-play-circle-o", "fa-refresh", "fa-list-alt", "fa-lock", "fa-flag", "fa-headphones",  "fa-volume-off", "fa-qrcode", "fa-barcode", "fa-tag", "fa-book", "fa-bookmark", "fa-print", "fa-camera", "fa-font", "fa-bold", "fa-italic", "fa-text-height", "fa-text-width", "fa-align-left", "fa-align-center", "fa-align-right", "fa-align-justify", "fa-list", "fa-dedent", "fa-indent", "fa-video-camera", "fa-photo", "fa-pencil", "fa-map-marker", "fa-adjust", "fa-tint", "fa-edit", "fa-share-square-o", "fa-check-square-o", "fa-arrows", "fa-step-backward", "fa-fast-backward", "fa-backward", "fa-play", "fa-pause", "fa-stop", "fa-forward", "fa-fast-forward", "fa-step-forward", "fa-eject", "fa-chevron-left", "fa-chevron-right", "fa-plus-circle", "fa-minus-circle", "fa-times-circle", "fa-check-circle", "fa-question-circle", "fa-info-circle", "fa-crosshairs", "fa-times-circle-o", "fa-check-circle-o", "fa-ban", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrow-down", "fa-mail-forward", "fa-expand", "fa-compress", "fa-plus", "fa-minus", "fa-asterisk", "fa-exclamation-circle", "fa-gift", "fa-leaf", "fa-fire", "fa-eye", "fa-eye-slash", "fa-warning", "fa-plane", "fa-calendar", "fa-random", "fa-comment", "fa-magnet", "fa-chevron-up", "fa-chevron-down", "fa-retweet", "fa-shopping-cart", "fa-folder", "fa-folder-open", "fa-arrows-v", "fa-arrows-h", "fa-bar-chart-o", "fa-twitter-square",  "fa-facebook-square", "fa-camera-retro", "fa-key", "fa-comments", "fa-thumbs-o-up", "fa-thumbs-o-down", "fa-star-half", "fa-heart-o", "fa-sign-out", "fa-linkedin-square", "fa-thumb-tack", "fa-external-link", "fa-sign-in", "fa-trophy", "fa-github-square", "fa-upload", "fa-lemon-o", "fa-phone", "fa-square-o", "fa-bookmark-o", "fa-phone-square", "fa-twitter", "fa-facebook-f", "fa-unlock", "fa-credit-card", "fa-feed", "fa-hdd-o", "fa-bullhorn", "fa-bell", "fa-certificate", "fa-hand-o-right", "fa-hand-o-left", "fa-hand-o-up", "fa-hand-o-down", "fa-arrow-circle-left", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-circle-down", "fa-globe", "fa-wrench", "fa-tasks", "fa-filter", "fa-briefcase", "fa-arrows-alt", "fa-group", "fa-chain", "fa-cloud", "fa-flask", "fa-cut", "fa-copy", "fa-paperclip", "fa-save", "fa-square", "fa-navicon", "fa-list-ul", "fa-list-ol", "fa-strikethrough", "fa-underline", "fa-table", "fa-magic", "fa-truck", "fa-pinterest", "fa-pinterest-square", "fa-google-plus-square", "fa-money", "fa-caret-down", "fa-caret-up", "fa-caret-left", "fa-caret-right", "fa-columns", "fa-unsorted", "fa-sort-down", "fa-sort-up", "fa-legal", "fa-dashboard", "fa-flash", "fa-sitemap", "fa-umbrella", "fa-paste", "fa-lightbulb-o", "fa-exchange", "fa-cloud-download", "fa-cloud-upload", "fa-user-md", "fa-stethoscope", "fa-suitcase", "fa-bell-o", "fa-coffee", "fa-cutlery"]

var numBoxes = 0;//the number of boxes the user enters
var iconsThisGame=[];//an array of the icons in use THIS game.
var clickedNum =0; //this is how many times we've clicked a card
var card1;

$("#generate").on("click", function(){
numBoxes = parseInt($("#numBoxes").val());
console.log(numBoxes);

 if(numBoxes%2 != 0)//it the player enters an odd number, add one to it, call him a smart ass, and make the board anyway.
{
  $("#output").text("Smart ass. Enter a NUMBER. under 400.");
  numBoxes+=1;
}//end if

for(var i = 0;i<=numBoxes-1;i++)//make the board.
{
  $("#gameZone").append("<span class='flipper'><span class='card'><i class='fa " + iconChoices[Math.floor(Math.random() * (200 - 0 + 1)) + 0] + " fa-4x'></i></span></span>");
  $("#question").css("display", "none");
}

});//end generate click


  $("#gameZone").on("click", ".card", function(){

    clickedNum++
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
    console.log($(this));


  });//end card click

//this cute little function just prints whatever I'm clicking to the screen.
//helpful for figuring out which divs are where.
$("*").on("click",function(){
  console.log($(this));
});



});//close the javascript file.
