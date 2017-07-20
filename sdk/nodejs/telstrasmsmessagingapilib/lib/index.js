/**
  * @module TelstraSMSMessagingAPILib
  *
  * The Telstra SMS Messaging API allows your applications to send and receive SMS text messages from Australia's leading network operator. It also allows your application to track the delivery status of both sent and received SMS messages. 
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const SMSController = require('./Controllers/SMSController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const Message = require('./Models/Message');
const MessageSentResponse = require('./Models/MessageSentResponse');
const SendSMSRequest = require('./Models/SendSMSRequest');
const MessageTypeEnum = require('./Models/MessageTypeEnum');
const InboundPollResponse = require('./Models/InboundPollResponse');
const OutboundPollResponse = require('./Models/OutboundPollResponse');
const StatusEnum = require('./Models/StatusEnum');
const OAuthScopeEnum = require('./Models/OAuthScopeEnum');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const ErrorErrorException = require('./Exceptions/ErrorErrorException');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of TelstraSMSMessagingAPILib
    Configuration,
    Environments,
    OAuthManager,
    // controllers of TelstraSMSMessagingAPILib
    SMSController,
    OAuthAuthorizationController,
    // models of TelstraSMSMessagingAPILib
    Message,
    MessageSentResponse,
    SendSMSRequest,
    MessageTypeEnum,
    InboundPollResponse,
    OutboundPollResponse,
    StatusEnum,
    OAuthScopeEnum,
    OAuthToken,
    OAuthProviderErrorEnum,
    // exceptions of TelstraSMSMessagingAPILib
    ErrorErrorException,
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
