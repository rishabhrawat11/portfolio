const express = require('express');
const router = express.Router();

var fs = require('fs');
var Gallery = require('../models/gallery');



router.get('/', function(req,res,next){
    Gallery.find({}, function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.json(result);
      }
    });
});

router.post('/post', function(req,res,next){

  var images = './server/routes/contact.jpg';
  var title = 'test image';



  var newPost = new Gallery({

      title : title

    });
  newPost.image.data = fs.readFileSync(images);
  newPost.image.contentType = 'image/jpg';

  newPost.save(function(err, result){
    if(err){
      res.status(500);
    }
    else{
      console.log(result);
    }
  });

});



module.exports = router;
