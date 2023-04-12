const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const path = require('path');


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    user.save()
        .then(user => {
            if (req.body.roles) {
                Role.find({
                        name: {
                            $in: req.body.roles
                        }
                    })
                    .then(roles => {
                        user.roles = roles.map(role => role._id);
                        return user.save();
                    })
                    .then(() => {
                        res.redirect('/index');
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the user."
                        });
                    });
            } else {
                Role.findOne({
                        name: "user"
                    })
                    .then(role => {
                        user.roles = [role._id];
                        return user.save();
                    })
                    .then(() => {
                        res.redirect('/index');
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the user."
                        });
                    });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};


exports.signin = (req, res) => {
    User.findOne({
            username: req.body.username
        })
        .populate("roles", "-__v")
        .exec()
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User Not found."
                });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({
                id: user.id
            }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }
            // Redirect to /login route
            res.redirect('/index');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while signing in."
            });
        });
};

exports.logout = (req, res) => {
    res.clearCookie("authToken"); // Limpa o cookie de autenticação
    res.redirect("/login"); // Redireciona para a página de login
  };
  