const { verifyToken } = require('../helper/jwt')
const { User } = require('../models')

function authenticate(req, res, next) {
    const { access_token } = req.headers
    if (access_token) {
        let decoded = verifyToken(access_token)
        User.findOne({where: { email: decoded.email}})
            .then(user => {
                if (user) {
                    req.loggedUser = {
                        id: decoded.id,
                        email: decoded.email
                    }
                    next()
                } else {
                    next({name: 'Invalid Login'})
                }
            })
            .catch(err => {
                next(err)
            })
    } else {
        next({name: 'Invalid Login'})
    }
}

module.exports = authenticate