'use strict';
const axios = require('axios');

const urlsAsJson = process.env.API_URLS;
const urls = JSON.parse(urlsAsJson);

module.exports.hello = async event => {

  // kick off calling all of them in parallel loops
  const pendingCalls = urls.map((api) => {
    return callNTimes(randomInteger(5, 50), api)
  })
  await Promise.all(pendingCalls);
  return {
    statusCode: 200,
    body: "done pinging"
  };

};

async function callNTimes(timesToCall, apiInfo) {
  for (let i = 0; i < timesToCall; i++) {
    console.log(`calling api ${apiInfo.name} call num ${i} of ${timesToCall}`);
    await callAndPause(apiInfo.url)
  }
}

async function callAndPause(urlToCall) {
  const waitTime = randomInteger(0, 5000)
  // make req 
  const res = await axios.get(urlToCall)
  console.log(res.data);
  console.log("waiting ", waitTime);
  // pause random amount of time
  await sleep(waitTime)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomInteger(min, max) {
  const rand = Math.random() * (max - min) + min;
  return Math.round(rand)
}