var emojis = [
  { name: "smile", emoji: "😀" },
  { name: "laugh", emoji: "😂" },
  { name: "love", emoji: "😍" },
  { name: "thinking face", emoji: "🤔" },
  { name: "rolling eyes", emoji: "🙄" },
  { name: "sleeping ", emoji: "😴" },
  { name: "eyes", emoji: "👀" },
  { name: "ghost", emoji: "👻" },
  { name: "dog ", emoji: "🐶" },
  { name: "cat ", emoji: "🐱" },
];

var emojiIndex = 0;
var emojiEl = document.getElementById("emoji");
var emojiNameEl = document.getElementById("emoji-name");
var changeEmojiB = document.getElementById("change-emoji");

changeEmojiB.addEventListener("click", function () {
  emojiIndex = (emojiIndex + 1) % emojis.length;
  emojiEl.innerText = emojis[emojiIndex].emoji;
});

$(document).ready(function () {
  $("#a").click(function () {
    var guessedCorrectly = false;
    for (var i = 0; i < emojis.length; i++) {
      if ($("#user").val() === emojis[i]["name"]) {
        guessedCorrectly = true;
        break;
      }
    }
    if (guessedCorrectly) {
      alert("You Guessed!");
    } else {
      alert("Sorry! Try another time!");
    }
  });
});
