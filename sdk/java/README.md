# Prerequisite

## Provisioning a number
To get a dedicated number, invoke the provisioning API
```sh
#!/bin/bash
curl -X POST \
  https://slot2.apipractice.t-dev.telstra.net/v2/messages/provisioning/subscriptions \
  -H 'authorization: Bearer TOKEN' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
  "activeDays":30,
  "notifyURL":"http://example.com/callback"
}'
```
Parameters for the provisioning API are;

| Parameter |Mandatory| Description |
| --- | --- | --- |
| `activeDays` | N | The number of days before the number will be released and quarantined. |
| `notifyURL` | N | A callback URL that will be POSTed to whenever a new message arrives at this destination address. If this is not provided then you can make use the Get Replies API to poll for messages |

### Response
A typical response will look like;
```{
    "destinationAddress": "+61412356789"
}
```
The fields mean;

| Field | Description |
| --- | --- |
| `destinationAddress` | The provisioned number assigned to your app. Your customers can send replies to this number. If the `notifyURL` is provided then the replies will be POSTed to it. |

# Getting started

The Telstra SMS Messaging API allows your applications to send and receive SMS text messages from Australia's leading network operator.
It also allows your application to track the delivery status of both sent and received SMS messages.


## How to Build

The generated code uses a few Maven dependencies e.g., Jackson, UniRest,
and Apache HttpClient. The reference to these dependencies is already
added in the pom.xml file will be installed automatically. Therefore,
you will need internet access for a successful build.

* In order to open the client library in Eclipse click on ``` File -> Import ```.

![Importing SDK into Eclipse - Step 1](https://apidocs.io/illustration/java?step=import0&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

* In the import dialog, select ``` Existing Java Project ``` and click ``` Next ```.

![Importing SDK into Eclipse - Step 2](https://apidocs.io/illustration/java?step=import1&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

* Browse to locate the folder containing the source code. Select the detected location of the project and click ``` Finish ```.

![Importing SDK into Eclipse - Step 3](https://apidocs.io/illustration/java?step=import2&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

* Upon successful import, the project will be automatically built by Eclipse after automatically resolving the dependencies.

![Importing SDK into Eclipse - Step 4](https://apidocs.io/illustration/java?step=import3&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

## How to Use

The following section explains how to use the TelstraSMSMessagingAPI library in a new console project.

### 1. Starting a new project

For starting a new project, click the menu command ``` File > New > Project ```.

![Add a new project in Eclipse](https://apidocs.io/illustration/java?step=createNewProject0&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

Next, choose ``` Maven > Maven Project ```and click ``` Next ```.

![Create a new Maven Project - Step 1](https://apidocs.io/illustration/java?step=createNewProject1&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

Here, make sure to use the current workspace by choosing ``` Use default Workspace location ```, as shown in the picture below and click ``` Next ```.

![Create a new Maven Project - Step 2](https://apidocs.io/illustration/java?step=createNewProject2&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

Following this, select the *quick start* project type to create a simple project with an existing class and a ``` main ``` method. To do this, choose ``` maven-archetype-quickstart ``` item from the list and click ``` Next ```.

![Create a new Maven Project - Step 3](https://apidocs.io/illustration/java?step=createNewProject3&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

In the last step, provide a ``` Group Id ``` and ``` Artifact Id ``` as shown in the picture below and click ``` Finish ```.

![Create a new Maven Project - Step 4](https://apidocs.io/illustration/java?step=createNewProject4&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

### 2. Add reference of the library project

The created Maven project manages its dependencies using its ``` pom.xml ``` file. In order to add a dependency on the *TelstraSMSMessagingAPILib* client library, double click on the ``` pom.xml ``` file in the ``` Package Explorer ```. Opening the ``` pom.xml ``` file will render a graphical view on the cavas. Here, switch to the ``` Dependencies ``` tab and click the ``` Add ``` button as shown in the picture below.

![Adding dependency to the client library - Step 1](https://apidocs.io/illustration/java?step=testProject0&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

Clicking the ``` Add ``` button will open a dialog where you need to specify TelstraSMSMessagingAPI in ``` Group Id ``` and TelstraSMSMessagingAPILib in the ``` Artifact Id ``` fields and remember to change the version to ``` 2.1.0 ```. Once added click ``` OK ```. Save the ``` pom.xml ``` file.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/java?step=testProject1&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)


### 3. Write sample code 

Once the ``` SimpleConsoleApp ``` is created, a file named ``` App.java ``` will be visible in the *Package Explorer* with a ``` main ``` method. This is the entry point for the execution of the created project.
Here, you can add code to initialize the client library and instantiate a *Controller* class. Sample code to initialize the client library and using controller methods is given in the subsequent sections.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/java?step=testProject2&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=net.telstra.tdev.apipractice.slot2)

## How to Test

The generated code and the server can be tested using automatically generated test cases. 
JUnit is used as the testing framework and test runner.

In Eclipse, for running the tests do the following:

1. Select the project *TelstraSMSMessagingAPILib* from the package explorer.
2. Select "Run -> Run as -> JUnit Test" or use "Alt + Shift + X" followed by "T" to run the Tests.

## Initialization

### Authentication
In order to setup authentication and initialization of the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthClientSecret | OAuth 2 Client Secret |



API client can be initialized as following.

```java
// Configuration parameters and credentials
String oAuthClientId = "oAuthClientId"; // OAuth 2 Client ID
String oAuthClientSecret = "oAuthClientSecret"; // OAuth 2 Client Secret

TelstraSMSMessagingAPIClient client = new TelstraSMSMessagingAPIClient(oAuthClientId, oAuthClientSecret);
```

You must authorize now authorize the client.

### Authorizing your client

This SDK uses *OAuth 2.0 authorization* to authorize the client.

The `authorize()` method will exchange the OAuth client credentials for an *access token*.
The access token is an object containing information for authorizing client requests.

 You must pass the *[scopes](#scopes)* for which you need permission to access.
```java
try {
    client.auth().authorize(scopes);
} catch (Throwable e) {
    // TODO Handle exception
}
```

The client can now make authorized endpoint calls.


### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the `net.telstra.tdev.apipractice.slot2.Models.OAuthScopeEnum` enumeration.

| Scope Name | Description |
| --- | --- |
| `SMS` |  |

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

```java
// store token
storeAccessToken(net.telstra.tdev.apipractice.slot2.Configuration.oAuthToken);
```

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in `Configuration` along with the other configuration parameters before creating the client:

```java
// load token later...
net.telstra.tdev.apipractice.slot2.Configuration.oAuthToken = loadAccessToken();

// Set other configuration, then instantiate client
client = new TelstraSMSMessagingAPIClient();
```

### Complete example

```java
package com.example;

import java.util.LinkedList;
import java.util.List;

import net.telstra.tdev.apipractice.slot2.models.OAuthScopeEnum;

public class Main {
    public Main() {
        // Configuration parameters and credentials
        String oAuthClientId = "oAuthClientId"; // OAuth 2 Client ID
        String oAuthClientSecret = "oAuthClientSecret"; // OAuth 2 Client Secret
        
        TelstraSMSMessagingAPIClient client = new TelstraSMSMessagingAPIClient(oAuthClientId, oAuthClientSecret);

        List<OAuthScopeEnum> scopes = new LinkedList<OAuthScopeEnum>();
        scopes.add(OAuthScopeEnum.SMS);
        
        try {
            // obtain a new access token
            client.auth().authorize(scopes, null);
        } catch (Throwable e) {
            // TODO Catch auth error
        }
        
        // the client is now authorized; you can use client to make endpoint calls
    }
}
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [SMSController](#sms_controller)
* [OAuthAuthorizationController](#o_auth_authorization_controller)

## <a name="sms_controller"></a>![Class: ](https://apidocs.io/img/class.png "net.telstra.tdev.apipractice.slot2.controllers.SMSController") SMSController

### Get singleton instance

The singleton instance of the ``` SMSController ``` class can be accessed from the API Client.

```java
SMSController sMS = client.getSMS();
```

### <a name="create_send_message_async"></a>![Method: ](https://apidocs.io/img/method.png "net.telstra.tdev.apipractice.slot2.controllers.SMSController.createSendMessageAsync") createSendMessageAsync

> Send an SMS to a Australian or International mobile phone.


```java
void createSendMessageAsync(
        final SendSMSRequest payload,
        final APICallBack<MessageSentResponse> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| payload |  ``` Required ```  | A JSON or XML payload containing the recipient's phone number and text message.
The recipient number should be in the format '04xxxxxxxx' where x is a digit |


#### Example Usage

```java
try {
    SendSMSRequest payload = new SendSMSRequest();
    // Invoking the API call with sample inputs
    sMS.createSendMessageAsync(payload, new APICallBack<MessageSentResponse>() {
        public void onSuccess(HttpContext context, MessageSentResponse response) {
            // TODO success callback handler
        }
        public void onFailure(HttpContext context, Throwable error) {
            // TODO failure callback handler
        }
    });
} catch(JsonProcessingException e) {
    // TODO Auto-generated catch block
    e.printStackTrace();
}
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
| 500 | An internal error occurred when processing the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |



### <a name="get_message_status_async"></a>![Method: ](https://apidocs.io/img/method.png "net.telstra.tdev.apipractice.slot2.controllers.SMSController.getMessageStatusAsync") getMessageStatusAsync

> Retrieve the status of a single outgoing SMS message.


```java
void getMessageStatusAsync(
        final String messageId,
        final APICallBack<OutboundPollResponse> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageId |  ``` Required ```  | Unique identifier of a message - it is the value returned from a previous POST call to https://api.telstra.com/v2/messages/sms |


#### Example Usage

```java
String messageId = "messageId";
// Invoking the API call with sample inputs
sMS.getMessageStatusAsync(messageId, new APICallBack<OutboundPollResponse>() {
    public void onSuccess(HttpContext context, OutboundPollResponse response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
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
| 500 | An internal error occurred when processing the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |



### <a name="retrieve_messages_async"></a>![Method: ](https://apidocs.io/img/method.png "net.telstra.tdev.apipractice.slot2.controllers.SMSController.retrieveMessagesAsync") retrieveMessagesAsync

> Retrieve the unread incoming SMS messages


```java
void retrieveMessagesAsync(final APICallBack<List<InboundPollResponse>> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
sMS.retrieveMessagesAsync(new APICallBack<List<InboundPollResponse>>() {
    public void onSuccess(HttpContext context, List<InboundPollResponse> response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
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
| 500 | An internal error occurred when processing the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |



[Back to List of Controllers](#list_of_controllers)

## <a name="o_auth_authorization_controller"></a>![Class: ](https://apidocs.io/img/class.png "net.telstra.tdev.apipractice.slot2.controllers.OAuthAuthorizationController") OAuthAuthorizationController

### Get singleton instance

The singleton instance of the ``` OAuthAuthorizationController ``` class can be accessed from the API Client.

```java
OAuthAuthorizationController oAuthAuthorization = client.getOAuthAuthorization();
```

### <a name="create_request_token_async"></a>![Method: ](https://apidocs.io/img/method.png "net.telstra.tdev.apipractice.slot2.controllers.OAuthAuthorizationController.createRequestTokenAsync") createRequestTokenAsync

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void createRequestTokenAsync(
        final String authorization,
        final String scope,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthToken> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
String authorization = "Authorization";
String scope = "scope";
// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.createRequestTokenAsync(authorization, scope, formParams, new APICallBack<OAuthToken>() {
    public void onSuccess(HttpContext context, OAuthToken response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="create_request_token_async"></a>![Method: ](https://apidocs.io/img/method.png "net.telstra.tdev.apipractice.slot2.controllers.OAuthAuthorizationController.createRequestTokenAsync") createRequestTokenAsync

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void createRequestTokenAsync(
        final String authorization,
        final String scope,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthToken> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
String authorization = "Authorization";
String scope = "scope";
// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.createRequestTokenAsync(authorization, scope, formParams, new APICallBack<OAuthToken>() {
    public void onSuccess(HttpContext context, OAuthToken response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



[Back to List of Controllers](#list_of_controllers)



