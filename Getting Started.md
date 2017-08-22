# Messaging API
![Messaging API Logo](https://dev.telstra.com/sites/default/files/FroBotResize_1.png)
## Getting Started

First step is to create an `App`. After you've created and `App`, follow these steps to 

1. Authenticate
2. Get a provisioned number for Messaging API
3. Use the Messaging API

## Authentication
To get an OAuth 2.0 Authentication token, pass through your Consumer Key and Consumer Secret that you received when you registered for the Messaging API key. The `grant_type` should be left as `client_credentials` and the `scope` as `NSMS`. The token will expire in one hour. Get your keys by creating an `App`.

```sh
#!/bin/bash
# Obtain these keys from the Telstra Developer Portal
CONSUMER_KEY="your consumer key"
CONSUMER_SECRET="your consumer secret"
curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=client_credentials&client_id=$CONSUMER_KEY&client_secret=CONSUMER_SECRET&scope=NSMS' \
  'https://tapi.telstra.com/v1/oauth/token'
```
### Response

```json
{
  "expires_in" : "35999",
  "access_token" : "1234567890123456788901234567"
}
```

## Provisioning a number
To get a dedicated number, invoke the provisioning API

```sh
#!/bin/bash
curl -X POST \
  https://tapi.telstra.com/v2/messages/provisioning/subscriptions \
  -H 'authorization: Bearer $ACCESS_TOKEN' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
  "activeDays":30,
  "notifyURL":"http://example.com/callback",
  "callbackData":
  {
    "anything":"some data"
  }
}'
```
Parameters for the provisioning API are;

| Parameter |Mandatory| Description |
| --- | --- | --- |
| `activeDays` | N | The number of days before for which this number is provisioned. Usually this will be same as the plan you buy. `default: 30 days` |
| `notifyURL` | N | A callback URL that will be POSTed to whenever a new message arrives at this destination address. If this is not provided then you can make use the Get Replies API to poll for messages |
| `callbackData` | N | A JSON that will be sent as the body in the POST to the notifyURL. This can be any meaningful data relevant to your application. | 

### Response
A typical response will look like;
```
{
    "destinationAddress": "+61472880996"
}
```
The fields mean;

| Field | Description |
| --- | --- |
| `destinationAddress` | The provisioned number assigned to your app. Your customers can send messages or replies to this number. If the `notifyURL` is provided then the replies will be POSTed to it. |

## Send message
### Send message to a single number

```sh
#!/bin/bash
# Use the Messaging API to send an SMS
AccessToken="Access Token"
Dest="Destination number"
curl -X post -H "Authorization: Bearer $AccessToken" \
  -H "Content-Type: application/json" \
  -d '{ "to":"$Dest", "body":"Test Message" }' \
  https://tapi.telstra.com/v2/messages/sms
```
A number of parameters can be used in this call, these are;

| Parameter | Description |
| --- | --- |
| `to` | The number that the message should be sent to. This is a mobile number in international format. `"to": "+61412345678"` |
| `validity` | Normally if the message cannot be delivered immediately, it will be stored and delivery will be periodically reattempted. The network will attempt to send the message for up to seven days. <br/>It is possible to define a period smaller than 7 days by specifying by including this parameter and specifing the number of minutes that delivery should be attempted. eg: including `"validity": 60` will specify that if a message can't be delivered within the first 60 minutes them the network should stop. |
| `scheduledDelivery` | This parameter will instruct the newtork to store the message and start attempting to deliver it after the specified number of minutes: <br/>e.g.: If `"scheduledDelivery": 120` is included, then the newtork will not attempt to start message delivery for two hours after the message has been submitted. |
| `priority` | When messages are queued up for a number, then it is possible to set where a new message will be placed in the queue. If the priority is set to true then the new message will be placed ahead of all messages with a normal priority. <br/>If there are no messages queued for the number, then this parrameter has no effect. |
| `notifyURL` | It is possible for the network to make a call to a URL when the message has been delivered (or has expired), different URLs can be set per message. <br/>Please refer to the Delivery notification section below. |
| `replyRequest` | When set to true, network will use a temporary number to deliver this message. All messages sent by mobile to this temporary number will be stored against the same `messageId`. If a `notifyURL` is provided then user response will be delivered to the URL where `messageId` will be same as `messageId` in reponse to original API request.
| `body` | This field contains the message text, this can be up to 1900 UTF-8 characters. As mobile devices rarely support the full range of UTF-8 characters, it is possible that some characters may not be translated correctly by the mobile device. |

### Response
A typical response will look like;

```json
{
    "messages": [
        {
            "to": "0431588242",
            "deliveryStatus": "MessageWaiting",
            "messageId": "cc70158e000249b2000000000c53ef94021b0201-1261431588242"
        }
    ]
}
```
The fields mean:

| Field | Description |
| --- | --- |
| `messages` | An array of messages. |
| `to` | Just a copy of the number the message is sent to. |
| `deliveryStatus` | Gives and indication of if the message has been accepted for delivery. The description field contains information on why a message may have been rejected. |
| `messageId` | For an accepted message, ths will be a refernce that can be used to check the messages status. Please refer to the [Delivery notification](#delivery_notification) section below. |

### Send Message to multiple numbers

```sh
#!/bin/bash
# Use the Messaging API to send an SMS
AccessToken="Access Token"
Dest="Destination number"
curl -X post -H "Authorization: Bearer $AccessToken" \
  -H "Content-Type: application/json" \
  -d '{ "to":"$dest1, $dest2, $dest3", "body":"Test Message" }' \
  https://tapi.telstra.com/v2/messages/sms
```
A number of parameters can be used in this call, these are;

| Parameter | Description |
| --- | --- |
| `to` | List of numbers that the message should be sent to. This is a list of mobile numbers in international format. `"to": "+61412345678, +61418765432"` |
| `validity` | Normally if the message cannot be delivered immediately, it will be stored and delivery will be periodically reattempted. The network will attempt to send the message for up to seven days. <br/>It is possible to define a period smaller than 7 days by specifying by including this parameter and specifing the number of minutes that delivery should be attempted. eg: including `"validity": 60` will specify that if a message can't be delivered within the first 60 minutes them the network should stop. |
| `scheduledDelivery` | This parameter will instruct the newtork to store the message and start attempting to deliver it after the specified number of minutes: <br/>e.g.: If `"scheduledDelivery": 120` is included, then the newtork will not attempt to start message delivery for two hours after the message has been submitted. |
| `priority` | When messages are queued up for a number, then it is possible to set where a new message will be placed in the queue. If the priority is set to true then the new message will be placed ahead of all messages with a normal priority. <br/>If there are no messages queued for the number, then this parrameter has no effect. |
| `notifyURL` | It is possible for the network to make a call to a URL when the message has been delivered (or has expired), different URLs can be set per message. <br/>Please refer to the Delivery notification section below. |
| `replyRequest` | Reply Request cannot be set to true for broadcast messages. An error will be returned if this is set `true` for broadcast messages |
| `body` | This field contains the message text, this can be up to 500 UTF-8 characters. As mobile devices rarely support the full range of UTF-8 characters, it is possible that some characters may not be translated correctly by the mobile device. |

### Response
A typical response will look like. Note that `messageId` will be differnt for each number.

```json
{
    "messages": [
        {
            "to": "+61412345678",
            "deliveryStatus": "MessageWaiting",
            "messageId": "cc70158e000249b2000000000c53ef94021b0201-1261412345678"
        },
        {
            "to": "+61418765432",
            "deliveryStatus": "MessageWaiting",
            "messageId": "cc70158e000249b2000000000c53ef94021b0201-1261418765432"
        },
    ]
}
```
The fields mean;

| Field | Description |
| --- | --- |
| `messages` | An array of responses. |
| `to` | Just a copy of the number the message is sent to. |
| `deliveryStatus` | Gives and indication of if the message has been accepted for delivery. The description field contains information on why a message may have been rejected. |
| `messageId` | For an accepted message, ths will be a refernce that can be used to check the messages status. Please refer to the [Delivery notification](#delivery_notification) section below. |

## Delivery Notification
The API provides several methods for notifying when a message has been delivered to the destination.
1. When you provision a number there is an opportunity to specify a `notifyURL`, when the message has been delivered the API will make a call to this URL to advise of the message status.
2. `notifyURL` may be specified per message which will override the API setting for the single message only.
    1.  If `notifyURL` was provided when you created the 
3. If you can specify a URL you can always call the `GET /sms` API get the latest replies to the message.
 
*Please note that the notification URLs and the polling call are exclusive. If a notification URL has been set then the polling call will not provide any useful information.*
### Notification URL format
When a message has reached its final state, the API will send a POST to the URL that has been previously specified. The call will look like this;

```json
{
  "to":"+61418123456",
  "sentTimestamp":"2017-03-17T10:05:22+10:00",
  "receivedTimestamp":"2017-03-17T10:05:23+10:00",
  "messageId":"\/cccb284200035236000000000ee9d074019e0301\/1261418123456",
  "deliveryStatus":"DELIVRD"
}
```
The fields are;

| Field | Description |
| --- | --- |
| `to` | The number the message was sent to |
| `receivedTimestamp` | Time the message was sent to the API |
| `sentTimestamp` | Time handling of the message ended |
| `deliveryStatus` | The final state of the message |
| `messageId` | The same reference that was returned when the original message was sent. |

Upon receiving this call it is expected that your servers will give a 204 (No Content) response. Anything else will cause the API to reattempt the call 5 minutes later.

## Polling for Message Status
If no notification URL has been specified, it is possible to poll for the message status, an example of this and explanation of the parameters are given below.

```sh
#!/bin/bash
# Example of how to poll for a message status
AccessToken="Consumer Access Token"
MessageId="Previous supplied Message Id, URL encoded"
curl -X get -H "Authorization: Bearer $AccessToken" \
  -H "Content-Type: application/json" \
  "https://tapi.telstra.com/v2/messages/sms/$MessageId"
```
Note, the `MessageId` that appears in the URL must be URL encoded, just copying the message id as it was supplied when submitting the message won't work.

### Response
The response will be something like;

```json
{
  "to": "+61418123456",
  "sentTimestamp": "2017-03-17T09:16:49+10:00",
  "receivedTimestamp": "2017-03-17T09:16:50+10:00",
  "deliveryStatus": "DELIVRD",
}
```
The field meanings are;

| Field | Description |
| --- | --- |
| `to` | The number the message was sent to |
| `receivedTimestamp` | Time the message was sent to the API |
| `sentTimestamp` | Time handling of the message ended |
| `deliveryStatus` | The final state of the message |


## Sample Apps
1.  Nodejs - https://github.com/mjdjk1990/SMS_API_Demo 
2.  Python - https://github.com/SamMatt87/Telstra-SMS-API

## SDKs
https://github.com/telstra/MessagingAPI-v2
