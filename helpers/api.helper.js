const GLOBAL = require('../constants/global.constant');

const success = (res, data = {}, message = '') => {
    return res.status(GLOBAL.STATUS_CODE.SUCCESS).json({
        success: true,
        message,
        data
    });
};

const failure = (res, errors = [], message = '') => {
    return res.status(GLOBAL.STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        success: false,
        message,
        errors
    })
}

module.exports = {
    success,
    failure
}