const { Task, User } = require('../models')

class ControllerTask {
    static getTasks(req, res, next) {
        Task.findAll({include: User})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next({message: err.message})
            })
    }

    static getTaskById(req, res, next) {
        let taskId = +req.params.id
        let userId = +req.loggedUser.id
        Task.findByPk(taskId, {where: {UserId: userId}})
            .then(data => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    next({name: 'Not Found'})
                }
            })
            .catch(err => {
                next({message: err.message})
            })
    }

    static postTask(req, res, next) {
        let userId = +req.loggedUser.id
        let OrganizationId;
        User.findByPk(userId)
            .then(data => {
                OrganizationId = data.OrganizationId
                return Task.create({
                    title: req.body.title,
                    category: req.body.category,
                    priority: req.body.priority,
                    UserId: userId,
                    OrganizationId: OrganizationId
                })
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next({message: err.message})
            })
    }

    static putTask(req, res, next) {
        let taskId = +req.params.id
        let task = {
            title: req.body.title,
            category: req.body.category,
            priority: req.body.priority,
        }
        Task.update(task, {where: {id: taskId}, returning: true})
            .then(data => {
                if (data) {
                    res.status(200).json(data[1][0])
                } else {
                    next({name: 'Not Found'})
                }
            })
            .catch(err => {
                next({message: err.message})
            })
    }

    static patchTask(req, res, next) {
        let taskId = +req.params.id
        let { category } = req.body
        Task.update({category}, {where: {id: taskId}, returning: true})
            .then(data => {
                if (data) {
                    res.status(200).json(data[1][0])
                } else {
                    next({name: 'Not Found'})
                }
            })
            .catch(err => {
                next({message: err.message})
            })
    }

    static deleteTasks(req, res, next) {
        let taskId = +req.params.id
        Task.destroy({where: {id: taskId}})
            .then(data => {
                if (!data) {
                    next({name: 'Not Found'})
                } else {
                    res.status(200).json({message: 'task success to delete'})
                }
            })
            .catch(err => {
                next({message: err.message})
            })
    }
}

module.exports = ControllerTask