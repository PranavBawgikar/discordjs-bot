# setting up a discord.js bot

before we begin, make sure you have node.js installed on your system. if not, you can download and install it from [nodejs.org](https://nodejs.org/).

### step 1: create a new directory
open your terminal or command prompt and navigate to the desired directory where you want to create your bot project. then, execute the following command to create a new directory:
```bash
mkdir discord.js-tutorial-bot
```
next, navigate into the newly created directory:
```bash
cd discord.js-tutorial-bot
```
### step 2: initialize your project
run the following command to initialize a new node.js project with default settings:
```bash
npm init -y
```
this will create a `package.json` file which will store information about your project.
### step 3: install discord.js
now, let's install the discord.js library, which is a powerful library for interacting with the discord API:
```bash
npm install discord.js
```
### step 4: create your bot file
create a new folder named `src` and within that folder, create a new file named `bot.js`. This file will contain the main code for your bot.
### step 5: set up environment variables
create a new file named `.env` in the root directory of your project. this file will store sensitive information like your bot token. add your Discord bot token to the `.env` file:
```
DISCORD_BOT_TOKEN=YOUR_BOT_TOKEN_HERE
```
replace `YOUR_BOT_TOKEN_HERE` with your actual bot token obtained from the discord developer portal.
<br /> <br />
### step 6: creating your bot
to obtain your discord bot token and to get your bot online, follow these steps:
- visit [Discord Developer Portal](https://discord.com/developers/applications). login, if you haven't.
- create a new application by clicking on "New Application" and name your application. for example, "Discord.js Tutorial Bot".
- after creating the application, go to the "Bot" section in the dashboard.
- click on "Add Bot" and confirm by clicking "Yes, do it".
- once the bot is created, click on "Copy" next to where it says "Token" to reveal your bot token.
- paste the token in your `.env` file where you have created your token environment variable.
- now, if you don't own or manage a server, create a new server by clicking on the "+" button in discord then choose "Create a Server" and give your server a name and click "Create" to finalize the creation of your server.
- go to the discord developer portal and navigate to your application, click on "General Information" and copy the Client / Application ID.
- now, generating authorization url type the following url in your browser: `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID_HERE&scope=bot`.
- replace `YOUR_CLIENT_ID_HERE` with your bot's Client ID you obtained.
- select the server you want to add the bot to and click "Authorize" and remember you need the "Manage Server" permission on the server to add bots.

note: 
- keep your bot token private and never share it with anyone. it's important for security.
- double-check your bot token if you encounter "Invalid token provided" errors.
<br /> <br />
### step 7: run your bot
now, you can run your bot using the following command:
```bash
npm run dev
```
this will start your bot using `nodemon`, which will automatically restart the bot whenever you make changes to your code.

that's it! your discord.js bot is now set up and running. you can further customize and extend your bot's functionality by adding more code to `bot.js`.
