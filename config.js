module.exports = {
  Admins: ["1114889680484315206", "UserID"], //Admins of the bot
  ExpressServer: false,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/6TZDXQNHFC", //Support Server Link
  Token: process.env.Token || "YourBotToken", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1221699838186360884", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "kkNMAjWkxICh7HGEi1XS_FJE93Efozn4", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "d4ba8f36fe9c433a8d4daa9468479828", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "1b587c9a2ee24e6f91663a4215f2180e", //Spotify Client Secret
  },
};
