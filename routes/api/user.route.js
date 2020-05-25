const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();
const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERAL = require('../../constants/error-literals.constant');
const MODEL = require('../../constants/models.constant');
const User = mongoose.model(MODEL.USER);

const {
    ROUTES
} = require('../../constants/routes.constant');
const GLOBAL = require('../../constants/global.constant');

const STATUS_CODE = require('../../constants/global.constant');

const joiMiddleware = require('../../middlewares/joi.middleware');
const {
    userObj
}= require('../../joi-validator/use.validator');


router.post(`${ROUTES.USER.CREATE_USER.URL}`,  async (req, res, next) => {
    console.log('inside')
    try {
const {body} =req;
const email = body.email.toLowerCase();

// const isUSerExists = await User.find( { email } )
// if(isUSerExists&& Object.keys(isUSerExists).length)
// {
//     return apiHelper.failure(res,[],ERROR_LITERAL.USER.CREATE_USER.IS_EXISTS,GLOBAL.STATUS_CODE.BAD_REQUEST )
// }
const userInstance = new User({
    ...body
})
console.log('user',userInstance)
const user = await userInstance.save();
if(user && Object.keys(user).length)
{
    return apiHelper.success(res,{user}, ERROR_LITERAL.USER.CREATE_USER.SUCCESS, GLOBAL.STATUS_CODE.SUCCESS)
}
return apiHelper.failure(res,[],ERROR_LITERAL.USER.CREATE_USER.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)
    }
})


module.exports = router;