const express = require('express');
var request = require('request');
var fs = require('fs');
var path = require('path');
var lib = require('telstra-sms-messaging/lib');
const oAuthManager = lib.OAuthManager;
var controller = lib.MessagingController;

const router = express.Router();
const errorTitle = 'An error occured!';

// client_id and client_secret as set in the .env file
lib.Configuration.oAuthClientId = process.env.CLIENT_ID;
lib.Configuration.oAuthClientSecret = process.env.CLIENT_SECRET;

// token callback
lib.Configuration.oAuthTokenUpdateCallback = function (token) {
    console.log('new token', token);
};

// message status callback route, emits the incomming message back to the client using socket.io
router.post('/messageStatus', (req, res, next) => {
    var io = req.app.get('socketio');
    io.emit('message_status', req.body);

    res.status(200).json({
        title: 'Status Received'
    });
});

// message received callback route, emits the incomming message back to the client using socket.io
router.post('/receiveMessage', (req, res, next) => {
    var io = req.app.get('socketio');
    io.emit('message_received', req.body);

    res.status(200).json({
        title: 'Message Received'
    });
});

// called on every request. Checks that the token is still valid before continuing with the request
router.use('/', (req, res, next) => {
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
            return res.status(exception.errorCode).json({
                title: `${exception.errorCode} - ${errorTitle}`,
                message: exception.errorMessage
            });
        });
    }
});

// send an SMS message
router.post('/send', (req, res, next) => {
    controller.createSendSMS(req.body, (error, response, context) => {
        if (error) {
            var errorMessage = '';
            if (error.errorCode === 401) {
                // if we get a 401 (invalid credentials) then reset the token
                lib.Configuration.oAuthToken = {};
                lib.Configuration.oAuthClientId = process.env.CLIENT_ID;
                lib.Configuration.oAuthClientSecret = process.env.CLIENT_SECRET;

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

// send an MMS message
router.post('/sendMMS', (req, res, next) => {
    controller.createSendMMS(req.body, (error, response, context) => {
        if (error) {
            var errorMessage = '';
            if (error.errorCode === 401) {
                // if we get a 401 (invalid credentials) then reset the token
                lib.Configuration.oAuthToken = {};
                lib.Configuration.oAuthClientId = process.env.CLIENT_ID;
                lib.Configuration.oAuthClientSecret = process.env.CLIENT_SECRET;

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
            message: 'MMS Sent!',
            obj: response
        });
    });
});

module.exports = router;