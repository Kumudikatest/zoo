let AWS = require('aws-sdk');
const rekog = new AWS.Rekognition();
exports.handler = function (event, context, callback) {
    Rekognition.detectabels({
        Image: {
            S3Object: {
                Bucket: bucket,
                Name: key
            }
        },
        Maxlabels: 1
    }).promise()
        .then(data => {
            
            console.log(data);
            callback(null, { "message": "Successfully executed" });
        })
        .catch(err => { 
            callback(err);
        })
}