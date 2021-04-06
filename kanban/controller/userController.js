const { User, Organization } = require('../models')
const { comparePassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')
const { OAuth2Client } = require('google-auth-library')

class ControllerUser {
    static register(req, res, next) {
        const { email, password, username, organization } = req.body
        Organization.findOne({where: {name: organization}})
            .then(data => {
                if (data) {
                    return data
                } else {
                    return Organization.create({name: organization})
                }
            })
            .then(data => {
                return User.create({email, password, username, OrganizationId: data.id})
            })
            .then(data => {
                res.status(201).json({
                    id: data.id,
                    username: data.username,
                    email: data.email,
                    OrganizationId: data.OrganizationId
                })
            })
            .catch(err => {
                if (err.errors[0].type === 'unique violation') {
                    next({message: 'Email/username already exists'})
                } else {
                    next({message: err.message});
                }
            })
    }

    static login(req, res, next) {
        const { email, password, username} = req.body
        User.findOne({where: {email: email}})
            .then(data => {
                if (data) {
                    let loginSuccess = comparePassword(password, data.password)
                    if (loginSuccess) {
                        const token = generateToken({
                            id: data.id,
                            email: data.email
                        })
                        res.status(200).json({access_token: token})
                    } else {
                        next({name: 'Invalid Login'})
                    }
                }
            })
            .catch(err => {
                next({message: err.message})
            })
    }

    static googlelogin(req, res, next) {
        const id_token = req.body.id_token
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let email;
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID
        }).then(ticket => {
            const payload = ticket.payload()
            email = payload.email
            return User.findOne({where: {email: email}})
        }).then(user => {
            if (user) {
                return user
            } else {
                let username = email.split('@')
                return User.create({
                    email: email,
                    password: `${Math.random() * 10000}4tTh5ho5u4bk`,
                    username: username[0] + 'kanban'
                })
            }
        }).then(user => {
            const token = generateToken({
                id: user.id,
                email: user.email
            })
            res.status(200).json({access_token: token})
        }).catch(err => {
            next({message: err.message})
        })
        
    }
}

module.exports = ControllerUser