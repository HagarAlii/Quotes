
var quoteInfo =[
 {
  Quote :'"Be yourself; everyone else is already taken."' ,
  writer : '― Oscar Wilde'
 },
 {
  Quote :'“So many books, so little time.”' ,
  writer : '― Frank Zappa'
 },
 {
  Quote :'“Two things are infinite: the universe and human stupidity and I am not sure about the universe.”' ,
  writer : '― Albert Einstein'
 },
 {
  Quote :'“A room without books is like a body without a soul.”' ,
  writer : '― Marcus Tullius Cicero'
 },
 {
  Quote :'“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.”' ,
  writer : '― Bernard M. Baruch'
 },
 {
  Quote :'“You only live once, but if you do it right, once is enough.”' ,
  writer : '― Mae West'
 },
 {
  Quote :'“Be the change that you wish to see in the world.”' ,
  writer : '― Mahatma Gandhi'
 },
 {
  Quote :'“To live is the rarest thing in the world. Most people exist, that is all.”' ,
  writer : '― Oscar Wilde'
 } ,
 {
  Quote :'“It is better to be hated for what you are than to be loved for what you are not.”' ,
  writer : '― Andre Gide, Autumn Leaves'
 },
 {
  Quote :'“Insanity is doing the same thing, over and over again, but expecting different results.”' ,
  writer : '― Narcotics Anonymous'
 },
 {
  Quote :'“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”' ,
  writer : '― Ralph Waldo Emerson'
 } 
]


function getQuote(){
  var randomNum = Math.random();
  randomNum *= 10
  var num =Math.floor(randomNum) ;
  var quote = quoteInfo[num].Quote
  var writer = quoteInfo[num].writer
  var holder = `<div class="paper">
    <div id="text" class="text-white text-center">
      <h2  class="h5">${quote}</h2>
      <p>${writer}</p>
    </div>
  </div>`
  document.getElementById("displayed-quote").innerHTML = holder; 
}


