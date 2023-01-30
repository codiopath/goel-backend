const mongoose = require('mongoose')

const GalleryImageSchema = mongoose.Schema({
    image: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    }
})

const GalleryImageModel = mongoose.model('galleryImage', GalleryImageSchema)

module.exports = GalleryImageModel
