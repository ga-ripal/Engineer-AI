const REQUEST_METHOD = require('./request-methos.constant')
const ROUTES = {
    USER: {
        CREATE_USER: {
            URL: '/users',
            METHOD: REQUEST_METHOD.POST

        },
        UPDATE_USER: {
            URL: '/users/:id',
            METHOD: REQUEST_METHOD.PUT,
        },
        GET_ALL_USER: {
            URL: '/users',
            METHOD: REQUEST_METHOD.GET,
        },
        GET_USER: {
            URL: '/users/:id',
            METHOD: REQUEST_METHOD.GET
        },
        DELETE_USER: {
            URL: '/users/:id',
            METHOD: REQUEST_METHOD.DELETE
        }
    }
}
module.exports = {
    ROUTES
}