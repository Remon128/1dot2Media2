const mongoose = require('mongoose');
const PortfolioFooterSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Title: String,
    ImageUrl: String,
 });
module.exports = mongoose.model('PortfolioFooterModel', PortfolioFooterSchema);