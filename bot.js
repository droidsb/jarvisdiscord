const Discord = require("discord.js");
const client = new Discord.Client();


var readline = require('readline-sync');
var numS=100000;
var MyRN = "Solved";
var answercode = "NAHFAMYOUAINTRIGHT";

//var Serena = require('./Serena.js');
var theWord;
var reacted=false;

var readline = require('readline-sync');
var fs = require('fs');
var saveQim = fs.readFileSync('./learn.js_saves/learnQsave.js', "utf8");
var saveAim = fs.readFileSync('./learn.js_saves/learnAsave.js', "utf8");
var saveQTEMP = fs.readFileSync('./learn.js_saves/QtempSave.js', "utf8");

var saveQ = JSON.parse(saveQim);
var saveA = JSON.parse(saveAim);
var  math = require('mathjs');
var questions = saveQ;
var answers = saveA;
var say = require('say');

var Asave=0;

var QA=0;
var i=0;
var check=0;
var answerKnown=false;
var A=-1;


var d = new Date();
	
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}		
		
	
	function checkTime(i) {
		if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
		return i;
	}


var DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    },
 
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
 
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}
 
var dString = "Feb, 17, 2016";
var UntilChrist = "Dec, 25, 2016";
 




var startup = false;



let prefix = "Jarvis, ";
let prefix2 = "The answer is, ";
let prefix3 = ";";

client.on("ready", () => {
  console.log("I am ready!");
  startup=true;
  
});



		


client.on("message", (message) => {




setInterval(() => {

var announcment = fs.readFileSync('./learn.js_saves/Message.js', "utf8");
var messagechannel = fs.readFileSync('./learn.js_saves/Channel.js', "utf8");

var Currentchannel = client.channels.get(messagechannel)


if(announcment!=0){
	
	
		Currentchannel.send(announcment);
		
		announcment=0;
		fs.writeFileSync('./learn.js_saves/Message.js', 0);
		//fs.writeFileSync('./learn.js_saves/Channel.js', 0);
	
	}


}, 1000);
if (startup==true){
console.log("Systems booted up!");

//message.channel.send("Systems booted up!");
startup=false;

}



if(message.content.startsWith(prefix3+"numbers")){

var number = message.content;

message.delete(1000);
number=number.toLowerCase();
number=number.replace(prefix3+"numbers ","");
numS=number;

	MyRN = Math.ceil(Math.random() * numS);
	
	client.channels.get("490531513113378817").send("New challenge started. 0 to "+numS);


}

if(message.content != "!rank"){

if (Number(message.content) < MyRN) {

	client.channels.get("490531513113378817").send("Higher");
	
	//console.log(MyRN-Number(message.content)+" away");
}

if (Number(message.content) > MyRN) {

	client.channels.get("490531513113378817").send("Lower");
	
	//console.log(Number(message.content)-MyRN+" away");
}

if (Number(message.content) === MyRN) {

	client.channels.get("490531513113378817").send("YOU GOT THE NUMBER "+message.author.toString());
	
	MyRN="Solved";
	
	
}
}

if(message.content.startsWith(prefix3+"code")){




var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","?",".",",","!"];
var morsecode = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....','..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.','--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-','-.--', '--..'," ","?",".",",","!"];

var coded = message.content;

message.delete(1000);
var word=[];
coded=coded.toLowerCase();
coded=coded.replace(prefix3+"code ","");
answercode=coded;
console.log(answercode);
var finalm="";
for (var i = 0, len = coded.length; i < len; i++) {
  word.push(coded[i]);
}

//console.log(word);

	for(var i = 0; i < word.length; i++){
		
		var keycode=alpha.indexOf(word[i]);
		//console.log(keycode)
		finalm += morsecode[keycode]+" ";
		
		


	}
	
	client.channels.get("490531513113378817").send(finalm)
	
	


}

if(message.content===answercode){
	
	
		client.channels.get("490531513113378817").send("You got the message "+message.author.toString())
		answercode = "NAHFAMYOUAINTRIGHT";
	
	
	}

let myRole = message.guild.roles.find("name", "Moderator");



if(message.content.startsWith(prefix3+"purge") && message.member.roles.has(myRole.id)){



	var purge = message.content;

	
	
	purge=purge.replace(prefix3+"purge ","");
	purge=Number(purge)+1;
	if(purge>100){
		purge=100;
	}
	console.log("Purged "+purge);
	
	
	
		message.channel.bulkDelete(purge).then(() => {
  message.channel.send("Deleted "+(purge-1)+" messages.").then(msg => msg.delete(3000));
});
	



}

else if(message.content.startsWith(prefix3+"purge")){
	message.delete(1000);

	 message.channel.send("Sorry you do not have access to this command").then(msg => msg.delete(3000));

}


if (message.content.startsWith(prefix3+"no")) {
      message.delete(1000); //Supposed to delete message
      message.channel.send("https://media2.giphy.com/media/12XMGIWtrHBl5e/200.gif");
   }
   
   if (message.content.startsWith(prefix3+"stop")) {
      message.delete(1000); //Supposed to delete message
      message.channel.send("http://gifimage.net/wp-content/uploads/2017/06/stop-gif-9.gif");
   }
   
   if (message.content.startsWith(prefix3+"yes")) {
      message.delete(1000); //Supposed to delete message
      message.channel.send("https://media1.giphy.com/media/nXxOjZrbnbRxS/giphy.gif");
   }
   
   var heart = client.emojis.find("name", "heart");
   
 // var reactionwords=["jarvis"]; 
   
   var check=message.content.toLowerCase();
   if(check.includes("jarvis")){
 		 if (check.includes("love") || check.includes("like") || check.includes("cool") || check.includes("awesome") || check.includes("best")) {
 		 
 		if(check.includes("not")){
		 message.react("💔")
	
		}
		else{
 			 message.react("❤")
 		
 		 }
  
  
  
}





if (check.includes("hate") || check.includes("bad") || check.includes("sucks")) {

	if(check.includes("not")){
	message.react("❤")
	
	}
	else{
 		 
 		 message.react("💔")
 		 }
    
    
  }
   
  
  }
  
  
  if (check.includes("cookie")) {

	message.react("🍪")
   
  
  }

if (check.includes("dmc")){

	message.react("🍴")

}


if (check.includes("cake")){

	message.react("🍰")

}


if (check.includes("know the way")){


	message.react('401845797953732618');

}
  
  
  


var Words = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];

if(message.content.startsWith(prefix3+"words")){
	
	RandWord = Math.ceil(Math.random() * 100);
	
	theWord=Words[RandWord];
	

	message.channel.send("Guess the word!");
	
	
	
	
	
}

if(message.author.bot==false){
	
	if (check.includes(theWord)) {
	
		if(message.content===theWord){
			
			message.channel.send(message.author.toString()+" has found the word! It's '"+theWord+"'");
			
			theWord=false;
		
		
		}
		else{

			message.channel.send(message.author.toString()+"'s sentence has the word in it!");
		}
	
	
	
	
	



}
}


if (message.content.startsWith(prefix3+"math")) {


var mathp = message.content;

mathp=mathp.replace(prefix3+"math ","");

message.channel.send(math.eval(mathp))




}

  
  
 /*	
		//console.log(`(Private) ${message.author.name}: ${message.content}`);
  
	  if (message.content.startsWith("What is love?")) {
		message.channel.send("Love is eteerrrrnnnaaalll and foreeevverrr (don't mind me)");
		console.log("Sent reply to question!");
	  }
  
	  if (message.content.startsWith("Potato")) {
		message.channel.send("I have potatoes");
		console.log("Sent reply to question!");
	  }
	  if (message.content.startsWith("Ping")) {
		message.channel.send("Nope");
		console.log("Sent reply to question!");
	  }
	  /*if (message.content.startsWith("What is the meaning of life?")) {
		message.channel.send("The meaning of life is 42");
		console.log("Sent reply to question!");
	  }*/
	  


	  var name=`${message.author.username}`;
var channel=`${message.channel}`;


if(channel==="<#357596957625155601>"){

channel="welcome"

}
if(channel==="<#357596886162735105>"){

channel="announcements"

}

if(channel==="<#365032532678541312>"){

channel="mod-team-introductions"

}

if(channel==="<#357662992168648724>"){

channel="join-a-class"

}

if(channel==="<#357949844515586059>"){

channel="club-sign-ups"

}

if(channel==="<#357595506744098816>"){

channel="commonroom"

}

if(channel==="<#360459115778015232>"){

channel="memes"

}

if(channel==="<#370408280721195008>"){

channel="memorable-quotes"

}

if(channel==="<#358265017197395968>"){

channel="apply-for-mod"

}

if(channel==="<#360465890048737290>"){

channel="suggestions"

}

if(channel==="<#445730124239732736>"){

channel="questions-and-advice"

}

if(channel==="<#377607331934109696>"){

channel="fallout-shelter"

}

if(channel==="<#395626978411151360>"){

channel="commonroom-vc-only"

}

if(channel==="<#402571727474917376>"){

channel="voj-training-channel"

}

if(channel==="<#376130355800965130>"){

channel="super-secret-channel"

}

if(channel==="<#357893076900904960>"){

channel="moderating"

}

if(channel==="<#358129555124387850>"){

channel="dyno-log"

}

if(channel==="<#362328500893384717>"){

channel="high-mods"

}

if(channel==="<#379866878027497492>"){

channel="bot-randomness"

}

if(channel==="<#377185843045072899>"){

channel="fish"

}

if(channel==="<#377185894119243805>"){

channel="slot"

}

if(channel==="<#357595659106254850>"){

channel="study-hall"

}
if(channel==="<#490531513113378817>"){

channel="jarvis-games"

}



var read = "#"+channel+":"+"<"+name+">"+":"+`${message.cleanContent}`;
console.log(read);
Asave=0;

QA=0;
i=0;
check=0;
answerKnown=false;
A=-1;

client.user.setPresence({ status: 'offline', game: { name: 'logging chat' } });


  

if(message.content.startsWith(prefix) && message.author.bot==false){
  
  
  
	  var QUpper=`${message.content}`.replace('Jarvis, ','');
  
	  var Q=QUpper.toLowerCase();
	  //console.log("ERROR CHECK Q "+Q);
	  fs.writeFileSync('./learn.js_saves/QtempSave.js', Q);
  

			/*while(check<questions.length){
				if(Q===questions[check] && answerKnown===false){
					console.log();
					say.speak(answers[check], 'Serena');
					console.log(answers[check]);
					console.log();
					answerKnown=true;
				
				
				}
			
				
			
				check++;
				}*/
	
	
			//console.log(Q);
			//console.log("ERROR CHECK ONE");
			
			while(check<answers.length){
				if(Q===questions[check] && answerKnown===false){
					console.log();
					//console.log("ERROR CHECK TWO");
					//say.speak(answers[check], 'Serena');
					message.channel.send(answers[check]);
					console.log();
					answerKnown=true;
				
				
				}
			
				
			
				check++;
			}
		
		
		//console.log("Test one "+saveQTEMP);
	}
	




	if(message.author.bot==false){
			if(answerKnown===false){
			if(message.content.startsWith(prefix) && message.author.bot==false && Q!="what is my name?"){
				saveQTEMP = fs.readFileSync('./learn.js_saves/QtempSave.js', "utf8");
				//say.speak("What is the answer to that question?", 'Serena');
				message.channel.send("What is the answer to that question?");
				}
			}
				if(message.content.startsWith(prefix2)){
		 
					
			
					var A =`${message.content}`.replace('The answer is, ','');
					console.log(A);
					//console.log("Test two"+saveQTEMP);
					Asave=A;
			
				
					questions.push(saveQTEMP);
					answers.push(A)
			
					A=0;
					QA=0;
				
			
					while(i<answers.length){

			
					i++
					}
					A=0;
					QA=0;
					check=0;
					fs.writeFileSync('./learn.js_saves/QtempSave.js', '');
					//answerKnown=false;
					fs.writeFileSync('./learn.js_saves/learnQsave.js', JSON.stringify(questions));	
					fs.writeFileSync('./learn.js_saves/learnAsave.js', JSON.stringify(answers));
					}
		
  
		}
		
	if(Q=="what is my name?"){
		
		message.reply("is your name");
	
	
	}
	
	
	
		

		
		
	
	
	Q=0;
	A=0;
	check=0;
	Asave=0;

  
  
  
  
  //console.log(server);
  /*var FQ = readline.question("You: ");
  
  message.channel.send(FQ);*/
  
  console.log();

  
});
  
client.login('process.env.BOT_TOKEN');


