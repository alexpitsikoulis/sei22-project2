const express = require('express')

const artistApi = require('../models/artists.js')
const artistRouter = express.Router()

artistRouter.get('/', (req, res) => {
  artistApi.getArtists()
    .then((artists) => {
      res.render('artists/artists', {artists})
    })
})

artistRouter.get('/:artistId', (req, res) => {
  artistApi.getArtist(req.params.artistId)
    .then((artist) => {
      res.render('artists/artist', {artist})
    })
})

artistRouter.post('/', (req, res) => {
  artistApi.addArtist(req.body)
    .then(() => {
      res.send('Artist created')
    })
})

artistRouter.put('/:artistId', (req, res) => {
  artistApi.editArtist(req.params.artistId, req.body)
    .then(() => {
      res.send('Artist updated')
    })
})

artistRouter.delete('/:artistId', (req, res) => {
  artistApi.deleteArtist(req.params.artistId)
    .then(() => {
      res.send('Artist deleted')
    })
})
module.exports = {
  artistRouter
}
