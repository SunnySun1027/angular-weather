var express = require('express');
var request = require('request');
var app = express(), port = 3001, apiRouter = express.Router();

apiRouter.use('/get-three-days',function (req, res) {
  console.log('Three days req.query.region = \n', req.query.region);
  let targetLocation = req.query.region,
    retObj = {};
  request.get(
    `https://api.seniverse.com/v3/weather/daily.json?key=icxoyqb2nrevbku8&location=${targetLocation}&language=zh-Hans&unit=c&start=0&days=5`,
    function (error, innerRes, body) {
      if (error) {
        console.log('Data Error: ', error);
      } else {
        console.log('Three days callback start : ');
        retObj = JSON.parse(body).results[0];
        if (retObj.daily !== undefined) {
          console.log('Successfully get the data! Ready to send...');
          res.set('Access-Control-Allow-Origin', '*');
          res.json(retObj);
        }
      }
    }
  ).on('error',function (err) {
    console.log('Internal Error: ',err);
  })
});


apiRouter.use('/get-single-day',function (req, res) {
  console.log('Single day :\ntargetLocation : \nreq.query.region = \n', req.query.region);

  let targetLocation = req.query.region,
    retObj = {};
  request.get(`https://api.seniverse.com/v3/weather/now.json?key=icxoyqb2nrevbku8&location=${targetLocation}&language=zh-Hans&unit=c`,
    function (error, innerRes, body) {
      if (error) {
        console.log('Data Error: ', error);
      } else {
        console.log('Single day callback start : ');
        retObj = JSON.parse(body).results[0];
        if (retObj.now !== undefined) {
          console.log('Successfully get the data! Ready to send...');
          res.set('Access-Control-Allow-Origin', '*');
          res.json(retObj);
        }
      }
    }
  ).on('error',function (err) {
    console.log('Internal Error: ',err);
  })
});

app.use('/api', apiRouter);

app.listen(port, function () {
  console.log('Dev Cross-origin-server is listening on port '+ port);
});
