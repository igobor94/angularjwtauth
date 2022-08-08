const User = require('../models/User');

exports.register = function (req, res) {
    const { username, email, password, passwordConfirmation } = req.body
    if (!email || !password) {
        return res.status(422).json({ 'error': 'Please provide email or password' })
    }

    if (password != passwordConfirmation) {
        return res.status(422).json({ 'error': 'Password does not match' })
    }

    User.findOne({ email }, function(err, exisistingUser) {
        if (err) {
            return res.status(422).json({ 'error': 'Oops! Something went Wrong' })
        }
        if (existingUser) {
            return res.status(422).json({ 'error': 'User already exists' })
        }
        else {
            const user = new User({
                username, email, password
            })

            user.save(function (err) {
                if (err) {
                    return res.status(422).json({
                        'error': 'Oops! Something went Wrong'
                    })
                }
                return res.status(200).json({ 'registered': true })
            })
        }
    }
}
exports.login = function (req, res) {}
return res.status(422).json({ 'error': 'Password does not match' })