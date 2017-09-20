/**
  * @module TelstraMessagingAPILib
  *
  * The Telstra SMS Messaging API allows your applications to send and receive SMS text messages
  * from Australia's leading network operator.  It also allows your application to track the
  * delivery status of both sent and received SMS messages.
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const MessagingController = require('./Controllers/MessagingController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const MessageSentResponse = require('./Models/MessageSentResponse');
const OutboundPollResponse = require('./Models/OutboundPollResponse');
const StatusEnum = require('./Models/StatusEnum');
const MessageTypeEnum = require('./Models/MessageTypeEnum');
const Message = require('./Models/Message');
const SendSMSRequest = require('./Models/SendSMSRequest');
const SendMMSRequest = require('./Models/SendMMSRequest');
const MMSContent = require('./Models/MMSContent');
const InboundPollResponse = require('./Models/InboundPollResponse');
const OAuthScopeEnum = require('./Models/OAuthScopeEnum');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const ErrorErrorErrorException = require('./Exceptions/ErrorErrorErrorException');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of TelstraMessagingAPILib
    Configuration,
    Environments,
    OAuthManager,
    // controllers of TelstraMessagingAPILib
    MessagingController,
    OAuthAuthorizationController,
    // models of TelstraMessagingAPILib
    MessageSentResponse,
    OutboundPollResponse,
    StatusEnum,
    MessageTypeEnum,
    Message,
    SendSMSRequest,
    SendMMSRequest,
    MMSContent,
    InboundPollResponse,
    OAuthScopeEnum,
    OAuthToken,
    OAuthProviderErrorEnum,
    // exceptions of TelstraMessagingAPILib
    ErrorErrorErrorException,
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
