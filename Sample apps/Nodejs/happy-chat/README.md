# Messaging v2 Demo
Demo app for the telstra messaging API

## Getting Started
A live demo of Happy Chat that utilizes the callback methods of the messaging API is available [here](http://api-messaging-api-messaging.apps.tdpaas.com.au/)  
Alternatively clone this repo and run Happy Chat locally. You need to have [Node.js and NPM installed](https://nodejs.org/en/) to run Happy Chat, also note that the messaging API callbacks will not hit routes running locally.


Once [Node.js and NPM](https://nodejs.org/en/) have been installed, navigate to the happy-chat directory and run
```
npm install
```
```
npm start
```
Then navigate to localhost:8080   


To enable live reloading you need to open two terminals in the happy-chat directory. In one terminal run
```
npm run build
```
This will rebuild your client side code whenever changes are saved. Run the express server in a serperate terminal:
```
npm start
```
Because changes are being served by the Express server the page will need to be refreshed to see the changes made to your client side code. Any changes made to code on the server side will require the server to be restarted to take effect.


## About Happy Chat
Happy Chat is a small chat app that will send SMS, MMS, display the status of sent messages and show any replies sent back to the API to the screen. Happy Chat utilizes the MEAN stack, Telstra messaging API, the messaging API Node.js SDK and socket.io. 

In the live version of Happy Chat, any phone numbers entered into the app are not stored anywhere and phone numbers hitting the server are censored before being sent back to the client. The version in this repo doesn't censor any content to demonstrate the exact functionality of the messaging API and SDK. 

Messages sent back to Happy Chat are free for Australian phone numbers. International numbers will be charged a standard rate based on their service provider. Note that MMS messages are more expensive than SMS.

## How to use
Create a file named .env in the root directory of the Happy Chat app. Inside .env create two new environment variables and set the values as your own client_id and client_secret. More information on .env can be found [here](https://github.com/motdotla/dotenv)
```
CLIENT_ID=YOUR-CLIENT-ID
CLIENT_SECRET=YOUR-CLIENT-SECRET
```
Also replace the values for myNumber and myNotifyURL inside demo.component.ts with your own provisioned phone number and whatever URL you want your message status notifications to be sent to respectively. The app can now be run by following the 'Getting Started' instructions above.

## Using the callbacks in a development setting
The Telstra messaging API utilises callbacks to tell an application when a message has been received and to send replies to back to a specified URL. The callbacks require a real URL to send data and not everyone will have this facility while developing and testing their application. However we can use [mockbin](http://mockbin.org/) and [Postman](https://www.getpostman.com/postman) to help us simulate what the callbacks will be while the app is still in development.

### Setting up the callback URLs in development
When you provison a phone number to send messages from you are given the option to specify a "notifyURL". The URL entered here is where messages sent back to your provisoned number will be routed to after they hit the API. While still in early development and without a URL for our application to run on, we can set up a [mockbin](http://mockbin.org/) to capture these replies.

On the mockbin site click the 'Create Bin' button. On the next page we can leave all the fields blank and again click the 'Create Bin' button in the bottom right. The Bin Identifier at the top of this page shows the unique identifier of our bin.

We can now set up the notify URL for our number using http://mockbin.org/bin/{{bin-identifier}} as the "notifyURL". Any messages sent to your provisoned number will show up at this URL. Clicking the 'View History' button will take you to a page showing all requests that come to your bin, this is where you will see the replies.

Each message sent from the messaging API can include a "notifyURL" as a parameter. This notifyURL however is not the same as the one we just set up. Callbacks sent to this URL will send a notification of the messages status. We can set up a seperate mockbin for this and pass in that mockbin URL with each request. This is the "myNotifyURL" variable in the demo.component.ts file.

To get these back to our client we can use [Postman](https://www.getpostman.com/postman) to send a post request containting the body we got from mockbin to our route. Happy Chat uses the routes /api/messageStatus and /api/receiveMessage located in the server/api file. In postman we can put that route in the request URL bar (eg. http://localhost:8080/api/messageStatus to get the message status) add a header with key 'Content-Type' and value 'application/json', set the body to "raw" and then paste the request body from mockbin into the body of our postman request. Click send and you should see the "deliveryStatus" update in Happy Chat and any replies come up as little happy chat boxes.