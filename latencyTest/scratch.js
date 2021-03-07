const axios = require('axios');
const urls = [
  { name: 'qrksJvm', url: 'https://6ppz7k5hwf.execute-api.us-east-1.amazonaws.com/hello' },
  { name: 'springBootJvm', url: 'https://8043urqau8.execute-api.us-east-1.amazonaws.com/Prod/ping' },
  { name: 'qrksNative', url: 'https://h3w3ko9frb.execute-api.us-east-1.amazonaws.com/hello' }
]

// kick off calling all of them in parallel loops
callNTimes(randomInteger(5, 50), urls[0])
callNTimes(randomInteger(5, 50), urls[1])
callNTimes(randomInteger(5, 50), urls[2])

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