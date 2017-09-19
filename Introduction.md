![Messaging API Logo](https://dev.telstra.com/sites/default/files/FroBotResize_1.png)
## Introduction
Send and receive SMS and MMS messages using Telstra’s enterprise grade Messaging API product. Get your dedicated Australian number, and start sending and receiving messages to anywhere in the world today.

## Features
Messaging API provides these features

| Feature | Description |
| --- | --- |
| `Dedicated Number` | Provision a mobile number for your account to be used as from address in the API |
| `Send Messages` | Sending SMS or MMS messages |
| `Receive Messages` | Telstra will deliver messages sent to dedicated number, to the provisioned `notifyURL` defined by you |
| `Broadcast Messages` | Invoke a single API to send a message to a list of number provided in `to` |
| `Delivery Status` | Query the delivery status of your messages |
| `Callbacks` | Provide a notification URL and Telstra will notify your app when messages status changes |
| `Alphanumeric Identifier` | Differentiate yourself by providing an alphanumeric string in `from`. This feature is only available on paid plans |
| `Concatenation` | Send messages up to 1900 characters long and Telstra will automaticaly segment and reassemble them |
| `Reply Request` | Create a chat session by associating `messageId` and `to` number to track responses received from a mobile number. We will store this association for 8 days |
| `Character set` | Accetps all Unicode characters as part of of UTF-8 |
| `Bounce-back response` | See if your SMS hit an unreachable or unallocated number (Australia Only) |
| `Queuing` | Messaging API will automatically queue and deliver each message at a compliant rate. |

## Getting access to the API
Follow these steps to get access to the API

1. Go to MyApps page to find your `Free Trial Messaging API` app and API keys. You can also create a new application with `Add New App` button. There is a maximum of 1000 free messages per developer. Additional messages and features can be purchased from the T.DEV portal
2. Use the `API Key` to provision a number for your application. A provisioned number is **required** before you can use Messaging API
3. Use `API Key` to get an authentication token and start using the API. Auth tokens needs to be refreshed regularly so keep an eye on `expires`

Now head over to **Getting Started** to get down to the details. Here are some sample apps and SDKs to get your started.
Happy Messaging!

## Sample Apps
1.  Nodejs - https://github.com/telstra/MessagingAPI-v2/tree/master/Sample%20apps/Nodejs/happy-chat

## SDKs
https://github.com/telstra/MessagingAPI-v2
