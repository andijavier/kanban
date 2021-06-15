const { Task } = require('../models')

function authorization(req, res, next) {
    let taskId = +req.params.id
    let userId = +req.loggedUser.id
    Task.findByPk(taskId)
        .then(data => {
            if (data) {
                if (data.UserId === userId) {
                    next()
                } else {
                    next({name: 'Unauthorized'})
                }
            } else {
                next({name: 'Not Found'})
            }
        })
        .catch(err =>{
            next({message: err.message})
        })
}

module.exports = authorization