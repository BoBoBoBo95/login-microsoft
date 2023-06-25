/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log(req.session.isAuthenticated)
    if(req.session.isAuthenticated)
    {
        console.log(req.session)
        var jsonString = JSON.stringify(req.session.account);
        var encodedString = encodeURIComponent(jsonString);
        const tmp = "http://localhost:3000/login?userInfo="+encodedString
        res.redirect(tmp);
    }
    else
    {
        res.redirect('http://localhost:4000/auth/signin');
    }
});

module.exports = router;
