const express = require("express");
const app = express();
const portfolio = require('../model/PortfolioModel');
const router = express.Router();
const mongoose = require('mongoose');
router.post('/', (req, res, next) => {
    const portfolioItem = new portfolio({
        _id: new mongoose.Types.ObjectId(),
        Title: req.body.Title,
        ImageUrl: req.body.ImageUrl,
        Description: req.body.Description

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
    portfolio.find().exec().then(doc => {
        res.status(200).json({ doc });
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json({ message: "Can`t find your request please check your id", error: err })
    });
});


router.get('/:id', (req, res, next) => {
    const itemID = req.params.id;
    portfolio.findById(itemID)
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
    
    portfolio.update({ _id: id }, { $set: updateOps })
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
    portfolio.deleteOne({ _id: itemID }).exec().then(result => {
        res.status(200).json({ message: "Removed Succesfully", result });
    }).catch(err => {
        res.status(500).json({ erorr: err });
    });
});
module.exports = router;