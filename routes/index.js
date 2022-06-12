const express=require('express');
const Router=express.Router();
const { checkAuth }=require('../config/middleware');

Router.get('/',(req,res)=>{
    res.render('index')
});

// Routes for authentications
Router.use('/auth',require('./auth'));

// Routes for Room
Router.use('/room',checkAuth,require('./room'));

// Routes for user
Router.use('/user',checkAuth,require('./user'));



module.exports=Router;