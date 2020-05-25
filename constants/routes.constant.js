const ROUTES = {
    USER: {
        CREATE_USER: {
            URL: '/users',
            METHOD:'POST'
        },
        UPDATE_USER: {
            URL: '/users/:id',
            METHOD:'PUT'

        },
        GET_ALL_USER: {
            URL: '/users',
            METHOD:'GET'

        },
        GET_USER: {
            URL: '/users/:id',
            METHOD:'GET'

        },
        DELETE_USER: {
            URL: '/users/:id',
            METHOD:'DELETE'

        }
    }
}
module.exports = {ROUTES}
