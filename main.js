var chooseDare=["Sing the nationl anthem.",
"Paint your nails with a crayon or colored pencil.",
"Let someone in the group style your hair and take a picture.",
"Drink a spoon of olive oil.",
"Pretend to be a pig.",
"Act like a monkey.",
"Let someone else in the group text your 6th contact.",
"Talk in a British accent.",
"Draw a face around your belly button.",
"Dance for a minute to no music.",
"Do your best belly dance.",
"Depict a human life through interpretive dance.",
"Spin an imaginary hula hoop around your waist for 3 minutes while the game continues.",
"Compose a poem on the spot based on something the group comes up with.",
"Drag your butt on the carpet like a dog from one end of the room to the other. You’ll need to be wearing shorts or pants for this one.",
"Call the 7th contact in your phone and sing them 30 seconds of a song that the group chooses."
];
var chooseTruth=[
 "What is the meanest thing you have done in your life?",
 "Who in the room do you think would be a bad date?",
 "If you were the opposite sex for one day, what would you do?",
 "Which player would you like to swap lives with for a week?",
 "What physical feature do you get complimented on the most?",
 "What is the quality or characteristic that would like to change about you?",
 "What was the craziest thing that has happened to you at work?",
 "What’s the first thing you would do if you were invisible?",
 "If you could be trapped on a deserted island with one player, who would it be?",
 "How many kids would you like?",
 "Do you currently have a crush?",
 "Do you have a bucket list and if so, what is one thing on that list?",
 "Do you have a weird collection?",
 "If anyone in your family could win an award for being the most annoying, who would it be?",
 "Have you ever cheated on a test?",
 "On a scale from 1-10, where does your patience fall?",
 "What's one of your toxic personality traits?",
 "What was the last thing you searched for on your phone web browser?",
 "Who is the last person you texted?",
 "What does your dream boy or girl look like?",
 "What is the most illegal thing you’ve ever done?",
 "Do you prefer a bath or a shower? Why?",
 "Would you rather be caught picking your nose or picking a wedgie?",
 "What salad dressing could you drink out of the bottle?",
 "Do you have bad foot odor?",
 "Have you ever accidentally hit something with your car?",
 "Have you ever pooped your pants?"
];
// var randomDecimal=Math.random();
// var random = randomDecimal*10
// var final= Math.floor(random);
var message = $('.paragraph');
var tbutton = $('.tbutton');
var dbutton = $('.dbutton');
tbutton.on("click", pickTruth)
dbutton.on("click", pickDare)
var cbutton = $('.cbutton')
cbutton.on("click", clearTD)

function pickTruth() {
 event.preventDefault();
 var randomDecimal=Math.random();
 var random = randomDecimal* chooseTruth.length;
 var final= Math.floor(random);
message.text(chooseTruth[final]);
   console.log(chooseTruth[final]);
}
function clearTD() {
  message.empty();
}
function pickDare() {
 event.preventDefault();
 // var message = $('.message');
 var randomDecimal=Math.random();
 var random = randomDecimal* chooseDare.length;
 var final= Math.floor(random);
 // return chooseTruth[final];
 // message.text(${chooseTruth[final]})
message.text(chooseDare[final]);
   console.log(chooseDare[final]);
}
