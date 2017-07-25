const express = require('express');
var lib = require('telstrasmsmessagingapilib/lib');
const oAuthManager = lib.OAuthManager;
var controller = lib.SMSController;

const router = express.Router();

const errorTitle = 'An error occured!';
const _credentials = require('../api-credentials');

lib.Configuration.oAuthClientId = _credentials.CLIENT_ID;
lib.Configuration.oAuthClientSecret = _credentials.CLIENT_SECRET;

lib.Configuration.oAuthTokenUpdateCallback = function (token) {
    console.log('new token', token);
};

// called on every request except for /token. Checks that the token is still valid before continuing with the request
router.use('/', function (req, res, next) {
    if (oAuthManager.isTokenSet()) {
        // token is already stored in the client
        // make API calls as required
        next();
    } else {
        const scopes = [lib.OAuthScopeEnum.SMS];
        const promise = oAuthManager.authorize(scopes);
        promise.then((success) => {
            // client authorized. API calls can be made
            next();
        }, (exception) => {
            // error occurred, exception will be of type lib/Exceptions/OAuthProviderException
            return res.status(exception.errorCode).json({
                title: `${exception.errorCode} - ${errorTitle}`,
                message: exception.errorMessage
            });
        });
    }
});

router.post('/send', function (req, res, next) {
    controller.createSendMessage(req.body, function (error, response, context) {
        if (error) {
            var errorMessage = '';
            if(error.errorCode === 401 || error.errorCode === 500) {
                // if we get a 401 (invalid credentials) then reset the token
                lib.Configuration.oAuthToken = {};
                lib.Configuration.oAuthClientId = _credentials.CLIENT_ID;
                lib.Configuration.oAuthClientSecret = _credentials.CLIENT_SECRET;

                errorMessage = 'Your token may have expired and has now been reset. Please try again';
            }
            return res.status(error.errorCode).json({
                title: `${error.errorCode} - ${errorTitle}`,
                message: `${error.errorMessage}. ${errorMessage}`
            });
        }
        res.status(200).json({
            title: 'Success',
            type: 'success',
            message: 'Message(s) sent!',
            obj: response
        });
    });
});

router.post('/messageStatus', function(req, res, next) {
    var io = req.app.get('socketio');
    io.emit('message_status', req.body);  

    res.status(200).json({
        title: 'Message Received'
    });
});

router.post('/receiveMessage', function(req, res, next) {
    var io = req.app.get('socketio');
    io.emit('message_received', req.body);  

    res.status(200).json({
        title: 'Message Received'
    });
});

module.exports = router;