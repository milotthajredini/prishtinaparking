var Payparking = require('../models/Payparking');
var express =require('express');
var mongoose =require('mongoose');
var router =express.Router();

router.get('/',function(req,res,next){
    Payparking.find(function (err,payparking){
        if(err) return next(err);
        res.json(payparking);
    });
});

router.get('/:id', function(req,res,next){
    Payparking.findById(req.params.id, function (err,post){
        res.json(post);
    });
});

router.post('/',function(req,res,next){
    Payparking.create(req.body,function (err,post){
        if(err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req,res,next){
    console.log(req.body);
    Payparking.findByIdAndUpdate(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

router.delete('/:id',function(req,res,next){
    Payparking.findByIdAndRemove(req.paras.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports=router;