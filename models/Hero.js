const mongoose = require('mongoose')

const HeroSchema = mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
})

const HeroModel = mongoose.model('hero', HeroSchema)

module.exports = HeroModel