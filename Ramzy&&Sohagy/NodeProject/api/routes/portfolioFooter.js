const express = require("express");
const app = express();
const portfolioFooter = require('../model/PortfolioFooterModel');
const router = express.Router();
const mongoose = require('mongoose');
router.post('/', (req, res, next) => {
    const portfolioItem = new portfolioFooter({
        _id: new mongoose.Types.ObjectId(),
        Title: req.body.Title,
        ImageUrl: req.body.ImageUrl
    });
    portfolioItem
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Added Succesfullty",
                portfolioItemData: portfolioItem
            });
        })
        .catch(err => { console.log(err) });

});

router.get('/All', (req, res, next) => {
    portfolioFooter.find().exec().then(doc => {
        res.status(200).json({ doc });
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json({ message: "Can`t find your request please check your id", error: err })
    });
});
router.get('/:id', (req, res, next) => {
    const itemID = req.params.id;
    portfolioFooter.findById(itemID)
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Can`t find your request please check your id", error: err })
        });
});

router.patch("/:id", (req, res, next) => {
    const id = req.params.id;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    
    portfolioFooter.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
});





router.delete('/:id', (req, res, next) => {
    const itemID = req.params.id;
    portfolioFooter.deleteOne({ _id: itemID }).exec().then(result => {
        res.status(200).json({ message: "Removed Succesfully", result });
    }).catch(err => {
        res.status(500).json({ erorr: err });
    });
});
module.exports = router;