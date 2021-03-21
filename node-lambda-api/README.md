
This example originally came from this tutorial
https://mechanicalrock.github.io/2020/01/14/serverless-express-api.html
it has been simplified even further

## build the app
`sam build`

## deploy
`sam deploy --guided`

## push an update
```bash
sam deploy --template-file .aws-sam/build/template.yaml --stack-name node-lambda-api --capabilities CAPABILITY_IAM --s3-bucket aws-sam-cli-managed-default-samclisourcebucket-e6ui0w9p4aar
```