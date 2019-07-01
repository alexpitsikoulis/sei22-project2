const express = require('express')

const showApi = require('../models/shows.js')
const songApi = require('../models/songs.js')
const songRouter = express.Router({mergeParams: true})

songRouter.get('/', (req, res) => {
    songApi.getSongsByShow(req.params.showId)
        .then((shows) => {
            res.send(shows)
        })
})

module.exports = {
    songRouter
}