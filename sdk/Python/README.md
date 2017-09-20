# Getting started


The Telstra SMS Messaging API allows your applications to send and receive SMS text messages from Australia's leading network operator.

It also allows your application to track the delivery status of both sent and received SMS messages.


## How to Build


You must have Python 2 >=2.7.9 or Python 3 >=3.4 installed on your system to install and run this SDK. This SDK package depends on other Python packages like nose, jsonpickle etc. 
These dependencies are defined in the ```requirements.txt``` file that comes with the SDK.
To resolve these dependencies, you can use the PIP Dependency manager. Install it by following steps at [https://pip.pypa.io/en/stable/installing/](https://pip.pypa.io/en/stable/installing/).

Python and PIP executables should be defined in your PATH. Open command prompt and type ```pip --version```.
This should display the version of the PIP Dependency Manager installed if your installation was successful and the paths are properly defined.

* Using command line, navigate to the directory containing the generated files (including ```requirements.txt```) for the SDK.
* Run the command ```pip install -r requirements.txt```. This should install all the required dependencies.

![Building SDK - Step 1](https://apidocs.io/illustration/python?step=installDependencies&workspaceFolder=Telstra%20Messaging%20API-Python)


## How to Use

The following section explains how to use the Telstramessagingapi SDK package in a new project.

### 1. Open Project in an IDE

Open up a Python IDE like PyCharm. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

![Open project in PyCharm - Step 1](https://apidocs.io/illustration/python?step=pyCharm)

Click on ```Open``` in PyCharm to browse to your generated SDK directory and then click ```OK```.

![Open project in PyCharm - Step 2](https://apidocs.io/illustration/python?step=openProject0&workspaceFolder=Telstra%20Messaging%20API-Python)     

The project files will be displayed in the side bar as follows:

![Open project in PyCharm - Step 3](https://apidocs.io/illustration/python?step=openProject1&workspaceFolder=Telstra%20Messaging%20API-Python&projectName=telstramessagingapi)     

### 2. Add a new Test Project

Create a new directory by right clicking on the solution name as shown below:

![Add a new project in PyCharm - Step 1](https://apidocs.io/illustration/python?step=createDirectory&workspaceFolder=Telstra%20Messaging%20API-Python&projectName=telstramessagingapi)

Name the directory as "test"

![Add a new project in PyCharm - Step 2](https://apidocs.io/illustration/python?step=nameDirectory)
   
Add a python file to this project with the name "testsdk"

![Add a new project in PyCharm - Step 3](https://apidocs.io/illustration/python?step=createFile&workspaceFolder=Telstra%20Messaging%20API-Python&projectName=telstramessagingapi)

Name it "testsdk"

![Add a new project in PyCharm - Step 4](https://apidocs.io/illustration/python?step=nameFile)

In your python file you will be required to import the generated python library using the following code lines

```Python
from telstramessagingapi.telstramessagingapi_client import TelstramessagingapiClient
```

![Add a new project in PyCharm - Step 4](https://apidocs.io/illustration/python?step=projectFiles&workspaceFolder=Telstra%20Messaging%20API-Python&libraryName=telstramessagingapi.telstramessagingapi_client&projectName=telstramessagingapi)

After this you can write code to instantiate an API client object, get a controller object and  make API calls. Sample code is given in the subsequent sections.

### 3. Run the Test Project

To run the file within your test project, right click on your Python file inside your Test project and click on ```Run```

![Run Test Project - Step 1](https://apidocs.io/illustration/python?step=runProject&workspaceFolder=Telstra%20Messaging%20API-Python&libraryName=telstramessagingapi.telstramessagingapi_client&projectName=telstramessagingapi)


## How to Test

You can test the generated SDK and the server with automatically generated test
cases. unittest is used as the testing framework and nose is used as the test
runner. You can run the tests as follows:

  1. From terminal/cmd navigate to the root directory of the SDK.
  2. Invoke 'pip install -r test-requirements.txt'
  3. Invoke 'nosetests'

## Initialization

### Authentication
In order to setup authentication and initialization of the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| o_auth_client_id | OAuth 2 Client ID |
| o_auth_client_secret | OAuth 2 Client Secret |



API client can be initialized as following.

```python
# Configuration parameters and credentials
o_auth_client_id = 'o_auth_client_id' # OAuth 2 Client ID
o_auth_client_secret = 'o_auth_client_secret' # OAuth 2 Client Secret

client = TelstramessagingapiClient(o_auth_client_id, o_auth_client_secret)
```


You must now authorize the client.

### Authorizing your client

This SDK uses *OAuth 2.0 authorization* to authorize the client.

The `authorize()` method will exchange the OAuth client credentials for an *access token*.
The access token is an object containing information for authorizing client requests.

 You must pass the *[scopes](#scopes)* for which you need permission to access.
```python
try:
    client.auth.authorize([OAuthScopeEnum.NSMS])
except OAuthProviderException as ex:
    # handle exception
```

The client can now make authorized endpoint calls.


### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the `telstramessagingapi.models.o_auth_scope_enum.OAuthScopeEnum` enumeration.

| Scope Name | Description |
| --- | --- |
| `NSMS` | NSMS |

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

You can store the access token in a file or a database.

```python
# store token
save_token_to_database(client.config.o_auth_token)
```

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token after creating the client:

```python
client = TelstramessagingapiClient()
client.config.o_auth_token = load_token_from_database()
```

### Complete example

```python
from telstramessagingapi.telstramessagingapi_client import TelstramessagingapiClient
from telstramessagingapi.models.o_auth_scope_enum import OAuthScopeEnum
from telstramessagingapi.exceptions.o_auth_provider_exception import OAuthProviderException

# function for storing token to database
def save_token_to_database(token):
    # code to save the token to database

# function for loading token from database
def load_token_from_database():
    # load token from database and return it (return None if no token exists)

# Configuration parameters and credentials
o_auth_client_id = 'o_auth_client_id' # OAuth 2 Client ID
o_auth_client_secret = 'o_auth_client_secret' # OAuth 2 Client Secret

#  create a new client
client = TelstramessagingapiClient(o_auth_client_id, o_auth_client_secret)

# obtain access token, needed for client to be authorized
previous_token = load_token_from_database()
if previous_token:
    # restore previous access token
    client.config.o_auth_token = previous_token
else:
    # obtain new access token
    try:
        token = client.auth.authorize([OAuthScopeEnum.NSMS])
        save_token_to_database(token)
    except OAuthProviderException as ex:
        # handle exception

# the client is now authorized and you can use controllers to make endpoint calls
```


# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [MessagingController](#messaging_controller)
* [OAuthAuthorizationController](#o_auth_authorization_controller)

## <a name="messaging_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MessagingController") MessagingController

### Get controller instance

An instance of the ``` MessagingController ``` class can be accessed from the API Client.

```python
 messaging_client = client.messaging
```

### <a name="get_sms_status"></a>![Method: ](https://apidocs.io/img/method.png ".MessagingController.get_sms_status") get_sms_status

> Get Message Status

```python
def get_sms_status(self,
                       message_id)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageId |  ``` Required ```  | Unique identifier of a message - it is the value returned from
a previous POST call to https://api.telstra.com/v2/messages/sms |



#### Example Usage

```python
message_id = 'messageId'

result = messaging_client.get_sms_status(message_id)

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does
not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition
the request cannot be processed e.g. email is required and it is not provided
in the request |
| 501 | The HTTP method being used has not yet been implemented for
the requested resource |
| 503 | The service requested is currently unavailable |
| 0 | An internal error occurred when processing the request |




### <a name="retrieve_sms_responses"></a>![Method: ](https://apidocs.io/img/method.png ".MessagingController.retrieve_sms_responses") retrieve_sms_responses

> Retrieve Messages

```python
def retrieve_sms_responses(self)
```

#### Example Usage

```python

result = messaging_client.retrieve_sms_responses()

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does
not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition
the request cannot be processed e.g. email is required and it is not provided
in the request |
| 501 | The HTTP method being used has not yet been implemented for
the requested resource |
| 503 | The service requested is currently unavailable |
| 0 | An internal error occurred when processing the request |




### <a name="create_send_sms"></a>![Method: ](https://apidocs.io/img/method.png ".MessagingController.create_send_sms") create_send_sms

> Send Message

```python
def create_send_sms(self,
                        payload)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| payload |  ``` Required ```  | A JSON or XML payload containing the recipient's phone number and text message.

The recipient number should be in the format '04xxxxxxxx' where x is a digit |



#### Example Usage

```python
payload = SendSMSRequest()

result = messaging_client.create_send_sms(payload)

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does
not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition
the request cannot be processed e.g. email is required and it is not provided
in the request |
| 501 | The HTTP method being used has not yet been implemented for
the requested resource |
| 503 | The service requested is currently unavailable |
| 0 | An internal error occurred when processing the request |




### <a name="get_mms_status"></a>![Method: ](https://apidocs.io/img/method.png ".MessagingController.get_mms_status") get_mms_status

> Get MMS Status

```python
def get_mms_status(self,
                       messageid)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageid |  ``` Required ```  | Unique identifier of a message - it is the value returned from
a previous POST call to https://api.telstra.com/v2/messages/mms |



#### Example Usage

```python
messageid = 'messageid'

result = messaging_client.get_mms_status(messageid)

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does
not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition
the request cannot be processed e.g. email is required and it is not provided
in the request |
| 501 | The HTTP method being used has not yet been implemented for
the requested resource |
| 503 | The service requested is currently unavailable |
| 0 | An internal error occurred when processing the request |




### <a name="create_send_mms"></a>![Method: ](https://apidocs.io/img/method.png ".MessagingController.create_send_mms") create_send_mms

> Send MMS

```python
def create_send_mms(self,
                        body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | A JSON or XML payload containing the recipient's phone number
and MMS message.The recipient number should be in the format '04xxxxxxxx'
where x is a digit |



#### Example Usage

```python
body = SendMMSRequest()

result = messaging_client.create_send_mms(body)

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does
not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition
the request cannot be processed e.g. email is required and it is not provided
in the request |
| 501 | The HTTP method being used has not yet been implemented for
the requested resource |
| 503 | The service requested is currently unavailable |
| 0 | An internal error occurred when processing the request |




[Back to List of Controllers](#list_of_controllers)

## <a name="o_auth_authorization_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OAuthAuthorizationController") OAuthAuthorizationController

### Get controller instance

An instance of the ``` OAuthAuthorizationController ``` class can be accessed from the API Client.

```python
 o_auth_authorization_client = client.o_auth_authorization
```

### <a name="create_request_token"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorizationController.create_request_token") create_request_token

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.

```python
def create_request_token(self,
                             authorization,
                             scope=None,
                             _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
authorization = 'Authorization'
scope = 'scope'
# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.create_request_token(authorization, scope, optional_form_parameters)

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="create_request_token_1"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorizationController.create_request_token_1") create_request_token_1

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.

```python
def create_request_token_1(self,
                               authorization,
                               scope=None,
                               _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
authorization = 'Authorization'
scope = 'scope'
# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.create_request_token_1(authorization, scope, optional_form_parameters)

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




[Back to List of Controllers](#list_of_controllers)



