const express = require('express');
const mongoose = require('mongoose');
const apiHelper = require('../../helpers/api.helper')
const GLOBAL = require('../../constants/global.constant');
const MODELS = require('../../constants/models.constant');
const {
    ROUTES
} = require('../../constants/routes.constant');
const ERROR_LITERAL = require('../../constants/error-literals.constant');

router.post(`${ROUTES.USER.CREATE_USER.URL}`, async (res, req, next) => {
    try {

    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)
    }
})