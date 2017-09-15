# Getting started

The Telstra Messaging API allows your applications to send SMS and MMS and receive SMS text messages from Australia's leading network operator.
It also allows your application to track the delivery status of both sent and received messages.


## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthClientSecret | OAuth 2 Client Secret |



API client can be initialized as following:

```JavaScript
const lib = require('telstra-sms-messaging/lib');

// Configuration parameters and credentials
lib.Configuration.oAuthClientId = "oAuthClientId"; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = "oAuthClientSecret"; // OAuth 2 Client Secret

```

You must now authorize the client.

### Authorizing your client


This SDK uses *OAuth 2.0 authorization* to authorize the client.

The `authorize()` method will exchange the OAuth client credentials for an *access token*.
The access token is an object containing information for authorizing client requests.

 You must pass the *[scopes](#scopes)* for which you need permission to access.
```JavaScript
const tokenPromise = oAuthManager.authorize([lib.OAuthScopeEnum.NSMS]);
```
The Node.js SDK supports both callbacks and promises. So, the authorize call returns a promise and also returns response back in the callback (if one is provided)

The client can now make authorized endpoint calls.



### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the `lib/Models/OAuthScopeEnum` enumeration.

| Scope Name | Description |
| --- | --- |
| `NSMS` |  |


### Authorization example
In this example, `app.js` will check if the access token has been set in the SDK. If it has been, API calls can be made. Otherwise, client has to be authorized first before making API calls.  

#### `app.js`

```JavaScript
const express = require('express');
const app = express();

const PORT = 1800;

const lib = require('telstra-sms-messaging/lib');
const oAuthManager = lib.OAuthManager;

lib.Configuration.oAuthClientId = 'oAuthClientId'; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = 'oAuthClientSecret'; // OAuth 2 Client Secret

const storedToken = localStorage.getItem('token');
if (storedToken !== null && storedToken !== undefined) {
    lib.Configuration.oAuthToken = storedToken;
}
lib.Configuration.oAuthTokenUpdateCallback = function(token) {
    // token is the updated access_token
    localStorage.setItem('token', token);
};

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});

app.get('/', (req, res, next) => {
  if (oAuthManager.isTokenSet()) {
    // token is already stored in the client
    // make API calls as required
    next();
  } else {
    const scopes = [lib.OAuthScopeEnum.NSMS];
    const promise = oAuthManager.authorize(scopes);
    promise.then((success) => {
      // client authorized. API calls can be made
      next();
    }, (exception) => {
      return res.status(exception.errorCode).json({
        // error occurred, exception will be of type lib/Exceptions/OAuthProviderException
        title: `${exception.errorCode} - ${errorTitle}`,
        message: exception.errorMessage
      });
    });
  }
});

```




# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [MessagingController](#messaging_controller)
* [OAuthAuthorizationController](#o_auth_authorization_controller)

## <a name="messaging_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MessagingController") MessagingController

### Get singleton instance

The singleton instance of the ``` MessagingController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MessagingController;
```

### <a name="get_message_status"></a>![Method: ](https://apidocs.io/img/method.png ".MessagingController.getMessageStatus") getMessageStatus

> Get Message Status


```javascript
function getMessageStatus(messageId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageId |  ``` Required ```  | Unique identifier of a message - it is the value returned from a previous POST call to https://api.telstra.com/v2/messages/sms |



#### Example Usage

```javascript

    var messageId = 'messageId';

    controller.getMessageStatus(messageId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition the request cannot be processed e.g. email is required and it is not provided in the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |
| 0 | An internal error occurred when processing the request |




### <a name="retrieve_messages"></a>![Method: ](https://apidocs.io/img/method.png ".MessagingController.retrieveMessages") retrieveMessages

> Retrieve Messages


```javascript
function retrieveMessages(callback)
```

#### Example Usage

```javascript


    controller.retrieveMessages(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition the request cannot be processed e.g. email is required and it is not provided in the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |
| 0 | An internal error occurred when processing the request |




### <a name="create_send_message"></a>![Method: ](https://apidocs.io/img/method.png ".MessagingController.createSendMessage") createSendMessage

> Send Message


```javascript
function createSendMessage(payload, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| payload |  ``` Required ```  | A JSON or XML payload containing the recipient's phone number and text message.
The recipient number should be in the format '04xxxxxxxx' where x is a digit |



#### Example Usage

```javascript

    var payload = new SendSMSRequest({"key":"value"});

    controller.createSendMessage(payload, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition the request cannot be processed e.g. email is required and it is not provided in the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |
| 0 | An internal error occurred when processing the request |




### <a name="get_mms_status"></a>![Method: ](https://apidocs.io/img/method.png ".MessagingController.getMMSStatus") getMMSStatus

> Get MMS Status


```javascript
function getMMSStatus(messageid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageid |  ``` Required ```  | Unique identifier of a message - it is the value returned from a previous POST call to https://api.telstra.com/v2/messages/mms |



#### Example Usage

```javascript

    var messageid = 'messageid';

    controller.getMMSStatus(messageid, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition the request cannot be processed e.g. email is required and it is not provided in the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |
| 0 | An internal error occurred when processing the request |




### <a name="create_send_mms"></a>![Method: ](https://apidocs.io/img/method.png ".MessagingController.createSendMMS") createSendMMS

> Send MMS


```javascript
function createSendMMS(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | A JSON or XML payload containing the recipient's phone number and MMS message.The recipient number should be in the format '04xxxxxxxx' where x is a digit |



#### Example Usage

```javascript

    var body = new SendMMSRequest({"key":"value"});

    controller.createSendMMS(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition the request cannot be processed e.g. email is required and it is not provided in the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |
| 0 | An internal error occurred when processing the request |




[Back to List of Controllers](#list_of_controllers)

## <a name="o_auth_authorization_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OAuthAuthorizationController") OAuthAuthorizationController

### Get singleton instance

The singleton instance of the ``` OAuthAuthorizationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OAuthAuthorizationController;
```

### <a name="create_request_token"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorizationController.createRequestToken") createRequestToken

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```javascript
function createRequestToken(authorization, scope, formParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```javascript

    var authorization = 'Authorization';
    var scope = 'scope';
    // key-value map for optional form parameters
    var formParams = [];

    controller.createRequestToken(authorization, scope, formParams, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="create_request_token1"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorizationController.createRequestToken1") createRequestToken1

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```javascript
function createRequestToken1(authorization, scope, formParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```javascript

    var authorization = 'Authorization';
    var scope = 'scope';
    // key-value map for optional form parameters
    var formParams = [];

    controller.createRequestToken1(authorization, scope, formParams, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




[Back to List of Controllers](#list_of_controllers)



