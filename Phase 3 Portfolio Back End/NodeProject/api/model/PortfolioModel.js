const mongoose = require('mongoose');
const PortfolioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Title: String,
    ImageUrl: String,
    Description: String
});
module.exports = mongoose.model('PortfolioModel', PortfolioSchema);