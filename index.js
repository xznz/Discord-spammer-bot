const BotName = "Spam Bot"; // Bot Name \\
const Token = "BOTTOKEN"; // The token for the bot \\
const SpamMessage = "hi"; // message you want to spam \\
const YourDiscordID = 0; // Replace 0 with your discord id! \\

// Bot \\

const Discord = require("discord.js");
const prefix = ";";

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log(`${BotName} Loaded!`);

	try {
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);
	} catch(e) {
		console.log(e);
	};
});

bot.on("message", async message => {
	if(message.author.bot) return;

	if(!command.startsWith(prefix)) return;

    if(command === `${prefix}spam`) {
    	if(!message.author.id === YourDiscordID) return;
    	let Ping = message.mentions.users.first();
    	setInterval(function(){
    		Ping.send(SpamMessage)
    	},
    		20
    	);
    };
});

bot.login(Token);
