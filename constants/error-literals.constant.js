const ERROR_LITERAL = {
    USER: {
        CREATE_USER: {
            SUCCESS: 'USer created successfully',
            FAILURE: 'User not created'
        },
        UPDATE_USER: {
            SUCCESS: 'USer updated successfully',
            FAILURE: 'User not updated'
        },
        GET_USER: {
            SUCCESS: 'USer get successfully',
        },
        GET_ALL_USER: {
            SUCCESS: 'USer get successfully',
        },
        DELETE_USER: {
            SUCCESS: 'USer deleted successfully',
            FAILURE: 'User not deleted'
        }
    },
    CATCH: {
        ERR: 'Catch, Error occured'
    },
    COMMON_MSG: {
        DATA_NOT_FOUND: 'Data not found'
    }
}
module.exports = ERROR_LITERAL