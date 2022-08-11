const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.post('/',  upload.array('photos', 2) ,(req, res, next) => {
    console.log('heyyyyyy--------------------')
    console.log(req.files)
    
  })
  

  module.exports = app;