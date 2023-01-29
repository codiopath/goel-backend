const mongoose = require('mongoose')

const ReportSchema = mongoose.Schema({
    patientName: {
        type: String
    },
    patientId: {
        type: String,
        unique: true
    },
    reportFile: {
        type: String
    }
})

const ReportModel = mongoose.model('report', ReportSchema)

module.exports = ReportModel