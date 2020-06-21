const express = require('express')
const routes = express.Router()


routes.get('/', function (req, res) {
    return res.render("layout.njk")
})

routes.get('')



module.exports = routes 