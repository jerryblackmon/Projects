const quotes=["Don't cry because it's over, smile because it happened.","I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Be yourself; everyone else is already taken.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","So many books, so little time.","Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","A room without books is like a body without a soul.","You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.","You know you're in love when you can't fall asleep because reality is finally better than your dreams.","You only live once, but if you do it right, once is enough.","Be the change that you wish to see in the world.","In three words I can sum up everything I've learned about life: it goes on.","If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend","Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .","No one can make you feel inferior without your consent.","If you tell the truth, you don't have to remember anything.","A friend is someone who knows all about you and still loves you.","I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","Always forgive your enemies; nothing annoys them so much.","To live is the rarest thing in the world. Most people exist, that is all.","Live as if you were to die tomorrow. Learn as if you were to live forever.","Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","I am so clever that sometimes I don't understand a single word of what I am saying.","Without music, life would be a mistake.","To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.","We accept the love we think we deserve.","Insanity is doing the same thing, over and over again, but expecting different results.","I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together."]
const authors=["Dr. Seuss","Marilyn Monroe","Oscar Wilde","Albert Einstein","Frank Zappa","Bernard M. Baruch","Marcus Tullius Cicero","William W. Purkey","Dr. Seuss","Mae West","Mahatma Gandhi","Robert Frost","J.K. Rowling","Albert Camus","C.S. Lewis","Eleanor Roosevelt","Mark Twain","Elbert Hubbard","Maya Angelou","Oscar Wilde","Oscar Wilde","Mahatma Gandhi","Martin Luther King Jr.","Oscar Wilde","Friedrich Nietzsche","Ralph Waldo Emerson","Rob Siltanen","Stephen Chbosky","Narcotics Anonymous","Marilyn Monroe"]
let random=Math.floor(Math.random()*(quotes.length));
let quote="Not Yet";
let author="Not Yet";
class GetNewQuote extends React.Component{
     constructor(props) {
    super(props);
       this.handleClick=this.handleClick.bind(this)
    } 
  handleClick(){
    random=Math.floor(Math.random()*(quotes.length))
   ReactDOM.render(quotes[random],document.getElementById('text'))
    ReactDOM.render(authors[random],document.getElementById('author'))
    return random
  }
  render(){
    return <button onClick={this.handleClick}class="btn btn-primary"id="new-quote"><h6>Get New Quote</h6></button>
    
  }
     } 
ReactDOM.render(quotes[random],document.getElementById('text'));
ReactDOM.render(authors[random],document.getElementById('author'))
ReactDOM.render(<GetNewQuote />,document.getElementById('new-quote'))
 $(".tweet").click(function() {
    var quote = quotes[random];
    var author=authors[random];
    window.open("https://twitter.com/intent/tweet?text=" + quote+author)
    });