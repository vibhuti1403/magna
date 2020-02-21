
// Imports the Google Cloud client library
var express = require('express');
var router = express.Router();
//const bucketName = 'vibhuti';
const gc = require('../config/')
const bucket = gc.bucket('vibhuti')


// Creates a client
console.log("qwer");

router.get('/',async function(req, res){
  console.log("received: ");
//   const {Storage} = require('@google-cloud/storage');
// const filename = req.file;
// const storage = new Storage();
// console.log("in igiug");
//   console.log(req+"hfiurebgiub4rvbefji    +"+req.query+"  "+req.query.myFile);
//  storage.bucket(bucketName).upload(filename, {
    
//     gzip: true,
//     metadata: {
//       cacheControl: 'public, max-age=31536000',
//     },
//   });

//   console.log(`${filename} uploaded to ${bucketName}.`+res);
console.log(req);
uploadImage(req.file);
});



const uploadImage = (file) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file

  const blob = bucket.file(originalname.replace(/ /g, "_"))
  const blobStream = blob.createWriteStream({
    resumable: false
  })

  blobStream.on('finish', () => {
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    )
    resolve(publicUrl)
  })
  .on('error', () => {
    reject(`Unable to upload image, something went wrong`)
  })
  .end(buffer)

})

module.exports = router;
