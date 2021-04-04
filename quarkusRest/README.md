## PRE REQUISITES
- aws sam
- gradle
- docker 

## build for regular JVM
`./gradlew build`

## build as native image
`./gradlew build -Dquarkus.package.type=native -Dquarkus.native.container-build=true`

## deploy jvm version
`sam deploy -t build/sam.jvm.yaml -g`

## deploy native version
`sam deploy -t build/sam.native.yaml -g`

## testing out the API
after deployment is done you'll see this in the terminal
```
Outputs                                                                                                        
------------------------------------------------------------------------------------------
Key                 QuarkusrestApi                                                                                 
Description         URL for application                                                                            
Value               https://<?your_random_id?>.execute-api.us-east-1.amazonaws.com/                                        
------------------------------------------------------------------------------------------
```

make a GET request to the outputted URL with /hello added to the end

## push an update
```bash
sam deploy --template-file sam.jvm.yaml --stack-name jvm-quarkus --capabilities CAPABILITY_IAM
#or
sam deploy --template-file sam.native.yaml --stack-name quarkus-native --capabilities CAPABILITY_IAM
```