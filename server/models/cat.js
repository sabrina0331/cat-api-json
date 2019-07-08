const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cat_api', { useNewUrlParser: true })

const CatSchema = new mongoose.Schema({
    type: { type: String}},
    {timestamps: true})

module.exports = mongoose.model('Cats',CatSchema)
const Cat = mongoose.model('Cats')