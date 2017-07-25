# Messaging v2 Demo
Demo app for the telstra messaging API

## Getting Started
You can check out the live demo of this app [here](http://happy-chat-api-apps.54.153.181.249.nip.io)  
Alternatively clone this repo and run:
```
npm install
```
```
npm start
```
Then navigate to localhost:8080   

To enable live reloading of the application in one terminal run   
```
npm run build
```
And run the express server in a serperate terminal
```
npm start
```
    
## How to use
Replace the value for CLIENT_ID and CLIENT_SECRET in the /server/api_credentials with your own client_id and client_secret.  
Also replace the values for myNumber and myNotifyURL inside demo.component.ts with your own provisioned phone number and whatever you URL you want your message status notifications to be sent to respectively.   
Start the app and you will be able to send SMS and poll the current status of sent SMS messages.

## Using the callbacks in a development setting
The Telstra Messaging API utilises callbacks to tell an application when an SMS has been received and to send replies to back to a specified URL. The callbacks require a real URL to send data and not everyone will have this facility while developing and testing their application. However we can use [mockbin](http://mockbin.org/) and [Postman](https://www.getpostman.com/postman) to help us simulate what the callbacks will be like when our app is actually in development.

### Setting up the callback URLs for development
When you are provisoned a phone number to send messages from you are given the option to specify a "notifyURL". The URL entered here is where messages sent back to your provisoned will be routed to after the hit the API. While still in early development and without a URL for our application to run on, we can set up a [mockbin](http://mockbin.org/) to capture these replies.

On the mockbin site click the 'Create Bin' button. On the next page we can leave all the fields blank and again click the 'Create Bin' button in the bottom right. The Bin Identifier at the top of this page shows the unique identifier of our bin.

We can no set up the notify URL for our number using http://mockbin.org/bin/bin-identifier as the "notifyURL". Any messages sent to your provisoned number will show up at this URL. Clicking the 'View History' button will take you to a page showing all requests that come to your bin, this is where we will see the replies.

Each message sent from the messaging API requires "notifyURL" as well. This notifyURL however is not the same as the one we just set up. Callbacks sent to this URL will notify of a successful message sent. We can set up a seperate mockbin for this and pass in that mockbin URL with each request. This is the "myNotifyURL" variable in the demo.component.ts file.

To get these back to our client we use [Postman](https://www.getpostman.com/postman) to send a post request containting the body we got from mockbin to our route. In this example app we use the routes /api/messageStatus and /api/receiveMessage. In postman we can put that route in the request URL bar (eg. http://localhost:8080/api/messageStatus to get the message status) add a header with key 'Content-Type' and value 'application/json' and then paste the request body from mockbin into the body of our postman request. Click send and you should see the message status change to 'Success' and any replies come up as little happy chat boxes 