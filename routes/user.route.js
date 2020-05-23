const express = require('express');
const router = express.Router();
const {
    ROUTES
} = require('../constants/routes.constant');
const ERROR_LITERAL = require('../constants/error-literals.constant');
const apiHelper = require('../helpers/api.helper');
const STATUS_CODE = require('../constants/global.constant');
const {
    USER
} = require('../constants/models.constant');


router.post(`${ROUTES.USER.CREATE_USER.URL}`, async (req, res, next) => {
    try {

    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)
    }
})


module.exports = router;