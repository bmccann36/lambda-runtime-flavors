
## about

the project in this directory is meant to simulate traffice to the other API projects contained in the other folders

This one uses the serverless framework and was templated using the serverless create command. 

The handler Lambda function expects an environment variable named API_URLS that looks like this 
```json
[
  { name: "qrksJvm", url: "https://6ppz7k5hwf.execute-api.us-east-1.amazonaws.com/hello" },
  { name: "springBootJvm", url: "https://8043urqau8.execute-api.us-east-1.amazonaws.com/Prod/ping" },
  { name: "qrksNative", url: "https://h3w3ko9frb.execute-api.us-east-1.amazonaws.com/hello" }
]
```

the tester function will call all of these in parallel for a random number of times every five minutes
to turn it off just set concurrency to 0