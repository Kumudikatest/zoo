let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    let img = Buffer.from(event.body,"base64");
    console.log(event);
    s3.putObject({
        "Body": img,
        "Bucket": "zoobucket",
        "Key": Date.now(),
        "ACL": "public-read"
    })
        .promise()
        .then(data => {
            callback(null, {
                "isBase64Encoded": true,
                "statusCode": 200,
                "body": "Success"
            });
        })
        .catch(err => {
            console.log(err, err.stack);
        });


}